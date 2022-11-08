import React from 'react'
import PageLayOut from '../components/layout/PageLayOut';
import styles from '../styles/Home.module.css';
import Image from 'next/image'

import Link from 'next/link';

function questions() {


  return (

    <PageLayOut title='Harry Potter Quiz'>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1>HARRY POTTER</h1>
          <h3>ACA VAN LAS PREGUNTAS</h3>
          <Link href={'/'}>VOLVER AL INICIO</Link>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://www.instagram.com/juancortinas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @juancortinas{' '}
            {/* <span className={styles.logo}> */}
              <Image src="/logohp.png" alt="HP Logo" width={60} height={40} />
            {/* </span> */}
          </a>
        </footer>     
      </div>
    </PageLayOut>   
    
  )
}

export default questions;


