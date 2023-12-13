import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalFormEdit = ({ active, setActive, info, handleSave }) => {
  const [editedData, setEditedData] = useState(info);
  const handleDismiss = () => {
    setActive(false);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    handleSave(editedData);
    handleDismiss();
  };

  return (
    <Modal show={active} onHide={handleDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование данных</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" name="id" value={editedData.id} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formFirstName">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" name="firstName" value={editedData.firstName} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control type="text" name="lastName" value={editedData.lastName} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formAge">
            <Form.Label>Возраст</Form.Label>
            <Form.Control type="text" name="age" value={editedData.age} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formSalary">
            <Form.Label>Зарплата</Form.Label>
            <Form.Control type="text" name="salary" value={editedData.salary} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formProfession">
            <Form.Label>Профессия</Form.Label>
            <Form.Control type="text" name="profession" value={editedData.profession} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formEmployment">
            <Form.Label>Текущая занятость</Form.Label>
            <Form.Control type="text" name="employment" value={editedData.employment} onChange={handleChange} />
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
