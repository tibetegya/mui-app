// import App from 'next/app'
import Head from 'next/head'
import 'normalize.css';
import '../styles/globals.css';
import '../styles/main.scss';
import { StyledEngineProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>My page title</title>
      </Head>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
