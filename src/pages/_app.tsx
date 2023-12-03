import type { AppProps } from 'next/app'
import Head from 'next/head';
import { UserContextProvider } from '@/contexts/user-context';
import Header from '@/components/header/header';
import AppContainer from '@/components/utils/app-container';
import Footer from '@/components/footer/footer';
import '@/styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0"/>
      </Head>
      <UserContextProvider> 
        <Header />
        <AppContainer>
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </UserContextProvider>
    </>
  );
}
