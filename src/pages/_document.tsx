import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Chivo:900&display=optional"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

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
