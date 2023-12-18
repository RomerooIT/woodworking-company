import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalProductAdd = ({ active, setActive, handleSave }) => {
  const [editedProduct, setEditedProduct] = useState({
    material: '',
    materialType: '',
    price: '',
  });

  const handleDismiss = () => {
    setActive(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    const price = parseFloat(editedProduct.price);

    if (isNaN(price)) {
      console.error('Неверное значение цены');
      return;
    }

    const newProduct = {
      material: editedProduct.material,
      materialType: editedProduct.materialType,
      price: price,
    };

    // Здесь вы можете использовать свой URL и метод запроса (в данном случае POST)
    fetch('https://localhost:7891/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Новый продукт добавлен:', data);
        handleSave(newProduct);
        handleDismiss();
      })
      .catch((error) => {
        console.error('Ошибка при добавлении продукта:', error);
        handleDismiss();
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowUp') {
      // Обработка перемещения на предыдущее поле формы
    } else if (e.key === 'ArrowDown') {
      // Обработка перемещения на следующее поле формы
    }
  };

  return (
    <Modal show={active} onHide={handleDismiss} onKeyPress={handleKeyPress}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление продукта</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formMaterial">
            <Form.Label>Материал</Form.Label>
            <Form.Control
              type="text"
              name="material"
              value={editedProduct.material}
              onChange={handleChange}
              tabIndex="1"
            />
          </Form.Group>
          <Form.Group controlId="formMaterialType">
            <Form.Label>Тип материала</Form.Label>
            <Form.Control
              type="text"
              name="materialType"
              value={editedProduct.materialType}
              onChange={handleChange}
              tabIndex="2"
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
              tabIndex="3"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDismiss}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProductAdd;
