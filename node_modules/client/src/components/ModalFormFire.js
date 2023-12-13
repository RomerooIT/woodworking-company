import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalFormFire = ({ active, setActive, info }) => {
    const handleDismiss = () => {
        setActive(false);
    };

    const handleFire = () => {
        // Здесь вы можете добавить логику увольнения сотрудника
        console.log(`Сотрудник с ID ${info[0]} уволен`);
        setActive(false);
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
                <Button variant="danger" onClick={handleFire}>
                    Да, уволить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalFormFire;
