import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios'

export async function run() {
  const url = `https://127.0.0.1:7891/api/product`;

  try {
    const response = await axios({
      method: "GET",
      url: url,
    });

    return {
      response: response,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while fetching data from the TreeShop backend API.",
    };
  }
}

const ModalFormFire = ({ active, setActive, info }) => {
    const handleDismiss = () => {
        setActive(false);
    };

    

    const handleFire = () => {
        // Здесь вы можете добавить логику увольнения сотрудника
        //console.log(`Сотрудник с ID ${info[0]} уволен`);
        setActive(false);
        console.log(run())
    };

    return (
        <Modal show={active} onHide={handleDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>Увольнение сотрудника</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Вы уверены, что хотите уволить данного сотрудника?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleDismiss}>
                    Нет
                </Button>
                <Button variant="danger" onClick={handleFire}>
                    Да, уволить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalFormFire;
