import Image from 'next/image'
import Link from 'next/link'
import PageLayOut from '../components/layout/PageLayOut'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (

    <PageLayOut title='Harry Potter Quiz'>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1>HARRY POTTER</h1>
         <Link href={'/questions'}><h3>EMPEZAR QUIZ</h3></Link> 
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
