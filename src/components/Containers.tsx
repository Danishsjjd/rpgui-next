import React from "react"

const Containers = () => {
  return (
    <div id="containers" className="rpgui-container framed-grey">
      <h1>Containers</h1>
      <hr />
      <div style={{ display: "flex", gap: 12 }}>
        <div
          className="rpgui-container framed"
          style={{
            position: "relative",
            width: "32%",
            height: 300,
            display: "inline-block",
          }}
        >
          <p>
            class:
            <br />
            rpgui-container framed
          </p>
        </div>
        <div
          className="rpgui-container framed-golden"
          style={{
            position: "relative",
            width: "32%",
            height: 300,
            display: "inline-block",
          }}
        >
          <p>
            class:
            <br />
            rpgui-container framed-golden
          </p>
        </div>
        <div
          className="rpgui-container framed-golden-2"
          style={{
            position: "relative",
            width: "32%",
            height: 300,
            display: "inline-block",
          }}
        >
          <p>
            class:
            <br />
            rpgui-container framed-golden-2
          </p>
        </div>
      </div>
      <br />
      <br />
      <div
        className="rpgui-container framed-grey"
        style={{
          position: "relative",
          width: "100%",
          height: 200,
          display: "inline-block",
        }}
      >
        <p>
          class:
          <br />
          rpgui-container framed-grey
        </p>
      </div>
    </div>
  )
}

export default Containers
