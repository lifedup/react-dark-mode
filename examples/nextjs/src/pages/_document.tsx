import React from 'react';
import Document, {
  Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type InitialPropsReturn = Promise<{
  styles: JSX.Element;
  html: string;
  head?: (JSX.Element | null)[] | undefined;
}>;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): InitialPropsReturn {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render():JSX.Element {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <script src="/darkMode.js" />
          <style dangerouslySetInnerHTML={{ __html: ':root{background:white;color:#333;}:root.__dark{background:#35363a;color:#f5f5f5;}' }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
