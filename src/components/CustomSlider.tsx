import Image from "next/image"
import React from "react"

const CustomSlider = ({ golden }: { golden?: boolean }) => {
  const aspect = golden ? 30 : 20
  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={`/slider-left${golden ? "-golden" : ""}.png`}
        alt="right"
        width={aspect}
        height={aspect}
      />
      <input type={"range"} className={`${golden ? "golden" : ""}`} />
      <Image
        src={`/slider-right${golden ? "-golden" : ""}.png`}
        alt="left"
        width={aspect}
        height={aspect}
      />
    </div>
  )
}

export default CustomSlider
