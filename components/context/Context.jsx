import React, { createContext } from 'react'



export const Context = createContext()


function ProviderContext({children}) {

    function a() {
        console.log("funciona");
    }


  return (

    <div>

       <Context.Provider value={{a}}>
            {children}
       </Context.Provider>
        
    </div>
  )
}

export default ProviderContext;