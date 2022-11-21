import React from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import  styles from '../../styles/Home.module.css'
// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function CartModal() {




  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button className={styles.ButtonOption2} auto color="NormalColor" size="lg" bordered="true" flat="true" shadow="true" ghost onClick={handler}>
       <p className={styles.pQuestions}>Ver puntuación</p>
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Para conocer su puntuación, ingrese su información
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Nombre completo"
            // contentLeft={<Mail fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Cerrar
          </Button>
          <Button auto onClick={closeHandler}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


