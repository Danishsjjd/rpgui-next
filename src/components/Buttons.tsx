import React from "react"
import Button from "./Button"

const Buttons = () => {
  return (
    <div id="buttons" className="rpgui-container framed-grey">
      <h1>Buttons</h1>
      <p>This example shows the buttons.</p>
      <hr />
      <div className="rpgui-center" style={{ float: "left", width: "49%" }}>
        <div>
          <Button>Regular button</Button>
        </div>
        <div>
          <Button className="down">Button pressed</Button>
        </div>
        <div>
          <Button className="hover">Button hover</Button>
        </div>
      </div>
      <div className="rpgui-center" style={{ float: "right", width: "49%" }}>
        <div>
          <Button className="golden">Golden button</Button>
        </div>
        <div>
          <Button className="golden down">Golden down</Button>
        </div>
        <div>
          <Button className="golden hover">Golden hover</Button>
        </div>
      </div>
      <div style={{ clear: "both" }} />
    </div>
  )
}

export default Buttons
