import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

export const Document: NextPage = () => (
  <Html lang="en">
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
