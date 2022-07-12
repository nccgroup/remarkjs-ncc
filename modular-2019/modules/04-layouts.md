@section Slide Layouts

class: layout-cover-corp

# Slide Layouts

---

# Layouts - Default

The template supports a number of different layouts through the use of the `class:` slide decorator. This slide uses `layout-content-bar-ncc` which follows a standard Title and Content layout, and is the default for any slide without another layout set.

You can also specify this layout using:

```remark
class: layout-content-bar-ncc
```

---

# Layouts - Multiple

.left-column[
The template has a number of supported slide layouts:

.center[
![](img/layout-two-columns.png?width=250px)

`layout-two-columns`

![](img/layout-two-rows.png?width=250px)

`layout-two-rows`

]

This slide uses `layout-two-columns`.
]

.right-column[
<br>
.center[
![](img/layout-three-top.png?width=250px)

`layout-three-top`

![](img/layout-three-bottom.png?width=250px)

`layout-three-bottom`
]
]

---

# Two Columns Layout
.left-column[
The use of `.left-column[]` and `.right-column[]` allows you to specify where content should be placed.

The theme detects the use of these classes and applies the `layout-two-columns` class.
]

.right-column[
.center[ ![](img/debugger_vs_printf.jpg?width=500px) ]
]

---

# Two Columns Layout - Code

```remark
---

# Two Columns Layout - Simple

.left-column[
The use of `.left-column[]` and `.right-column[]` allows you to specify where content should be placed.

The theme detects the use of these classes and applies the `layout-two-columns` class.
]

.right-column[
.center[ ![](img/debugger_vs_printf.jpg?width=500px) ]
]

---
```

---

# Two Columns Layout - Custom Width

.left-column-40[
This example is similar to previous slide except we use `.left-column-40[]` instead of `.left-column[]`.

The use of `.left-column-xx[]` with xx being a percentage (e.g. `40`) allows you to specify what percentage of the width is used for the left column. By default `.left-column[]` equals to `.left-column-50[]`.

You don't need to specify a percentage for the `.left-column[]` as it will be automatically deduced.
]

.right-column[
.center[ ![](img/debugger_vs_printf.jpg?width=500px) ]
]

---

# Two Columns Layout - Custom Width Code

```remark
---

# Two Columns Layout - Custom Width

.left-column-40[
This example is similar to previous slide except we use `.left-column-40[]` instead of `.left-column[]`.

The use of `.left-column-xx[]` with xx being a percentage (e.g. `40`) allows you to specify what percentage of the width is used for the left column. By default `.left-column[]` equals to `.left-column-50[]`.

You don't need to specify a percentage for the `.left-column[]` as it will be automatically deduced.
]

.right-column[
.center[ ![](img/debugger_vs_printf.jpg?width=500px) ]
]

---
```

---
class: layout-two-rows

# Two Rows Layout

.top[
This example shows the `layout-two-rows` layout which allows you to specify content into the `.top[]` and `.bottom[]` sections.
]

.bottom[
.center[![](img/ncc_ninja_banner.png?width=850px)]
]

---

# Two Rows Layout - Code

```remark
---
class: layout-two-rows

# Two Rows Layout Example

.top[
This example shows the `layout-two-rows` layout which allows you to specify content into the `.top[]` and `.bottom[]` sections.
]

.bottom[
.center[![](img/ncc_ninja_banner.png?width=850px)]
]

---
```

---

# Top Layout Example

.top[
This layout is similar to the `layout-two-columns` class, however as `.top[]` has been specified in the markdown, the `layout-three-top` class has automatically been applied.
]

.left-column[
.center[ ![](img/debugger_vs_printf.jpg?width=300px) ]
]

.right-column[
.center[ ![](img/debugger_vs_printf.jpg?width=300px) ]
]

---

# Top Layout Example - Code

```remark
---

# Top Layout Example

.top[
This layout is similar to the `layout-two-columns` class, however as `.top[]` has been specified in the markdown, the `layout-three-top` class has automatically been applied.
]

.left-column[
.center[ ![](img/debugger_vs_printf.jpg?width=300px) ]
]

.right-column[
.center[ ![](img/debugger_vs_printf.jpg?width=300px) ]
]

---
```

---

# Bottom Layout Example

.left-column[
.center[ ![](img/debugger_vs_printf.jpg?width=300px) ]
]

.right-column[
.center[ ![](img/debugger_vs_printf.jpg?width=300px) ]
]

.bottom[
This layout is similar to the `layout-two-columns` class, however as `.bottom[]` has been specified in the markdown, the `layout-three-bottom` class has automatically been applied.
]

---

# Bottom Layout - Code

```remark
---

# Bottom Layout Example

.left-column[
.center[ ![](img/debugger_vs_printf.jpg?width=300px) ]
]

.right-column[
.center[ ![](img/debugger_vs_printf.jpg?width=300px) ]
]

.bottom[
This layout is similar to the `layout-two-columns` class, however as `.bottom[]` has been specified in the markdown, the `layout-three-bottom` class has automatically been applied.
]

---
```

---

# Full Page Media

The following slide uses the `layout-media-full` layout to display a full-slide image.

Code:

```remark
---

class: layout-media-full

![Machine Learning Meme](img/Ml-MEME.jpg)

---
```

---

class: layout-media-full

![Machine Learning Meme](img/Ml-MEME.jpg)

???

Example of image filling slide

---

# Cover Layouts

A number of corporate cover layouts are available, these can be used as presentation or section titles.

* `layout-cover-abstract`
* `layout-cover-annual_report`
* `layout-cover-annual_report_v2`
* `layout-cover-connection`
* `layout-cover-corp`
* `layout-cover-safer`
* `layout-cover-city`
* `layout-cover-blank`
* `layout-cover-plain`
* `layout-cover-maritime` (Transport Assurance)
* `layout-cover-automotive` (Transport Assurance)

---

class: layout-cover-abstract

# Abstract Cover

## layout-cover-abstract

---

class: layout-cover-annual_report

# Annual Report Cover

## layout-cover-annual_report

---

class: layout-cover-annual_report_v2

# Annual Report Cover 2

## layout-cover-annual_report

---

class: layout-cover-connection

# Connection

## layout-cover-connection

---

class: layout-cover-corp

# Corporate

## layout-cover-corp

---

class: layout-cover-safer

# Safer

## layout-cover-safer

---

class: layout-cover-city white

# City

## layout-cover-city white

---

class: layout-cover-maritime white

# Maritime

## layout-cover-maritime white

---

class: layout-cover-automotive white

# Automotive

## layout-cover-automotive white

---

class: layout-cover-blank

## layout-cover-blank

---

class: layout-cover-plain

# Plain

## layout-cover-plain

???

This is a comment example

---

class: layout-blank

# layout-blank

* Bullet point text

Some text

[A hyperlink](https://www.nccgroup.trust/)

_Italic text_

<u>underlined</u>

__bold__

<br/>

Text below newline