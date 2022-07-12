#!/usr/bin/env node

const path = require("path"), fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fse = require('fs-extra');

//Argument Parser
var argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .example('$0 --config course/argv.json', 'build the presentation HTML')
  .config('config', 'JSON configuration file to load')
  .alias('config', 'c')
  .demandOption('config')
  .array('variants')
  .describe('variants', 'Build only the specified course configurations')
  .alias('r', 'variants')
  .help('h')
  .alias('h', 'help')
  .count('verbose')
  .alias('v', 'verbose')
  .describe('v', 'Set verbosity level, e.g. -vvv for max verbosity')
  .alias('np', 'noprint')
  .describe('np', "Don't create a print version")
  .epilog('https://git.pentest.ngs/ncc-internal-tools/remarkjs-ncc')
  .argv;

// Export build function so this script can be imported
module.exports = {
  /**
   * Build RemarkJS Presentation files from the supplied configuration JSON
   * @param {object} config_obj Object containing configuration parameters
   * @param {string} config_file Path to a JSON course configuration file
   */
  build: function (config_obj, config_file) {
    DEBUG(`Running as exported function`);
    if (!config_obj && !config_file ){
      throw ('Configuration not supplied');
    }
    if (config_file && typeof(config_file) == 'string') {
      INFO(`Reading configuration from ${config_file}.`)
      config_obj = JSON.parse(config_file);
      config_obj.config = config_file;
    }

    DEBUG(`Running as exported function\n\n----CONFIGURATION----\n${JSON.stringify(argv, null, 2)}\n---------------------`);
    return build_html(config = config_obj, modular = true);
  }
};

// Functions used only to only print if verbosity enabled
VERBOSE_LEVEL = argv.verbose;
function WARN() { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
function INFO() { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }
function TRACE() { argv.trace && console.log.apply(console, arguments); }

// Determine if being run from command line or imported
if (require.main === module) {
  INFO('REMARKJS-NCC: Remark.js presentation builder by NCC Group');
  DEBUG(`Running from Command Line\n\n----CONFIGURATION----\n${JSON.stringify(argv, null, 2)}\n---------------------`);
  build_html(argv, modular = false);
}

/**
 * Build html output files for the provided JSON configuration file
 * @param {object} config Object containing configuration parameters
 * @param {boolean} modular True if running as an exported module
 */
function build_html(config, modular) {
  // store output filepaths in an array
  let htmlFiles = []

  // Build the HTML presentation
  //if (config) {
  INFO(`Building HTML presentation...`);

  // ---- CLASSES ----

  /**
   * The State class represents a course configuration.
   */
  class State {
    constructor(modules, flags) {
      TRACE('State()')
      this.modules = modules;
      this.flags = flags;
      this.sections = [];
      this.content = [];
      this.output = [];
    }

    // ---- CLASS FUNCTIONS ----

    /**
     * Reads a module from the specified markdown file.
     * @param {string} filename Markdown file to read
     */
    read_module(filename) {
      TRACE('State.read_module()');
      DEBUG(`Reading module file ${filename}`);
      var lines = fs.readFileSync(filename, {
        encoding: 'utf8'
      }).split('\n');

      var discardLines = false;
      for (var line of lines) {
        // skip the line if discard true
        if (discardLines) {
          // reset discard after slide
          if (line.startsWith('---')) {
            discardLines = false;
            continue;
          }
          continue;
        }

        if (line.startsWith('@section ')) {
          var title = line.substr(9).trim();

          if (this.current_section) {
            this.sections.push(this.current_section);
          }
          this.current_section = {
            "title": title,
            "slidename": title.replace(/[^A-Za-z0-9]/gi, ''),
            "subsections": []
          };
          this.content.push(`name: ${this.current_section.slidename}`);
        } else if (line.startsWith('@subsection ')) {
          if (this.current_section) {
              var title = line.substr(12).trim();

              var new_subsection = {
                "title": title,
                "slidename": `${this.current_section.slidename}_${title.replace(/[^A-Za-z0-9]/gi, '')}`
              };
              this.current_section.subsections.push(new_subsection);
              this.content.push(`name: ${new_subsection.slidename}`);
          } else {
              WARN("@subsection found but previous @section missing!")
          }
        } else if (line.startsWith('@subtoc')) {
          // Add the current section name for replacement once all slides loaded
          this.content.push(`@subtoc ${this.current_section.slidename}`);
        } else if (line.startsWith('@exclude_if ')) {
          if (this.flags.includes(line.substr(12).trim())) {
            discardLines = true;
          }
        } else if (line.startsWith('@include_if ')) {
          if (!this.flags.includes(line.substr(12).trim())) {
            discardLines = true;
          }
        } else {
          this.content.push(line);
        }
      }
      if (!discardLines) {
        this.content.push('---');
      }
    }

    find_section(name) {
      TRACE('State.find_section()')
      DEBUG(`searching for ${name}`);
      for (var section of this.sections) {
        DEBUG(`searching: ${name} => ${section.slidename}`);
        if (section.slidename == name) {
          DEBUG(`found: ${name} => ${section.title}`);
          return section;
        }
      }
      return null;
    }

    build_tocs() {
      TRACE('State.build_tocs()')
      DEBUG('Building Table of Contents')
      for (var line of this.content) {
        if (line.startsWith('@toc')) {
          var i = 0;
          var len = this.sections.length;
          for (var section of this.sections) {
            DEBUG(section);
            if (i == 0) {
              this.output.push(`<div class="line-height-close">`);
            }
            this.output.push(`* [${section.title}](#${section.slidename})`);
            if (i == (len - 1)) {
              this.output.push(`</div><br>`);
            }
            i++;
          }
        } else if (line.startsWith('@subtoc')) {
          var section_name = line.substr(8).trim();
          var section = this.find_section(section_name);
          if (section) {
            INFO("Building subtoc");
            DEBUG(section);
            var i = 0;
            var len = this.sections.length;
            for (var subsection of section.subsections) {
              if (i == 0) {
                this.output.push(`<div class="line-height-close">`);
              }
              this.output.push(`* [${subsection.title}](#${subsection.slidename})`);
              i++;
            }
          }
        } else
          this.output.push(line);
      }
    }

    /**
     * Load all modules
     */
    load_all() {
      TRACE('State.load_all()')
      for (var module of this.modules) {
        INFO(`Reading module ${course_root}/${module}`);
        this.read_module(`${course_root}/${module}`);
        DEBUG(this.sections.map(s => `${s.slidename}: ${s.title}`));
      }

      // Hack to exclude the last blank slide because in read_module() a
      // slide delimiter (---) is pushed at the end of each markdown file
      this.content.push('\nexclude: true\n');

      if (this.current_section)
        this.sections.push(this.current_section);

      //Build Table of Contents
      this.build_tocs();
    }

    all_text() {
      return Object.values(this.output).join("\n");
    }

    // ---- END OF CLASS FUNCTIONS ----

  };

  // ---- END OF CLASSES ----

  // ---- INTERNAL FUNCTIONS ----

  /**
   * Builds an HTML file from the specified input file and configuration
   * @param {string} infile HTML template file to use
   * @param {string} outfile Output HTML file name
   * @param {object} conf Configuration object
   * @param {boolean} print Include printable output files
   */
  function build_config(infile, outfile, conf, print) {
    TRACE('build_html.build_config()')
    DEBUG(`Building configuration ${JSON.stringify(conf)} from ${infile} to ${outfile}.`)
    var lines = [];
    var state = new State(conf.modules.map(m => `modules/${m}.md`), conf.flags);
    state.load_all();
    var slidetext = state.all_text();

    // remove all comments if 'print' is set (Handouts)
    if (print) {
      DEBUG('Removing comments from printable output')
      var IndexesToBeRemoved = [];
      var slideLines = slidetext.split('\n');
      var delLine = false;

      slideLines.forEach((line, index, arr) => {
        if (line === '???') { delLine = true; }
        if (line === '---' || line === '--') { delLine = false; }
        if (delLine) {
          TRACE("Print Version - Removing Line: " + line);
          // add item to array of to be removed items
          IndexesToBeRemoved.push(index);
        }
      });
      // remove newlines
      while (IndexesToBeRemoved.length) {
        // remove items from array
        slideLines.splice(IndexesToBeRemoved.pop(), 1);
      }
      // repeat with new list of indexes
      var MoreIndexesToBeRemoved = [];
      // remove all incremental slides (--)
      slideLines.forEach((line, index, arr) => {
        if (line === '--') {
          MoreIndexesToBeRemoved.push(index);
        }
      });
      while (MoreIndexesToBeRemoved.length) {
        // remove items from array
        slideLines.splice(MoreIndexesToBeRemoved.pop(), 1);
      }
      slidetext = slideLines.join('\n');
    }

    // Read HTML template
    DEBUG(`Reading HTML Template input file ${infile}`);
    data = fs.readFileSync(infile, 'utf8');
    TRACE(`Input File:\n${data}`)

    // If remarkjs extra config set, then apply settings
    if (config.remarkjs) {
      DEBUG(`Setting extra RemarkJS configuration: ${JSON.stringify(config.remarkjs)}`)
      for (const [key, value] of Object.entries(config.remarkjs)) {
        DEBUG(`Setting extra RemarkJS configuration ${key} ${value}`)
        var findStr = key + ':';
        if (typeof value === "boolean") { var replaceStr = key + ": " + value + ", //"; }
        else { var replaceStr = `${key}: '${value}', //`; }
        data = data.replace(findStr, replaceStr);
      }
    }
    // Extra configurations (Title/Favicon)
    DEBUG('Checking for extra configurations in config')
    const dom = new JSDOM(data);

    //Create Event Listener for dom.window.load()
    //dom.window.addEventListener("load", () => {
    dom.window.document.querySelector("textarea").textContent = slidetext;
    // If config has title defined, set it.
    if (config.title) {
      DEBUG(`Setting title ${config.title}`)
      dom.window.document.querySelector("title").textContent = config.title;
    }
    // If config has favicon defined, set it.
    if (config.favicon) {
      DEBUG('Setting favicon')
      dom.window.document.querySelector("link[rel*='shortcut icon']").href = config.favicon;
    }

    // Apply any flags
    DEBUG('Checking Flags...')
    if (conf.hasOwnProperty("flags")) {
      // Show slide numbers if there is flag
      if (conf.flags.includes("slide numbers")) {
        DEBUG("Flag detected: Will show slide numbers");
        var element = dom.window.document.createElement('style');
        element.setAttribute('type', 'text/css');
        element.innerHTML = '.remark-slide-number { display: unset; }';
        dom.window.document.getElementsByTagName('head')[0].appendChild(element);
      }
      // Show image borders there is flag
      if (conf.flags.includes("show image borders")) {
        DEBUG("Flag detected: Will show image borders");
        var element = dom.window.document.createElement('style');
        element.setAttribute('type', 'text/css');
        element.innerHTML = 'img { border: var(--img-border-size) solid black; }';
        dom.window.document.getElementsByTagName('head')[0].appendChild(element);
      }
    }

    //Write Synchronously if modular, otherwise async
    // Then write to array
    DEBUG(`Writing output file ${outfile}`)
    if (!modular) {
      fs.writeFile(outfile, dom.serialize(), (err) => {
        if (err) throw err;
        INFO(`Saved HTML output to ${outfile}`)
        htmlFiles.push(outfile);
      });
    }
    else {
      fs.writeFileSync(outfile, dom.serialize());
      INFO(`Saved HTML output to ${outfile}`)
      htmlFiles.push(outfile);
    }
    //});

  }

  /**
   * Copies files or folders.
   * @param {*} from Source file or directory
   * @param {*} to Destination directory
   */
  function do_copy(from, to) {
    DEBUG(`do_copy(${from}, ${to})`);
    DEBUG(`Copying from: ${to}`);
    var todir = path.dirname(to);
    DEBUG(`Copying to: ${todir}`);
    if (!fs.existsSync(todir)) {
      fs.mkdirSync(todir, {
        recursive: true
      });
    }
    // use synchronous if modular
    if (modular) {
      fse.copySync(from, to);
    }
    //ncp if not modular
    else {
      fse.copy(from, to);
    }
  }

  /* ---- END OF INTERNAL FUNCTIONS --- */

  //Build HTML
  DEBUG(`configuration:\n ${JSON.stringify(config)}\n`);

  //Update output path
  //Output root path should be the location of the config file
  var course_root = path.dirname(path.resolve(`${config.config}`));
  DEBUG(`Course root is: ${course_root}`)
  //Set course output as course root + output
  var course_output = `${course_root}/${config.output}`
  DEBUG(`Output path set to ${course_output}`)

  //Check if output folder exists, if not, create
  if (!fs.existsSync(course_output)) {
    DEBUG("Output folder does not exist, creating")
    fs.mkdirSync(course_output, {
      recursive: true
    });
  }

  //Copy Extra Folders
  config.extra.forEach(ef => {
    fromdir = `${course_root}/${ef}`
    INFO(`Copying extra folder ${fromdir}`);
    do_copy(fromdir, `${course_output}/${ef}`);
  });

  //Loop through Configurations and Process Each
  DEBUG(`Variants requested: ${config.variants}`);
  config.configurations.forEach(conf => {
    TRACE(conf.name + ':' + (config.variants && !config.variants.includes(conf.name)));
    if (config.variants && !config.variants.includes(conf.name)) { return; }
    if (!conf.modules || conf.modules.length == 0) {INFO(`No Modules in configuration ${conf.name}.`); return; }
    DEBUG(`Building configuration ${conf.name} with theme ${__dirname}/${config.theme}/theme/html/template.html to ${course_output}/${conf.name}.html (print: ${config.np})`);
    build_config(`${__dirname}/${config.theme}/theme/html/template.html`, `${course_output}/${conf.name}.html`, conf);
    if (!config.np) { //Don't produce printable output if np is set
      build_config(`${__dirname}/${config.theme}/theme/html/template.html`, `${course_output}/${conf.name}_print.html`, conf, true);
    }
  });

  // Copy theme directory into output directory
  INFO('Copying theme files...');
  // Copy all theme assets, but exclude html.
  var filterFunc = function (src, dest) {
    var re = /^(?!.*(html))/
    return re.test();
  }
  if (modular) {
    DEBUG('Copying synchronously')
    fse.copySync(`${__dirname}/${config.theme}/theme`, course_output + '/assets', { filter: filterFunc })
  }
  else {
    DEBUG('Copying asynchronously')
    fse.copy(`${__dirname}/${config.theme}/theme`, course_output + '/assets', { filter: filterFunc }, err => {
      if (err) return console.error(err)

      INFO('File copy complete')
    })
  }

  //return array of created HTML readFileSync
  DEBUG('Returning file array.');
  DEBUG(htmlFiles);
  return htmlFiles;

  //}

};
