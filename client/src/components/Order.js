import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalOrderAdd = ({ active, setActive, handleSave, newSelected, products }) => {
  const [editedOrder, setEditedOrder] = useState({
    customerAddress: '',
    amount: '',
    requirements: '',
    userId: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem('REFRESH_TOKEN');
    console.log('Current token:', token);

    const decodedToken = decodeToken(token);
    console.log('Decoded token:', decodedToken);

    setEditedOrder((prevData) => ({ ...prevData, userId: parseInt(decodedToken.id, 10) || 0 }));
  }, []);

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.error('Ошибка декодирования токена:', error);
      return {};
    }
  };

  const handleDismiss = () => {
    setActive(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    const selectedProduct = products.find((product) => product.id === newSelected);

    if (!selectedProduct) {
      console.error('Выбранный продукт не найден');
      return;
    }

    if (
      typeof editedOrder.customerAddress !== 'string' ||
      isNaN(parseFloat(editedOrder.amount)) ||
      isNaN(parseInt(editedOrder.userId, 10))
    ) {
      console.error('Ошибка в типах данных');
      return;
    }

    console.log('Current user ID:', editedOrder.userId);

    const newOrder = {
      clientId: editedOrder.userId,
      productId: newSelected,
      customerAddress: editedOrder.customerAddress,
      amount: parseFloat(editedOrder.amount),
      requirements: editedOrder.requirements,
    };

    fetch('http://localhost:7891/api/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Добавлен новый заказ:', data);
        handleSave(newOrder);
        handleDismiss();
      })
      .catch((error) => {
        console.error('Ошибка при добавлении заказа:', error);
        handleDismiss();
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowUp') {
      // Обработка перехода к предыдущему полю формы
    } else if (e.key === 'ArrowDown') {
      // Обработка перехода к следующему полю формы
    }
  };

  return (
    <Modal show={active} onHide={handleDismiss} onKeyPress={handleKeyPress}>
      <Modal.Header closeButton>
        <Modal.Title>Сделать заказ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formAddress">
            <Form.Label>Адрес доставки</Form.Label>
            <Form.Control
              type="text"
              name="customerAddress"
              value={editedOrder.customerAddress}
              onChange={handleChange}
              tabIndex="1"
            />
          </Form.Group>
          <Form.Group controlId="formAmount">
            <Form.Label>Количество выбранного товара</Form.Label>
            <Form.Control
              type="text"
              name="amount"
              value={editedOrder.amount}
              onChange={handleChange}
              tabIndex="2"
            />
          </Form.Group>
          <Form.Group controlId="formRequirements">
            <Form.Label>Доп. требования</Form.Label>
            <Form.Control
              type="text"
              name="requirements"
              value={editedOrder.requirements}
              onChange={handleChange}
              tabIndex="3"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDismiss}>
          Отмена
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Сделать заявку
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOrderAdd;
