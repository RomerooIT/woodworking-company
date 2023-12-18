import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalOrderAdd = ({ active, setActive, handleSave }) => {
  const [editedOrder, setEditedOrder] = useState({
    address: '',
    quantity: '',
    requirements: '',
  });

  useEffect(() => {
    // Fetch and decode the token from cookies when the component mounts
    const token = getCookie('REFRESH_TOKEN'); // Replace 'REFRESH_TOKEN' with your actual cookie name
    const decodedToken = decodeToken(token);

    // Set the user ID in the state
    setEditedOrder((prevData) => ({ ...prevData, userId: decodedToken.id }));
  }, []); // Empty dependency array ensures the effect runs only once

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return '';
  };

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
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
    const quantity = parseInt(editedOrder.quantity);

    if (isNaN(quantity)) {
      console.error('Invalid quantity value');
      return;
    }

    const newOrder = {
      userId: editedOrder.userId,
      address: editedOrder.address,
      quantity: quantity,
      requirements: editedOrder.requirements,
    };

    // Replace the URL and method with your actual API endpoint and request method
    fetch('https://localhost:7891/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New order added:', data);
        handleSave(newOrder);
        handleDismiss();
      })
      .catch((error) => {
        console.error('Error adding order:', error);
        handleDismiss();
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowUp') {
      // Handle moving to the previous form field
    } else if (e.key === 'ArrowDown') {
      // Handle moving to the next form field
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
              name="address"
              value={editedOrder.address}
              onChange={handleChange}
              tabIndex="1"
            />
          </Form.Group>
          <Form.Group controlId="formQuantity">
            <Form.Label>Количество выбранного товара</Form.Label>
            <Form.Control
              type="text"
              name="quantity"
              value={editedOrder.quantity}
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
