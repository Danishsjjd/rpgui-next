import React from "react"
import Dropdown from "./Dropdown"
import List from "./List"

const Dropdown_List = () => {
  return (
    <div
      id="drop-and-list"
      className="rpgui-container framed-grey"
      style={{ height: 400 }}
    >
      <h1>Dropdown &amp; Lists</h1>
      <p>
        This example shows the dropdown (aka combobox) and the list widgets.
        These elements are made from simple &quot;select&quot; with
        &quot;options&quot; and rpgui class.
      </p>
      <hr />
      <div style={{ float: "left", width: "40%" }}>
        <p>Dropdown:</p>
        <Dropdown />
      </div>
      <div style={{ float: "right", width: "40%" }}>
        <p>List:</p>
        <List />
      </div>
      <div style={{ clear: "both" }} />
    </div>
  )
}

export default Dropdown_List
