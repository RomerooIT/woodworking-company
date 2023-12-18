import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const baseURL = 'https://127.0.0.1:7891/api/worker';

const updateWorker = async (id, data) => {
  const url = `${baseURL}/${id}`;

  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const ModalFormEdit = ({ active, setActive, info, handleEdit, id }) => {
  const [editedData, setEditedData] = useState({ ...info });

  useEffect(() => {
    setEditedData({ ...info });
  }, [info]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue =
      (name === 'age' || name === 'salary') ? parseFloat(value) : value;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: processedValue,
    }));
  };

  const handleDismiss = () => {
    setActive(false);
  };

  const handleSaveChanges = async () => {
    try {
      console.log(editedData);
      await updateWorker(id, editedData);
      console.log(`Данные сотрудника с ID ${id} обновлены`);
      handleEdit();
      setActive(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={active} onHide={handleDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование данных</Modal.Title>
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
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              value={editedData.surname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formAge">
            <Form.Label>Возраст</Form.Label>
            <Form.Control
              type="text"
              name="age"
              value={editedData.age}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formSalary">
            <Form.Label>Зарплата</Form.Label>
            <Form.Control
              type="text"
              name="salary"
              value={editedData.salary}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Профессия</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={editedData.category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmployment">
            <Form.Label>Текущая занятость</Form.Label>
            <Form.Control
              type="text"
              name="currentstate"
              value={editedData.currentstate}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDismiss}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Сохранить изменения
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormEdit;
