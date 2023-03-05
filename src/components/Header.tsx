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
      <div className="rpgui-center" style={{ marginBottom: 40 }}>
        <Button style={{ width: "32%" }}>View on GitHub</Button>
      </div>
      <hr style={{ clear: "both", marginBottom: 30 }} />
    </>
  )
}

export default Header
