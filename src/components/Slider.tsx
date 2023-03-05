import React from "react"

const Slider = ({
  className,
  disabled = false,
}: {
  className?: string
  disabled?: boolean
}) => {
  return (
    <>
      <input
        className={`rpgui-slider ${className ? className : ""}`}
        type="range"
        min={0}
        max={10}
        defaultValue={5}
        style={{ width: "100%", display: "none" }}
        data-rpguitype="slider"
        disabled={disabled}
      />
      <div
        className={` rpgui-slider-container ${className ? className : ""}`}
        style={{}}
      >
        <div className={` rpgui-slider-track ${className ? className : ""}`} />
        <div
          className={` rpgui-slider-left-edge ${className ? className : ""}`}
        />
        <div
          className={` rpgui-slider-right-edge ${className ? className : ""}`}
        />
        <div
          className={` rpgui-slider-thumb ${className ? className : ""}`}
          style={{ left: 228 }}
        />
      </div>
    </>
  )
}

export default Slider
