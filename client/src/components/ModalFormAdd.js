import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalFormAdd = ({ active, setActive, handleSave }) => {
  const [editedData, setEditedData] = useState({
    name: '',
    surname: '',
    age: '',
    salary: '',
    category: '',
    currentstate: '',
  });

  const handleDismiss = () => {
    setActive(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    const age = parseInt(editedData.age, 10);
    const salary = parseFloat(editedData.salary);

    if (isNaN(age) || isNaN(salary)) {
      console.error('Неверное значение возраста или зарплаты');
      return;
    }

    const newWorker = {
      name: editedData.name,
      surname: editedData.surname,
      age: age,
      salary: salary,
      category: editedData.category,
      currentstate: editedData.currentstate,
    };

    fetch('http://localhost:7891/api/worker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWorker),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Новый работник добавлен:', data);
        handleSave(newWorker);
        handleDismiss();
      })
      .catch((error) => {
        console.error('Ошибка при добавлении работника:', error);
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
        <Modal.Title>Добавление пользователя</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleChange}
              tabIndex="1"
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              value={editedData.surname}
              onChange={handleChange}
              tabIndex="2"
            />
          </Form.Group>
          <Form.Group controlId="formAge">
            <Form.Label>Возраст</Form.Label>
            <Form.Control
              type="text"
              name="age"
              value={editedData.age}
              onChange={handleChange}
              tabIndex="3"
            />
          </Form.Group>
          <Form.Group controlId="formSalary">
            <Form.Label>Зарплата</Form.Label>
            <Form.Control
              type="text"
              name="salary"
              value={editedData.salary}
              onChange={handleChange}
              tabIndex="4"
            />
          </Form.Group>
          <Form.Group controlId="formProfession">
            <Form.Label>Профессия</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={editedData.category}
              onChange={handleChange}
              tabIndex="5"
            />
          </Form.Group>
          <Form.Group controlId="formEmployment">
            <Form.Label>Текущая занятость</Form.Label>
            <Form.Control
              type="text"
              name="currentstate"
              value={editedData.currentstate}
              onChange={handleChange}
              tabIndex="6"
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

export default ModalFormAdd;
