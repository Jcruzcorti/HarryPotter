import '../styles/globals.css'
import { NextUIProvider } from "@nextui-org/react"
import ProviderContext from '../components/context/Context';


function MyApp({ Component, pageProps }) {

  return (

  <ProviderContext>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </ProviderContext>
  );
  
}

export default MyApp;
