import CheckBox from "./CheckBox"

const Checkboxes = () => {
  return (
    <>
      <div style={{ float: "left", width: "24.5%" }}>
        <CheckBox defaultCheck>CheckBox 1</CheckBox>
        <CheckBox>CheckBox 2</CheckBox>
        <CheckBox>CheckBox 3</CheckBox>
      </div>
      <div style={{ float: "left", width: "24.5%" }}>
        <CheckBox className="golden" defaultCheck>
          CheckBox 1
        </CheckBox>
        <CheckBox className="golden">CheckBox 2</CheckBox>
        <CheckBox className="golden">CheckBox 3</CheckBox>
      </div>
    </>
  )
}

export default Checkboxes
