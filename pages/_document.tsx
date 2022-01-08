// import { Html, Head, Main, NextScript } from "next/document";

import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";


class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // useful for wrapping the whole react tree
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              <>
                <App {...props} />
              </>,
            ),
          // useful for wrapping in a per-page basis
          enhanceComponent: (Component: any) => Component,
        });

      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
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
  render() {
    return (
      <Html>
      <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
           href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;700&family=Open+Sans&display=swap"
           rel="stylesheet"
         ></link>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </Html>
    );
  }
}
export default MyDocument;


// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;700&family=Open+Sans&display=swap"
//           rel="stylesheet"
//         ></link>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }


// Document.getInitialProps = async (ctx: any) => {
//   const sheet = new ServerStyleSheet()
//   const originalRenderPage = ctx.renderPage

//   try {
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) =>
//           sheet.collectStyles(<App {...props} />),
//       })

//     const initialProps = await Document.getInitialProps(ctx)
//     return {
//       ...initialProps,
//       styles: (
//         <>
//           {initialProps.styles}
//           {sheet.getStyleElement()}
//         </>
//       ),
//     }
//   } finally {
//     sheet.seal()
//   }

// }