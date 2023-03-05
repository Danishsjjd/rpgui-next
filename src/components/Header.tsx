import Button from "./Button"

const Header = () => {
  return (
    <>
      <header>
        <h1 style={{ fontSize: "250%" }}>RPGUI</h1>
        <hr className="golden" />
        <h2 style={{ fontSize: "175%" }}>
          CSS &amp; Next.Js With Typescript design to create old-school GUI in
          seconds!
        </h2>
      </header>
      {/* button for download */}
      <div className="rpgui-center">
        <Button style={{ width: "32%" }}>
          <p>View on GitHub</p>
        </Button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr style={{ clear: "both" }} />
      <br />
      <br />
    </>
  )
}

export default Header
