import Image from 'next/image'
import React, {useContext} from 'react'
import styles from '../../styles/Home.module.css';




export default function QuestionsList({data}) {

//  const {a} = useContext(Context)


  return (

       <div>
            {data.map((item)=>(           
            <div key={item.id}>
              {
                item.id===0
                ?<h2>{item.apodo}</h2>
                :<>
                <h2>{item.personaje}</h2>
                <Image alt={'asdas'} src={item.imagen} width={100} height={100} className={styles.imgs} />  
                <p className={styles.pFooter}>{item.casaDeHogwarts}</p>
                </>
          
              }
            </div>
          ))}             
         </div>  
  )
}




