import Head from "next/head";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meetapê | Um evento para Devs e entusiasta</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
