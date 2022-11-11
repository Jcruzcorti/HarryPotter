import Head from 'next/head';
import React from 'react'
// import styles from '../../styles/Home.module.css'

function PageLayOut({children,title}) {
  return (
    <div> 
        <Head>
        <title>{title}</title>
        <meta name="description" content="Harry Potter Quiz<" />
        <link rel="icon" href="/logoreliquias.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cardo&family=Changa+One:ital@0;1&family=Crimson+Text:wght@700&family=Noto+Serif+Telugu:wght@700&display=swap" rel="stylesheet"/>
        </Head>
        <main>
            {children}
        </main>

    </div>
  )
}

export default PageLayOut;