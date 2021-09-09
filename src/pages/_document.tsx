import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentInitialProps,
} from "next/document";
import React from "react";

export default class MyDocument extends Document<DocumentInitialProps> {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
