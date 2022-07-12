@section Sections and Table of Contents
class: layout-cover-corp

# Sections and Table of Contents

---

# Description

The following slide uses a special `@subtoc` keyword that will be converted automatically
while building the slides and replaced with with text and links to any slides in the current section (denoted by `@section Name`) of the presentation decorated with `@subsection Name`.

```remark
---
# Listing subsections

`@subtoc`
---
```

**Note: Don't include the backticks around `@subtoc`, they're included here to let you see the code.**

---

# Listing subsections

@subtoc

---

@subsection Section 3.1

# My Title 3.1 here

My content 3.1...

```remark
`@subsection` Section 3.1

# My Title 3.1 here

My content 3.1...
```

**Note: Don't include the backticks around `@subsection`, they're included here to let you see the code.**

---

# My Title 3.1 (cont)

My content 3.1...

---

@subsection Section 3.2

# My Title 3.2 here

My content 3.2...