import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const baseURL = 'https://localhost:7891/api/worker';

const deleteWorker = async (id) => {
  const url = `${baseURL}/${id}`;

  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const ModalFormFire = ({ active, setActive, info, handleFire, id }) => {
  const handleDismiss = () => {
    setActive(false);
  };

  const handleFireClick = async () => {
    try {
      await deleteWorker(id);
      console.log(`Сотрудник с ID ${id} уволен`);
      handleFire(); // Обновляем состояние в WorkersTable
      setActive(false);
    } catch (error) {
      console.error(error);
      // Обработка ошибки, например, показ сообщения об ошибке пользователю
    }
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
        <Button variant="danger" onClick={handleFireClick}>
          Да, уволить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormFire;
