import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
import  styles from '../../styles/Home.module.css'
import {playerScore} from '../../pages/service/Firestore'




export default function CartModal({score}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [player,setPlayer] = useState({
    name:""
  })


    function handleChange(e) {
      const field =e.target.name;
      const value = e.target.value;
        setPlayer({
          ...player,
          [field]: value})
    }


  const score2 = JSON.stringify(score)


    function handleFin(e) {
      e.preventDefault();
      const dataAnswer ={
        player,
        score: score
      }

      if (player.name === ""){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          iconColor:'rgb(229, 183, 16)',
          title: 'Complete la información por favor',
        })
      }

      else {
        playerScore(dataAnswer).then((CreateNewAnswer)=>{

          if (score2) {
            Swal.fire({
              titleText: 'Obtuviste una puntuación de ' + score2 + ' respuestas correctas de 23 posibles',
              color:'#141414',
              background:'rgb(226, 226, 226)',
              showConfirmButton:false,
            })
          }   
          
        
          handleClose()
          setTimeout(() => {
            window.location.href="/";
          }, 8000); 
        });
      }
    }



  return (
    <>
      <button className={styles.ButtonOption2} onClick={handleShow}>
        Ver puntuación
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton className={styles.ModalContainer}>    
          <Modal.Title className={styles.pQuestions}>Para conocer su puntuación, ingrese su información</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.ModalContainer}>
      
          <div >
          <form>
            <div className="form-group">
            <Modal.Title className={styles.ModalContainer}>
               <input onChange={handleChange} type="text" name='name' className={styles.InputModal}  id="formGroupExampleInput" placeholder="Nombre completo" aria-required/>
            </Modal.Title>
   
            </div>
          </form>
        </div>

        </Modal.Body>
        <Modal.Footer className={styles.ModalContainer}>
          <button className={styles.ButtonOption3} onClick={handleClose}>
            Cerrar
          </button>
          <button className={styles.ButtonOption3} onClick={handleFin}>Enviar</button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
