/* eslint-disable @next/next/no-page-custom-font */
import { Head, Html, Main, NextScript } from 'next/document';
import { Analytics } from "@vercel/analytics/react"

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        {/* <script src="//www.ezojs.com/ezoic/sa.min.js" defer></script> */}
      </Head>
      <body className="prose-headings:font-headings">
      <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
