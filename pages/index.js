import Image from 'next/image'
import Link from 'next/link'
import PageLayOut from '../components/layout/PageLayOut'
import { useState } from 'react'
import styles from '../styles/Home.module.css'



export default function Home() {
 
  const [themestate, setThemestate] = useState(true)

  function changeTheme() {
    if (themestate) {
      setThemestate(false)   
    }
    else{
      setThemestate(true)
    }
  }


  return (
 

    <PageLayOut title='Harry Potter Quiz'>
      <div className={themestate ? styles.container :styles.container2} >
        <div className={styles.divButton}>
          <button onClick={(e)=>changeTheme(e)} 
            className={themestate ? styles.buttonTheme :styles.buttonTheme2}>
              <Image src="/mode.png"alt="Light and dark mode" width={40} height={30} className={styles.lightDarkMode}/>
          </button>
          
        </div>
        <main className={styles.main} >
          <h1 className={styles.h1}>HARRY POTTER</h1>
          <h2 className={styles.h2}>23 PERSONAJES - 23 PREGUNTAS. ¿ESTÁS LISTO?</h2>
          <Link href={'/Questions'}><h3 className={styles.h3}>EMPEZAR QUIZ</h3></Link>   
        </main>

        <footer className={styles.footer}>
          <a
            href="https://www.instagram.com/juancortinas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.pFooter}>@juancortinas</p>{' '}
              <Image src="/logohp.png" alt="HP Logo" width={70} height={50} />
          </a>
        </footer>     
      </div>
    </PageLayOut>
  )
  
}

