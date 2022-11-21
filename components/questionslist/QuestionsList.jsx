import Image from 'next/image'
import React, {useState,useEffect} from 'react'
import styles from '../../styles/Home.module.css';
import CartModal from '../cartmodal/CartModal';
import { Questionshp } from '../mock/Questionshp';



export default function QuestionsList() {


const [finishQuestions,setFinishQuestions] = useState(true);

const [actualQuestion, setActualQuestion]=useState(0)
const [score, setScore]=useState(0)
const [isFinished, setIsFinished ]=useState(false)
const [timeLeft, setTimeLeft] =useState(1020)
const [finishedTime, setFinishedTime] =useState(false)


function handleAnswerSubmit(isCorrect,e) {
    if (isCorrect){
        setScore(score + 1)
    }
    // e.target.classList.add(isCorrect ? "correct" : "incorrect")
    // setTimeout(()=>{
        if (actualQuestion === Questionshp.length - 1){
            setIsFinished(true)
        }
        else {
            setActualQuestion(actualQuestion + 1);
        }
    // },500);
}



useEffect(() => {

    const interval= setInterval(() => {
      
        if (timeLeft>0){
            setTimeLeft(timeLeft-1)
        }
        else if (timeLeft===0){
            setFinishedTime(true)
        }
    }, 1000);
    
    return () => clearInterval(interval);          
    
},[timeLeft]);



if (isFinished)
return(
    <div className='DivPrimary'>
      <div>
        {/* <h1 className="H1Tittle"> {props.greet}</h1>    */}
        <CartModal score={score}/> 
      </div>
    </div>
)


  return (

        <div >
            <div className={styles.divTime}>
                {
                  (!finishedTime)
                  ?<p className={styles.pQuestions}>TIEMPO: {timeLeft} SEGUNDOS</p>
                  :<>
                    <p>Se terminó el tiempo</p>
                    <CartModal  score={score}/>
                  </>
                }
            </div>    

            <div>
              {
                (!finishedTime)
                ?<>        
                  <div className={styles.div0}>
                      <h3 className={styles.h2new}>{Questionshp[actualQuestion].question}</h3> 
                    <div className={styles.div1}>
                      <div className={styles.divImg}>
                      <Image alt={'Personajes de Harry Potter'} src={Questionshp[actualQuestion].img} width={100} height={100} quality={100} className={styles.imgs} priority />                               
                      </div>
                      <div className={styles.divQuestions}>
                        {Questionshp[actualQuestion].options.map((q,index)=>(
                          <div key={index} className={styles.div2}>
                            {
                              (!finishedTime)
                              ?<div  className={styles.div2}>            
                                <h3 className={styles.h2new}>{q.question}</h3>
                                <div className={styles.h3new}>
                                  <button                                             
                                    className={styles.ButtonOption}
                                    onClick={(e)=> {handleAnswerSubmit(q.isCorrect,e)} }
                                    disabled={finishedTime}>
                                      {q.option}
                                  </button>                                   
                                  </div>
                                </div>
                              :null
                              }
                          </div>
                          )) 
                        }
                      </div>
                      
                      
                    </div>
                  
                  </div>
                </>
                :null
              }    
            </div>       
        </div>  
  )
}




