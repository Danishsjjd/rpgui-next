import Buttons from "@/components/Buttons"
import Checkboxes from "@/components/Checkboxes"
import Containers from "@/components/Containers"
import Content from "@/components/Content"
import Cursors from "@/components/Cursors"
import DisableItems from "@/components/DisableItems"
import Dropdown_List from "@/components/Dropdown_List"
import Header from "@/components/Header"
import Icons from "@/components/Icons"
import Links from "@/components/Links"
import ProgressBar from "@/components/ProgressBar"
import RadioBtns from "@/components/RadioBtns"
import Sliders from "@/components/Sliders"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>RPGUI-Next</title>
      </Head>
      <div
        id="main"
        className="inner rpgui-container framed"
        style={{ position: "relative" }}
      >
        <Header />
        <div id="examples">
          <Links />
          <Containers />
          <Content />
          <Buttons />
          {/* radio and checkbox */}
          <div id="radio-and-check" className="rpgui-container framed-grey">
            <h1>Radio and Check boxes</h1>
            <p>This example shows radio buttons and check boxes.</p>
            <hr />
            <Checkboxes />
            <RadioBtns />
            <div style={{ clear: "both" }} />
          </div>
          {/* </end radio and checkbox> */}
          <Dropdown_List />
          <Icons />
          <Sliders />
          <ProgressBar />
          <DisableItems />
          <Cursors />
          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <a href="#main" style={{ textAlign: "center", display: "block" }}>
              - Back to Top -
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
