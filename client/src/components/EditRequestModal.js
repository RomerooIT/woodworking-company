import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const EditRequestModal = ({ showModal, handleCloseModal, requestId, handleEditRequest }) => {
  const [editedData, setEditedData] = useState({
    customerAddress: '',
    amount: '',
    requirements: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = async () => {
    try {
      // Проверка типов данных и приведение их к ожидаемым
      const requestData = {
        customerAddress: String(editedData.customerAddress),
        amount: Number(editedData.amount),
        requirements: String(editedData.requirements),
      };

      // Execute the PUT request to update the request information
      console.log('Editing request with data:', requestData);
      const response = await fetch(`http://127.0.0.1:7891/api/request/putForUsers?id=${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      console.log('Edit request response:', response.status, response.statusText);

      if (!response.ok) {
        // Handle error if the request is not successful
        const errorText = await response.text();
        console.error('Failed to edit request:', response.status, response.statusText, errorText);
        return;
      }

      const responseData = await response.json();
      console.log('Edited request data:', responseData);

      // Call the function to handle the updated request data
      handleEditRequest(requestId, responseData);

      // Close the modal after successful request
      handleCloseModal();
    } catch (error) {
      console.error('Error editing request:', error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="customerAddress">
            <Form.Label>Ваш адрес:</Form.Label>
            <Form.Control
              type="text"
              name="customerAddress"
              value={editedData.customerAddress}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="amount">
            <Form.Label>Количество:</Form.Label>
            <Form.Control
              type="text"
              name="amount"
              value={editedData.amount}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="requirements">
            <Form.Label>Доп. требования:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="requirements"
              value={editedData.requirements}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Сохранить изменения
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditRequestModal;
