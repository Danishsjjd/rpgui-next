import React from "react"

const Links = () => {
  return (
    <>
      <h1 style={{ fontSize: "150%" }}>Examples</h1>
      <p>
        Below are examples of key elements in RPGUI. Scroll down or choose from
        the list to view an example:
      </p>
      {/* links */}
      <ul>
        <li>
          <a href="#containers">Containers</a>
        </li>
        <li>
          <a href="#paragraphs">Paragraphs &amp; Text Input</a>
        </li>
        <li>
          <a href="#buttons">Buttons</a>
        </li>
        <li>
          <a href="#radio-and-check">Radio &amp; Checkbox</a>
        </li>
        <li>
          <a href="#drop-and-list">Dropdown &amp; Lists</a>
        </li>
        <li>
          <a href="#icons">Icons</a>
        </li>
        <li>
          <a href="#sliders">Sliders</a>
        </li>
        <li>
          <a href="#progress">Progress bar</a>
        </li>
        <li>
          <a href="#disabled">Disabled Elements</a>
        </li>
        <li>
          <a href="#cursors">Cursors</a>
        </li>
      </ul>
    </>
  )
}

export default Links
