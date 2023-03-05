import React from "react"

const Content = () => {
  return (
    <div id="paragraphs" className="rpgui-container framed-grey">
      <h1>Paragraphs &amp; Text Input</h1>
      <p>This example shows the basic paragraphs and headers in RPGUI.</p>
      <hr />
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <p>Regular paragraph (p)</p>
      <span>Span</span>
      <label>Label</label>
      <a>Link (a)</a>
      <br />
      <br />
      <label>Text input:</label>
      <input placeholder="first name" />
      <br />
      <br />
      <label>Textarea:</label>
      <textarea placeholder="write your story here..." defaultValue={""} />
    </div>
  )
}

export default Content
