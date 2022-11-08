import Head from 'next/head';
import React from 'react'
import styles from '../../styles/Home.module.css'

function PageLayOut({children,title}) {
  return (
    <div>
        <Head>
        <title>{title}</title>
        <meta name="description" content="Harry Potter Quiz<" />
        <link rel="icon" href="/logoreliquias.png" />
        </Head>
        <main>
            {children}
        </main>

    </div>
  )
}

export default PageLayOut;