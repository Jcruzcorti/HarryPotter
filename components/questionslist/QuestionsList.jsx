import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css';



export default function QuestionsList({data}) {

  return (


       <div>
            {data.map((item)=>(
            
            <div key={item.id}>
              {
                item.id===0
                ?<h2>{item.apodo}</h2>
                :<>
                <h2>{item.personaje}</h2>
                <Image alt={'asdas'} src={item.imagen} width={390} height={220} className={styles.imgs} />  
                <p className={styles.pFooter}>{item.casaDeHogwarts}</p>
                </>
          
              }

              {/* <h2 className={styles.h3}>{item.personaje}</h2>
              <Image alt={'asdas'} src={item.imagen} width={180} height={200} className={styles.imgs}/>  */}
            </div>

          ))}  
            
         </div>


    
  )
}




