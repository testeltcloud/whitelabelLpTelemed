import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template LP — Personalize sua marca</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Template white-label de landing page. Personalize a logo e os planos com a sua marca."
        />
      </Head>
      <div className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
