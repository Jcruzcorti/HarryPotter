import React,{useState} from 'react'
import PageLayOut from '../components/layout/PageLayOut';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import QuestionsList from '../components/questionslist/QuestionsList';

function Questions({data}) {

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
               <Image src="/mode.png"alt="Light and dark mode" width={30} height={20} className={styles.lightDarkMode}/>
          </button>
        </div>
        <main className={styles.main2}>
          <h1 className={styles.h1}>HARRY POTTER</h1>
          <div>
            <div>
              <QuestionsList data={data}/>
            </div>        
          </div>
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

export default Questions;

