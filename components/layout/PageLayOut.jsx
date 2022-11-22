import Head from 'next/head';
import React from 'react'


function PageLayOut({children,title}) {
  return (
    <div> 
        <Head>
        <title>{title}</title>
        <meta name="description" content="Harry Potter Quiz<" />
        </Head>
        <main>
            {children}
        </main>

    </div>
  )
}

export default PageLayOut;