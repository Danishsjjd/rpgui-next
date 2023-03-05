import { pressStart } from "@/pages/_app"
import React from "react"

const Cursors = () => {
  return (
    <div id="cursors" className="rpgui-container framed-grey rpgui-center">
      <h1>Cursors</h1>
      <p>This example shows the basic cursors.</p>
      <hr />
      <button
        type="button"
        className="rpgui-button rpgui-cursor-default"
        style={{ width: "30%", ...pressStart.style }}
      >
        <p>Default</p>
      </button>
      <button
        type="button"
        className="rpgui-button rpgui-cursor-point"
        style={{ width: "30%", ...pressStart.style }}
      >
        <p>Pointer</p>
      </button>
      <button
        type="button"
        className="rpgui-button rpgui-cursor-select"
        style={{ width: "30%", ...pressStart.style }}
      >
        <p>Text Select</p>
      </button>
      <button
        type="button"
        className="rpgui-button rpgui-cursor-grab-open"
        style={{ width: "30%", ...pressStart.style }}
      >
        <p>Grab Open</p>
      </button>
      <button
        type="button"
        className="rpgui-button rpgui-cursor-grab-close"
        style={{ width: "30%", ...pressStart.style }}
      >
        <p>Grab Close</p>
      </button>
    </div>
  )
}

export default Cursors
