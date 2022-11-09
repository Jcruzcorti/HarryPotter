import React from 'react'

export default function QuestionsList({data}) {

  return (


       <div>
            {data.map((info)=>(
            <div key={info.id}>
              <h2>{info.personaje}</h2>
            </div>

          ))}  
            
         </div>


    
  )
}




