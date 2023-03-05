import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="rpgui-content" style={{ overflowY: "scroll" }}>
          <div className="container">
            <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
