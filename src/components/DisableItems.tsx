import React from "react"
import Dropdown from "./Dropdown"
import List from "./List"
import Slider from "./Slider"

const DisableItems = () => {
  return (
    <div id="disabled" className="rpgui-container framed-grey">
      <h1>Disabled Elements</h1>
      <p>
        All RPGUI elements can be disabled using the &quot;disable&quot;
        attribute. Here&apos;s an example of disabled RPGUI elements.
      </p>
      <hr />
      {/* simple inputs */}
      <div style={{ width: "42%", float: "left" }}>
        <h1>Text Input</h1>
        <label>Your hero name:</label>
        <input
          disabled
          type="text"
          name="FirstName"
          defaultValue="Bob"
          placeholder="Hero name"
        />
        <br />
        <br />
        <label>Your hero last name:</label>
        <input
          disabled
          type="text"
          name="FirstName"
          defaultValue="The Destroyer"
          placeholder="Hero last name"
        />
        <br />
        <br />
        <label>Your hero bio:</label>
        <textarea
          disabled
          rows={3}
          cols={50}
          defaultValue={"Bob The Destroyer likes to destroy stuff."}
        />
        <h1>Sliders:</h1>

        <Slider disabled />
        <p>Golden slider:</p>
        <Slider className="golden" disabled />
        <h1>Icons</h1>
        <div className="rpgui-center">
          <div className="rpgui-icon rpgui-disabled sword" />
          <div className="rpgui-icon rpgui-disabled shield" />
          <div className="rpgui-icon rpgui-disabled exclamation" />
          <br />
          <br />
          <div className="rpgui-icon rpgui-disabled potion-red" />
          <div className="rpgui-icon rpgui-disabled potion-green" />
          <div className="rpgui-icon rpgui-disabled potion-blue" />
          <br />
          <br />
          <div className="rpgui-icon rpgui-disabled weapon-slot" />
          <div className="rpgui-icon rpgui-disabled shield-slot" />
          <div className="rpgui-icon rpgui-disabled armor-slot" />
          <br />
          <br />
          <div className="rpgui-icon rpgui-disabled helmet-slot" />
          <div className="rpgui-icon rpgui-disabled ring-slot" />
          <div className="rpgui-icon rpgui-disabled potion-slot" />
          <br />
          <br />
          <div className="rpgui-icon rpgui-disabled magic-slot" />
          <div className="rpgui-icon rpgui-disabled shoes-slot" />
          <div className="rpgui-icon rpgui-disabled empty-slot" />
          <br />
          <br />
        </div>
      </div>
      <div style={{ width: "42%", float: "right" }}>
        <h1>Buttons</h1>
        <button
          disabled
          className="rpgui-button"
          type="button"
          style={{ width: "100%" }}
        >
          <p>Button</p>
        </button>
        <br />
        <br />
        <button
          disabled
          className="rpgui-button golden"
          type="button"
          style={{ width: "100%" }}
        >
          <p>Gold Button</p>
        </button>
        <br />
        <br />
        <h1>Radio/Check</h1>
        <br />
        <div>
          <input
            disabled
            className="rpgui-radio"
            defaultChecked
            type="radio"
            name="sex"
            defaultValue="male"
          />
          <label>Male</label>
          <br />
          <input
            disabled
            className="rpgui-radio"
            type="radio"
            name="sex"
            defaultValue="female"
          />
          <label>Female</label>
          <br />
        </div>
        <div>
          <input
            disabled
            className="rpgui-radio golden"
            defaultChecked
            type="radio"
            name="sex2"
            defaultValue="male"
          />
          <label>Male</label>
          <br />
          <input
            disabled
            className="rpgui-radio golden"
            type="radio"
            name="sex2"
            defaultValue="female"
          />
          <label>Female</label>
          <br />
        </div>
        <br />
        <input
          disabled
          className="rpgui-checkbox"
          type="checkbox"
          defaultChecked
        />
        <label>Checkbox 1.</label>
        <br />
        <input disabled className="rpgui-checkbox" type="checkbox" />
        <label>Checkbox 2.</label>
        <h1>Dropdown</h1>
        <Dropdown disabled />
        <br />
        <h1>List:</h1>
        <List disabled />
      </div>
      <div style={{ clear: "both" }} />
    </div>
  )
}

export default DisableItems
