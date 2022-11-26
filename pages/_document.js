import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMVSWXQ"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}