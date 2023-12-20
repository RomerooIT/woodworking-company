import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ModalDeleteProduct = ({ active, setActive, newSelected, onDelete }) => {
  const handleDismiss = () => {
    setActive(false);
  };

  const handleDelete = async () => {
    const url = `http://127.0.0.1:7891/api/product/${newSelected}`;

    try {
      const response = await axios({
        method: 'DELETE',
        url: url,
      });

      console.log('Продукт удален:', response.data);
      setActive(false);
      onDelete(); // Вызовите колбэк onDelete после успешного удаления
    } catch (error) {
      console.error('Ошибка при удалении продукта:', error);
      setActive(false);
    }
  };

  return (
    <Modal show={active} onHide={handleDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Удаление продукта</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Вы уверены, что хотите удалить данный продукт?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDismiss}>
          Нет
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Да, удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDeleteProduct;
