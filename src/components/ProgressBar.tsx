import React from "react"

const ProgressBar = () => {
  return (
    <div style={{ width: "40%", marginLeft: "30%" }}>
      <label>Health:</label>
      {/* rpgui-disabled */}
      <div
        id="hp-bar"
        data-value="0.4"
        className="rpgui-progress red"
        data-rpguitype="progress"
      >
        <div className=" rpgui-progress-track">
          <div
            className=" rpgui-progress-fill red"
            style={{ left: 0, width: "40%" }}
          />
        </div>
        <div className=" rpgui-progress-left-edge" />
        <div className=" rpgui-progress-right-edge" />
      </div>
      <label>Mana:</label>
      <div
        id="mana-bar"
        data-value="0.8"
        className="rpgui-progress blue"
        data-rpguitype="progress"
      >
        <div className=" rpgui-progress-track">
          <div
            className=" rpgui-progress-fill blue"
            style={{ left: 0, width: "80%" }}
          />
        </div>
        <div className=" rpgui-progress-left-edge" />
        <div className=" rpgui-progress-right-edge" />
      </div>
      <label>Stamina:</label>
      <div
        id="stamina-bar"
        data-value="0.2"
        className="rpgui-progress green"
        data-rpguitype="progress"
      >
        <div className=" rpgui-progress-track">
          <div
            className=" rpgui-progress-fill green"
            style={{ left: 0, width: "20%" }}
          />
        </div>
        <div className=" rpgui-progress-left-edge" />
        <div className=" rpgui-progress-right-edge" />
      </div>
      <label>Experience:</label>
      <div
        id="stamina-bar"
        data-value="0.5"
        className="rpgui-progress"
        data-rpguitype="progress"
      >
        <div className=" rpgui-progress-track">
          <div
            className=" rpgui-progress-fill"
            style={{ left: 0, width: "50%" }}
          />
        </div>
        <div className=" rpgui-progress-left-edge" />
        <div className=" rpgui-progress-right-edge" />
      </div>
    </div>
  )
}

export default ProgressBar
