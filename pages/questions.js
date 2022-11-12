import React,{useState} from 'react'
import PageLayOut from '../components/layout/PageLayOut';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Link from 'next/link';
import QuestionsList from '../components/questionslist/QuestionsList';

function questions({data}) {

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
        <main className={styles.main2}>
          <h1 className={styles.h1}>HARRY POTTER</h1>
          <div>
            <p className={styles.pQuestions}>PREGUNTAS</p>
            <div>
              <QuestionsList data={data}/>
            </div>        
          </div>
          
          <Link href={'/'}>VOLVER AL INICIO</Link>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://www.instagram.com/juancortinas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.pFooter}>@juancortinas</p>{' '}
            {/* <span className={styles.logo}> */}
              <Image src="/logohp.png" alt="HP Logo" width={70} height={50} />
            {/* </span> */}
          </a>
        </footer>     
      </div>
    </PageLayOut>   
    
  )
}

export default questions;

export async function getStaticProps(){
  const res = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes')
  const data = await res.json()

    return{
      props:{
          data
      }
  }
}




// export async function getServerSideProps(){
//   const response = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes')
//   const {personajes} = await response.json()
//       return{
//           props:{
//               personajes
//           }
//       }
  
     
//   }
  


