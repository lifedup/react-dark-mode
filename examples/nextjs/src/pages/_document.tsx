import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
/**
 * We set the styles as early as possible for dark mode to prevent flashing while loading
 * if the user's browser is in dark mode we set the background to dark to mimic the default
 * background while the content loads. When the app loads we check if it's in dark mode and
 * switch if needed.
 * Also, don't confuse the browser's background with your app flashing when loading for the
 * first time and the app theme is opposite of the browser.  This happens on first load
 * if your server is taking a long time to load. However, it should only happen once.
 * You could also minify and inline the darkMode.js file to keep version control however,
 * it would not cache and have to be loaded on every request...
 */

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <script src="/darkMode.js" />
          <style dangerouslySetInnerHTML={{ __html: ':root{background:black;color:white;}:root.__dark{background:white;color:black;}' }} />
          </Head>
        <body>
          <Main />
          <div id="__portal" />
          <NextScript />
        </body>
      </html>
    );
  }
}
