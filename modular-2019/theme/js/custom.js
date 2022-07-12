// Apply custom column widths
$("[class^=left-column-]").each(function() {
    // get the size value from the class name
    var size = $(this).attr('class').split(' ')[0].split('-')[2];
    // apply css from left-column class
    $(this).addClass("left-column");
    // select parent (the layout-two-columns element)
    var twoCols = $(this).parent();
    // calc the width of the left column
    var leftSize = 42.55 * ((size * 2) / 100);
    // calc the width of the right column (based on left)
    var rightSize = (42.55 * 2) - leftSize;
    // apply the column sizes by updating the CSS GRID
    twoCols.attr('style', 'grid-template-columns: 6.9% ' + leftSize + '% 1.35% ' + rightSize + '% 6.9% !important;');
});
// add right-column class in case right-column-X is used
$("[class^=right-column-]").each(function() {
    $(this).addClass("right-column");
});

// Apply default layout to slides which don't have a layout class defined
// find each slide
$(".remark-slide-content").each(function() {
    // check if it has a layout defined
    var layout = $(this).attr('class').indexOf('layout-') !== -1;
    // if not, assign a default layout
    if (!layout) {
        // check if it should be two-columns, three top/bottom or a standard slide
        if ($(this).find(".top").length) {
            // apply the layout-three-top layout
            $(this).addClass("layout-three-top");
        } else if ($(this).find(".bottom").length) {
            // apply the layout-three-bottom layout
            $(this).addClass("layout-three-bottom");
        } else if ($(this).find(".left-column").length) {
            // apply the layout-two-columns layout
            $(this).addClass("layout-two-columns");
        } else {
            // apply the default layout
            $(this).addClass("layout-content-bar-ncc");
        }
    }
});


// Move all slide content into a div with the class main
$(".layout-plain, .layout-right, .layout-content-bar-ncc, .layout-content-bar-fox, .layout-content-bar-fort, .layout-cover-blank, .layout-blank").each(function() {
    // save the contents
    var contents = $(this).contents();
    // clear the slide content
    $(this).html('');
    // add a new div
    $(this).append('<div class="main"></div>');
    // restore the slide content inside of the main div
    $(this).find('.main').append(contents);
});


// Move title/h1 outside of main div if it has a title
$(".layout-plain, .layout-two-columns, .layout-two-rows, .layout-right, .layout-content-bar-ncc, .layout-content-bar-fox, .layout-content-bar-fort, .layout-blank").each(function() {
    // fing the title element
    var title = $(this).find('h1:first');
    // check if it exists
    if (title.length) {
        // if exists, remove
        title.remove();
        // move it outside of main div
        $(this).append(title);
    } else {
        // apply a no-title class if no title/h1
        $(this).addClass("no-title");
    }
});

// Support h2 subtitles
$(".layout-plain, .layout-two-columns, .layout-two-rows, .layout-three-top, .layout-right, .layout-content-bar-ncc, .layout-content-bar-fox, .layout-content-bar-fort, .layout-blank").each(function() {
    // fing the title element
    var subtitle = $(this).find('h2:first');
    if (subtitle.parent('.remark-slide-content').length) {
        // check if it exists
        if (subtitle.length) {
            // apply css
            subtitle.css('grid-area', 'title');
            subtitle.css('padding-top', 'calc(var(--main-h1-font-size) + 22px)');
            subtitle.css('font-size', 'var(--main-h2-font-size)');
            subtitle.css('padding-left', '0.8%');
            // add newlines
            var ctop = $(this).find('.top');
            if (ctop.length) {
                if (subtitle.parent('.remark-slide-content').length) {
                    ctop.prepend('<br/><br/>');
                }
            }
            // layout-two-cols
            var ctop = $(this).find('.left-column');
            if (ctop.length) {
                if (subtitle.parent('.layout-two-columns').length) {
                    ctop.prepend('<br/><br/>');
                }
            }
            var ctop = $(this).find('.right-column');
            if (ctop.length) {
                if (subtitle.parent('.layout-two-columns').length) {
                    ctop.prepend('<br/><br/>');
                }
            }

        }
    }
});

// If slide uses layout with image on left/right, move it outside of main div
$(".layout-right, .layout-left").each(function() {
    var i = $(this).find('img:first');
    i.remove();
    $(this).append(i);
});

// Apply footers to slides that need a div footer
document.querySelectorAll('.layout-two-columns').forEach(x => {
    $('.layout-two-columns').css('grid-template-areas', '". . . . ." ". title title title ." ". left-column . right-column ." ". . . . ." "footer footer footer footer footer"');
    $('.layout-two-columns').css('grid-template-rows', 'var(--layout-top-spacing) var(--layout-title-content-spacing) 71% 3% 74px');
});
document.querySelectorAll('.layout-two-columns, .layout-two-rows, .layout-three-top, .layout-three-bottom, .layout-four').forEach(x => {
    divf = document.createElement('div');
    divf.setAttribute('class', 'content-bar');
    divf.setAttribute('style', 'background-position: 92.1% 46.8%, center 100%;');
    x.appendChild(divf);
});
document.querySelectorAll('.layout-plain').forEach(x => {
    divf = document.createElement('div');
    divf.innerHTML = '<img src="assets/img/logo_red.png">';
    divf.setAttribute('class', 'footer');
    x.appendChild(divf);
});
document.querySelectorAll('.layout-right').forEach(x => {
    divf = document.createElement('div');
    divf.innerHTML = '<img src="assets/img/logo_red.png">';
    divf.setAttribute('class', 'footer');
    x.appendChild(divf);
});


// Add branded footers - inserts applicable logo based on class
$('.layout-content-bar-ncc').each(function() { $(this).append('<div class="content-bar"></div>'); });
$('.layout-content-bar-fox').each(function() { $(this).append('<div class="content-bar"><img src="assets/img/logo_foxit.png" style="padding-left: 3.7%; width: 17.25%; padding-top: 1.3%;"></div>'); });
$('.layout-content-bar-fort').each(function() { $(this).append('<div class="content-bar"><img src="assets/img/logo_fortconsult.png" style="padding-left: 4.3%;width: 18.4%;padding-top: 1.5%;"></div>'); });

// Hack to support imaging sizing
document.querySelectorAll('img').forEach(x => {
    // If image has ?width= in its src attribute, then update the image style/size.
    if (x.getAttribute('src').includes('?width=')) {
        var y = x.getAttribute('src').split("?width=");
        x.setAttribute('src', y[0]);
        x.setAttribute('style', "width: " + y[1]);
    }
});

// Ensure assets don't have borders
$("img").each(function() {
    if ($(this).attr('src').indexOf("assets/img/") >= 0) {
        $(this).css('border', 'none');
    }
});

// allow text-colour-* highlighting in codeblocks
// Find every line of code
$(".remark-code-line").each(function() {
    //Ignore if the code block language is set to 'code-plain'
    if (!$(this).parents('.code-plain').length) {
        // Save the content to variable textCol
        var textCol = $(this).text();
        // Find lines that start with the class
        if (textCol.startsWith('.text-colour-')) {
            // remove class from line
            var content = textCol.split('[')[1].split(']')[0];
            $(this).text(content);
            // apply the class
            var colourClass = textCol.split('.')[1].split('[')[0];
            $(this).attr('class', colourClass + ' remark-code-line');
        } else if (textCol.includes('.text-colour-')) {
            var colour = textCol.split('.text-colour-')[1].split('[')[0];
            var codeHTML = $(this).html();
            var colourClass = textCol.split('.')[1].split('[')[0];
            codeHTML = codeHTML.replace('.' + colourClass + '[', '<div class="inline-code-colour" style="color: ' + colour + ' !important; display: inherit;">');
            codeHTML = codeHTML.replace(']', '</div>');
            $(this).html(codeHTML);
            $(this).find('.inline-code-colour').find('span').each(function(i) {
                $(this).attr('style', 'color: ' + colour + ' !important;');
            });
        }

        // Support font size in code blocks
        if (textCol.startsWith('.font-size-')) {
            // remove class from line
            var size = textCol.split('.font-size-')[1].split('[')[0];
            var content = textCol.split('[')[1].split(']')[0];
            var codeHTML = $(this).html();
            codeHTML = codeHTML.replace('.font-size<span class="hljs-number">-' + size + '</span>[', '');
            codeHTML = codeHTML.replace(']', '');
            $(this).html(codeHTML);
            // apply the class
            var colourClass = textCol.split('.')[1].split('[')[0];
            $(this).attr('class', colourClass + ' remark-code-line');
        } else if (textCol.includes('.font-size-')) {
            var size = textCol.split('.font-size-')[1].split('[')[0];
            var codeHTML = $(this).html();
            var fontClass = textCol.split('.')[1].split('[')[0];
            codeHTML = codeHTML.replace('.' + fontClass + '[', '<div class="font-size-' + size + '">');
            codeHTML = codeHTML.replace(']', '</div>');
            $(this).html(codeHTML);
        }
    }
    //Special actions for code-plain
    else {
        //Restore asterisk to 'highlighted lines'
        if ($(this).hasClass('remark-code-line-highlighted')) {
            $(this).removeClass('remark-code-line-highlighted');
            $(this).text('*' + $(this).text());
        }
    }
});

// Apply colors to text-colour-*
$("[class^=text-colour-]").each(function() {
    // get the colour value from the class name
    var colour = $(this).attr('class').split(' ')[0].split('-')[2];
    // if ncc colour apply CSS variable, else apply the colour
    switch (colour) {
        case 'blue':
        case 'gold':
        case 'purple':
        case 'raspberry':
        case 'red':
        case 'teal':
            $(this).css('color', "var(--ncc-" + colour + ")");
            break;
        default:
            $(this).css('color', colour);
    }
});

// Apply custom font size
$("[class^=font-size-]").each(function() {
    // get the size value from the class name
    var size = $(this).attr('class').split(' ')[0].split('-')[2];
    $(this).attr('style', 'font-size: ' + size + 'px !important;');
    // if has table explicitly apply style to table
    if ($(this).has('table').length) {
        $(this).find('table').attr('style', 'font-size: ' + size + 'px !important;');
    }
    // If code then apply to all span tags
    if ($(this).has('code, .remark-code-line ').length) {
        $(this).find('span').attr('style', 'font-size: ' + size + 'px !important;');
        $(this).find('.remark-code-line').attr('style', 'font-size: ' + size + 'px !important;');
    }

});

// Automatically resize headers if too big
$(".remark-slide h1").each(function() {
    // get the number of characters
    var chars = $(this).text().length;

    // only resize title headers (ignore h1 in slide content)
    if (!$(this).parents('.main').length) {
        // define max chars and the new font size for each class
        var parentclass = $(this).parent().attr('class');
        if (parentclass.indexOf('layout-content') >= 0) {
            var charLimit = 46;
            var newSize = (45 - ((chars / 45) * 5));
        } else if (parentclass.indexOf('layout-right') >= 0) {
            var charLimit = 24;
            var newSize = 34;
        } else if (parentclass.indexOf('layout-cover-') >= 0) {
            var charLimit = 30;
            var newSize = 62;
        } else {
            // set a generic char limit for other classes
            var charLimit = 50;
            var newSize = (45 - ((chars / 45) * 5));
        }

        // If title has more than allowed characters, reduce font size.
        if (chars > charLimit) {
            $(this).attr('style', 'font-size: ' + newSize + 'px !important;');
        }
    }

});

// Hide @toc and @subtoc links in print version
$(function() {
    // Check if its print version
    if (document.location.href.indexOf('_print.html') > -1) {
        $(".line-height-close").find("a").each(function() {
            // replace a tag with p tag
            $(this).replaceWith($('<p>' + this.innerHTML + '</p>'));
        });
    }
});

// Ensure text in @toc and @subtoc does not overlap
$(".line-height-close").find("a").each(function() {
    // check number of characters and adjust line height CSS if needed
    var chars = $(this).text().length;
    if (chars > 50) {
        $(this).parent().attr('style', 'line-height: 22px; margin-top: -5px; margin-bottom: -5px;');
    }
});

// Ensure code blocks with no highlighting have background
$(".no-highlight.remark-code").each(function() {
    // Check if it has hljs class (one that gives the background)
    var hljs = $(this).attr('class').indexOf('layout-') !== -1;
    if (!hljs) {
        if ($(this).is("code")) { $(this).addClass('hljs'); }
    }
});

// Fix for multiple classes on single line
$(".left-column, .right-column").each(function() {
    // if .right-column or .left-column parent is p tag then move outside and remove p
    if ($(this).parent().is("p")) {
        // select slide element
        slide = $(this).parent().parent();
        // get the html contents
        var contents = $(this).html();
        // remove parent p tag and all within
        $(this).parent().remove();
        // readd contents to correct column
        if (slide.children().hasClass("left-column")) {
            var html = '<div class="right-column"><p>' + contents + '</p></div>';
            slide.append(html);
        } else {
            var html = '<div class="left-column"><p>' + contents + '</p></div>';
            slide.append(html);
        }
    }
});

// support layouts with no title
$(".no-title").each(function() {
    // get grid areas
    var style = $(this).css("grid-template-areas");
    // replace unused title areas with main
    style = style.replace('title', 'main');
    // apply the new CSS
    $(this).css('grid-template-areas', style);
});

// Ensure list text does not wrap
$("ul > li > p").each(function() {
    $(this).contents().unwrap();
});

// Fix spacing between two code blocks
$("pre").each(function() {
    // if multiple code blocks next to each other, insert line break
    if ($(this).next().is("pre")) {
        $(this).append("<br>");
    }
});