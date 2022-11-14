import Image from 'next/image'
import React, {useContext, useState} from 'react'
import styles from '../../styles/Home.module.css';
import { Questionshp } from '../mock/Questionshp';




export default function QuestionsList({data}) {

//  const {a} = useContext(Context)
const [finishQuestions,setFinishQuestions] = useState(true);

// const finishQuestions = []
// useEffect(() => {
  
//   setFinishQuestions(finishQuestions)
//   return () => {
    
//   }
// }, [])


  return (

       <div>
            {data.map((item)=>(           
            <div key={item.id}>
              {
                !finishQuestions
                ?<h2>{item.apodo}</h2>
                :<div className={styles.div0}>              
                  <div className={styles.div1}>
                    <h2>{item.personaje}</h2>
                    <Image alt={'Personajes de Harry Potter'} src={item.imagen} width={100} height={100} quality={100} className={styles.imgs} />  
                  </div>

                  <div className={styles.div2}>
                    {Questionshp.map((q)=>(
                      <div key={q.ids}>
                          {
                            item.id === q.ids
                            ?<div className={styles.divQuestionsButtons}>
                              <h3>{q.question}</h3>
                              <h3>{q.options.map((op)=>(
                                <button key={q.ids}>
                                  {op.option}
                                </button>
                              ))}</h3>
                            </div>
                            :null
                          }
                      </div>
                      )) 
                    }
                  </div>
                </div>
              }
            </div>
          ))}
          
        </div>  
  )
}




