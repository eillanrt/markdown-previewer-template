import React, { useState } from "react";
import { marked } from 'marked';

const renderer = {
  codespan: (code) => `<code class="code-span">${code}</code>`,
  link: (href, title, text) => `<a href="${href}" target="_blank">${text}</a>`
};

marked.use({ renderer });

const App = () => {
  const defaultText = `# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is a alt text.](https://markdownlivepreview.com/image/sample.png)

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.
  `
  const [textValue, updateTextValue] = useState(defaultText)

  const handleOnChange = (event) => {
    updateTextValue(event.target.value)
    document.getElementById('preview').innerHTML = (
      marked.parse(event.target.value)
    )
  }
  const defaultParsed = marked.parse(defaultText).toString();

  const createdMarkedUp = () => {
    return { __html: defaultParsed }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <p>Markdown</p>
        <textarea id="editor" value={textValue} cols="70" rows="15" placeholder="Type your markdwon here" onChange={handleOnChange} />
      </div>
      <div className="wrapper">
        <p>Preview</p>
        <div id="preview" dangerouslySetInnerHTML={createdMarkedUp()}></div>
      </div>
    </div>
  )
}

export default App;