<!-- vim-markdown-toc GFM -->

* [Remark.js presentation builder by NCC Group](#remarkjs-presentation-builder-by-ncc-group)
    * [Supported templates](#supported-templates)
    * [Features](#features)
        * [Configuration](#configuration)
        * [Markdown Extensions](#markdown-extensions)
    * [Build The Presentations](#build-the-presentations)
        * [Build In HTML Format](#build-in-html-format)
            * [Shortcuts](#shortcuts)
        * [Generate the PDF Format](#generate-the-pdf-format)

<!-- vim-markdown-toc -->

# Remark.js presentation builder by NCC Group

It allows you to write the slides in [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and visualize them in a browser such as Chrome/Firefox/etc. as well as exporting the slides in PDF.

See [remarkjs](https://github.com/gnab/remark/wiki).

## Supported templates

All the supported templates store the styles in a dedicated .css to ease comparing and porting new features from one template to another.

* `modular-2019/`: remarkjs presentation template by NCC Group

Feel free to do a PR if you write your own template. You can do so by duplicating the `modular-2019` folder and customizing it.

## Features

The content is written in an enhanced Markdown as explained on the [remarkjs wiki](https://github.com/gnab/remark/wiki/Markdown).
Content is split into separate markdown files (with `.md` extension) in the [modules](modular-2019/modules/) directory.

It is possible to generate automatically different slide-decks from the same pool of markdown files. This is defined in the `modules` of the configuration file as explained below.

### Configuration

The [config.json](modular-2019/config.json) file defines a number of settings used during the building process. The settings in this file are:

* `title`: This sets the title of the generated HTML file
* `theme`: The presentation template you want to use. A list of available templates can be found in the [remarkjs-ncc repo](https://github.com/nccgroup/remarkjs-ncc), the current template is `modular-2019`
* `output`: A directory into which the generated HTML presentations should be placed. Use `.` to place output directly into the current directory
* `extra`: A list of files which should be copied into the output directory, if required. This can be omitted entirely if `output` is `.`. If you want to copy all files from a directory, put the directory name in followed by `/` (e.g. `img/`)
* `configurations`: A list of configurations to build. The settings for each configuration are:
  * `name`: The name of this configuration; this will be used to name the output HTML file (with `.html` appended)
  * `modules`: A list of module names. These will be included in the order which they appear in this list. For each module `name`, the file `modules/name.md` will be read
  * `flags`: A list of flags for conditional slide inclusion (see below)

### Markdown Extensions

In addition to remarkjs's [slide properties](https://github.com/gnab/remark/wiki/Markdown#slide-properties), the script to build the presentation, `build.js`, adds some new capabilities for slide generation. Each of these should be placed on its own line in the module file, with no leading or trailing characters.

* `@section [section name]`: Defines the beginning of a section. This creates no text in the output slide, but serves as a marker for table of contents generation. Must be placed at the beginning of a slide, before any text content
* `@subsection [subsection name]`: Defines the beginning of a subsection. Similar to `@section`, this creates no text but serves as a marker. Must be placed at the beginning of a slide, before any text content
* `@toc`: Generates a table of contents or agenda slide text. This will be a bulleted list of all `@section` headings appearing in the current configuration; each item on the list will be a link to the relevant section slide. Should be placed inside a slide body
* `@subtoc`: As for `@toc`, but generates a list of the `@subsection`s inside the current `@section`
* `@include_if [flagname]`: Include the current slide only if `flagname` is in the `flags` list for this configuration. Must be placed at the beginning of a slide, before any text content
* `@exclude_if [flagname]`: Include the current slide only if `flagname` is *not* in the `flags` list for this configuration. Must be placed at the beginning of a slide, before any text content

## Build The Presentations

The [remarkjs-ncc](https://github.com/nccgroup/remarkjs-ncc) repository contains the script to build the presentation, `build.js`, and all of the avaliable templates.

Before building, the node.js dependencies (e.g. `jsdom`) must be downloaded:

```bash
$ cd remarkjs-ncc
$ npm install
```

>Note, this requires `node` and `npm` packages to be installed. E.g. On Ubuntu run `sudo apt install -y nodejs npm` to install.

### Build In HTML Format

Once this is done, simply run the `build.js` script and specify the location of the courses config file to build all configurations at once:

```bash
$ cd remarkjs-ncc
$ node build.js --config modular-2019/config.json
Reading configuration file
Loaded Config:
{ theme: 'modular-2019',
  output: 'out',
  extra: [ 'img/' ],
  configurations:
[...]
```

The HTML output will then be saved in `modular-2019/out/`, or wherever the output key is set to in the [config.json](modular-2019/config.json) and you can navigate it in a browser such as Chrome/Firefox/etc. 

#### Shortcuts

The presentation supports shortcuts. Useful shortcuts when navigating the presentation in a browser:

* `p`: switch between normal and presenter mode (with comments)
* `c`: clone display: allows to have the one with comment in one window and the one presenting in another
* `h`: list keyboard shortcuts

References:

* https://github.com/gnab/remark/wiki/Presentation-mode
* https://github.com/gnab/remark/wiki/Keyboard-shortcuts

### Generate the PDF Format

The tool [decktape](https://github.com/astefanutti/decktape) takes in HTML files and turns them into PDFs. You can use the HTML from created above, to create a PDF of the presentation.

```bash
$ decktape --chrome-arg=--no-sandbox --chrome-arg=--allow-file-access-from-files remark /path/to/slides.html /path/to/slides.pdf
Loading page file:///path/to/slides.html ...
Loading page finished with status: 0
Remark JS plugin activated
Printing slide #13      (13/13) ...
Printed 13 slides
```

>Note, this requires the `decktape` node package to be installed. Run `npm install -g decktape` to install.
