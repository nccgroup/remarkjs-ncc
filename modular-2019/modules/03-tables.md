@section Tables
class: layout-cover-corp

# Tables

---

class: raspberry raspberry-table

# Tables

* This table uses the `raspberry-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* Table headers are centered by default
* The second row of the markdown table defines how cell content is aligned
  * This table has `---` so no alignment is set, default is to align to the left

| DLL        | APIs                                           |
| ---------- |------------------------------------------------|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |

---

# Tables - Code

```code-plain
class: raspberry raspberry-table

# Tables

* This table uses the `raspberry-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* Table headers are centered by default
* The second row of the markdown table defines how cell content is aligned
  * This table has `---` so no alignment is set, default is to align to the left

| DLL        | APIs                                           |
| ---------- |------------------------------------------------|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |
```

---

class: blue blue-table

# Tables (cont.)

* This table uses the `blue-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* Table headers have been aligned to the left using `.left[]`
* The second row of the markdown table defines how cell content is aligned
  * This table uses `:--:` so cell content is centered

| .left[ DLL ] | .left[ APIs ] |
| :---------: |:----------------------------------------------:|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |

---

# Tables - Code

```code-plain
---

class: blue blue-table

# Tables (cont.)

* This table uses the `blue-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* Table headers have been aligned to the left using `.left[]`
* The second row of the markdown table defines how cell content is aligned
  * This table uses `:--:` so cell content is centered

| .left[ DLL ] | .left[ APIs ] |
| :---------: |:----------------------------------------------:|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |

---
```

---

class: purple purple-table

# Tables (cont.)

* This table uses the `purple-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table

--

* The first column is using left alignment (which does not do anything since it is the default)
  * `:--`
* The second column is using right alignment
  * `--:`

| DLL | APIs |
| :-------- |--------------------------------------------:|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |

---

# Tables - Code

```code-plain
---
class: purple purple-table

# Tables (cont.)

* This table uses the `purple-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table

--

* The first column is using left alignment (which does not do anything since it is the default)
  * `:--`
* The second column is using right alignment
  * `--:`

| DLL | APIs |
| :-------- |--------------------------------------------:|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |

---
```

---

class: teal teal-table

# Tables (cont.)

* This table uses the `teal-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* The second column is using centered alignment
  * `:--:`

| DLL        | APIs                                           |
| :--------- |:-----------------------------------------------:|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |

---

# Tables - Code

```code-plain
---
class: teal teal-table

# Tables (cont.)

* This table uses the `teal-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* The second column is using centered alignment
  * `:--:`

| DLL        | APIs                                           |
| :--------- |:-----------------------------------------------:|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |

---
```

---
class: red-table

# Tables - Font Sizing

* This table uses the `red-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* You can use `font-size-xx` in order to set the font size for any row or cell

| DLL        | APIs                                           |
| :--------- |:-----------------------------------------------|
| .font-size-18[ntdll]    | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | .font-size-14[WinExec, Process32First, OpenProcess ]    |
| wininet    | UrlDownloadToFile, InternetConnect         |

---

# Tables - Font Sizing (Code)

```code-plain
---
class: red-table

# Tables - Font Sizing

* This table uses the `red-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* You can use `font-size-xx` in order to set the font size for any row or cell

| DLL        | APIs                                           |
| :--------- |:-----------------------------------------------|
| .font-size-18[ntdll]    | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | .font-size-14[WinExec, Process32First, OpenProcess ]    |
| wininet    | UrlDownloadToFile, InternetConnect         |

---
```

---

class: gold-table

# Tables - More Font Sizing

* This table uses the `gold-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* You can also wrap the whole table in a `font-size-xx` in order to set the font size 

.font-size-14[
| DLL        | APIs                                           |
| :--------- |:-----------------------------------------------|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |
]

---

# Tables - More Font Sizing (Code)

```code-plain
class: gold-table

# Tables - More Font Sizing

* This table uses the `gold-table` class
* This is just a list of APIs in some Windows DLL to show how to draw a table
* You can also wrap the whole table in a `font-size-xx` in order to set the font size 

.font-size-14[
| DLL        | APIs                                           |
| :--------- |:-----------------------------------------------|
| ntdll      | QuerySystemInformation, RtlAdjustPrivilege |
| kernel32   | WinExec, Process32First, OpenProcess     |
| wininet    | UrlDownloadToFile, InternetConnect         |
]

---
```

---

# Widths for tables

As you can see below, the text is cut in the last column. To work around it,
check the following slide...

| Windows versions | Arch | Increment primitive | 0 value overwrite primitive | PreviousMode permanent? | PreviousMode usage |
| --- | --- | --- | ----- | ----- | ----- |
| Vista to 7  | x86 | Yes | No | No | Raceable only with increment primitive |
| 8 to 10 1809 | x86 | Yes | Yes | No | Raceable with 0 value overwrite primitive |
| Vista | x64 | Yes | No | Yes | Direct |
| 7 to 10 1809  | x64 | Yes | Yes | Yes | Direct |

---

# Widths for tables (cont.) 

To work around it, you can add `<br>` to create a new line, e.g. used in some of the
title rows: 

```
0 value <br> overwrite <br> primitive
```

| Windows versions | Arch | Increment <br> primitive | 0 value <br> overwrite <br> primitive | PreviousMode <br> permanent? | PreviousMode usage |
| --- | --- | --- | ----- | ----- | ----- |
| Vista to 7  | x86 | Yes | No | No | Raceable only with increment primitive |
| 8 to 10 1809 | x86 | Yes | Yes | No | Raceable with 0 value overwrite primitive |
| Vista | x64 | Yes | No | Yes | Direct |
| 7 to 10 1809  | x64 | Yes | Yes | Yes | Direct |
