import CustomSlider from "./CustomSlider"
import Slider from "./Slider"

const Sliders = () => {
  return (
    <div id="sliders" className="rpgui-container rpgui-center framed-grey">
      <h1>Sliders</h1>
      <p>
        This example shows the sliders class, which replaces the
        &quot;range&quot; input element.
      </p>
      <hr />
      <div style={{ width: "60%", marginLeft: "20%" }}>
        <label>Slider:</label>
        <CustomSlider />
        <label>Golden slider:</label>
        <CustomSlider golden />
      </div>
    </div>
  )
}

export default Sliders
