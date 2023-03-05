import React from "react"
import Radio from "./Radio"

const RadioBtns = () => {
  return (
    <>
      <div style={{ float: "left", width: "24.5%" }}>
        {/* <input
          className="rpgui-radio"
          name="radio"
          defaultValue={1}
          // defaultChecked=""
          type="radio"
        />
        <label>Radio 1</label> */}
        <Radio defaultCheck>Radio 1</Radio>
        <Radio>Radio 2</Radio>
        <Radio>Radio 3</Radio>
      </div>
      <div style={{ float: "left", width: "24.5%" }}>
        <Radio className="golden" name="2" defaultCheck>
          Radio 1
        </Radio>
        <Radio className="golden" name="2">
          Radio 2
        </Radio>
        <Radio className="golden" name="2">
          Radio 3
        </Radio>
      </div>
    </>
  )
}

export default RadioBtns
