import '../styles/globals.css'
import { NextUIProvider } from "@nextui-org/react"

// import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {

  // const [theme, setTheme] = useState(true)

    // const lightTheme = createTheme({
    //   type: 'light',
    //   theme: {
    //     colors: {}, // optional
    //   }
    // })
    
    // const darkTheme = createTheme({
    //   type: 'dark',
    //   theme: {
    //     colors: {}, // optional
    //   }
    // })

    // function changeTheme() {
    //   if (theme) {
    //     const lightTheme = createTheme({
    //       type: 'light',
    //       theme: {
    //         colors: {}, // optional
    //       }
    //     })
    //   }
    //   else{
    //     setTheme(false)
    //     const darkTheme = createTheme({
    //       type: 'dark',
    //       theme: {
    //         colors: {}, // optional
    //       }
    //     })
    //   }
      
      // theme={theme ?lightTheme :darkTheme},
    

  return (


  <NextUIProvider>
     
        {/* <Button onClick={()=>changeTheme}  className='divButton'>Dark Mode</Button> */}
  
    <Component {...pageProps} />
  </NextUIProvider>

   
  );
  
}

export default MyApp;
