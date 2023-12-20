import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const StatusUpdateModal = ({ showModal, handleCloseModal, requestId, handleStatusUpdate }) => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    console.log('Выбран новый статус:', newStatus);
    setSelectedStatus(newStatus);
  };

  const handleUpdateStatus = async () => {
    try {
      // Выполните запрос к серверу для обновления статуса
      const response = await fetch(`http://127.0.0.1:7891/api/request/putForAdmins?id=${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workerId: 0, // Ваш workerId
          status: selectedStatus,
        }),
      });

      if (!response.ok) {
        // Обработка ошибки, если запрос не удался
        console.error('Failed to update status:', response.status, response.statusText);
        return;
      }

      // Вызовите функцию handleStatusUpdate, чтобы обновить состояние в родительском компоненте
      handleStatusUpdate(requestId, selectedStatus);

      // Закрыть модальное окно после успешного обновления статуса
      handleCloseModal();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Изменить статус</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="statusSelect">
            <Form.Label>Выберите статус:</Form.Label>
            <Form.Control as="select" value={selectedStatus} onChange={handleStatusChange}>
              <option value="Принят">Принят</option>
              <option value="В разработке">В разработке</option>
              <option value="Доставляется">Доставляется</option>
              <option value="Выполнен">Выполнен</option>
              <option value="Задерживается">Задерживается</option>
              <option value="Отклонён">Отклонён</option>
              <option value="В обработке">В обработке</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={handleUpdateStatus}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StatusUpdateModal;
