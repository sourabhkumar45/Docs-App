import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
        <title>Docinator</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
