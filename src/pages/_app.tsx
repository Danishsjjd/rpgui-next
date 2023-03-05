import "../assets/rpgui.css"
import "../style/global.css"
import "../assets/range.css"
import type { AppProps } from "next/app"
import { Chivo, Press_Start_2P } from "@next/font/google"

const chivo = Chivo({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
})

export const pressStart = Press_Start_2P({
  subsets: ["latin", "cyrillic", "cyrillic-ext", "greek", "latin-ext"],
  weight: ["400"],
  preload: true,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={chivo.className + " " + pressStart.className}
      style={pressStart.style}
    >
      <Component {...pageProps} />
    </main>
  )
}
