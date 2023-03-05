import React from "react"

const Icons = () => {
  return (
    <div id="icons" className="rpgui-container rpgui-center framed-grey">
      <h1>Icons</h1>
      <p>
        This example shows the built-in icons. These can be easily extended (
        <a href="http://opengameart.org/users/ouren" target="_blank">
          skeletons
        </a>{" "}
        not included).
      </p>
      <hr />
      <div className="rpgui-icon sword" />
      <div className="rpgui-icon shield" />
      <div className="rpgui-icon exclamation" />
      <br />
      <br />
      <div className="rpgui-icon potion-red" />
      <div className="rpgui-icon potion-green" />
      <div className="rpgui-icon potion-blue" />
      <br />
      <br />
      <div className="rpgui-icon weapon-slot" />
      <div className="rpgui-icon shield-slot" />
      <div className="rpgui-icon armor-slot" />
      <br />
      <br />
      <div className="rpgui-icon helmet-slot" />
      <div className="rpgui-icon ring-slot" />
      <div className="rpgui-icon potion-slot" />
      <br />
      <br />
      <div className="rpgui-icon magic-slot" />
      <div className="rpgui-icon shoes-slot" />
      <div className="rpgui-icon empty-slot" />
    </div>
  )
}

export default Icons
