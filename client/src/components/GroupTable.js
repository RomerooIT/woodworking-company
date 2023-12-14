import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBContainer,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import workersObject from '../utils/workers';
import Button from 'react-bootstrap/Button';
import ModalFormFire from './ModalFormFire';
import ModalFormEdit from './ModalFormEdit';
import ModalFormAdd from './ModalFormAdd';

const WorkersTable = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalFireActive, setModalFireActive] = useState(false);
    const [isModalEditActive, setModalEditActive] = useState(false);
    const [isModalAddActive, setModalAddActive] = useState(false);

    const [workers, setWorkers] = useState(workersObject);

    const handleRowClick = (id) => {
        setSelectedRow(id === selectedRow ? null : id);
    };

    const handleDismissFire = () => {
        setModalFireActive(true);
    };

    const handleDismissEdit = () => {
        setModalEditActive(true);
    };

    const handleDismissAdd = () => {
        setModalAddActive(true);
    };

    const handleFire = () => {
        if (selectedRow !== null) {
            const updatedWorkers = workers.filter(worker => worker.id !== selectedRow);
            setWorkers(updatedWorkers);
            setSelectedRow(null);
            setModalFireActive(false);
        }
    };

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBCard alignment='center'>
                    <MDBCardTitle className="mt-3"><h5>Таблица работников</h5></MDBCardTitle>
                    <MDBCardBody className="p-0">
                        <MDBTable align='middle'>
                            <MDBTableHead dark>
                                <tr>
                                    {["ID", "Имя", "Фамилия", "Возраст", "Зарплата", "Профессия", "Текущая занятость"].map((columnName, index) => (
                                        <th key={index} scope='col'>{columnName}</th>
                                    ))}
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {workers.map(worker =>
                                    <tr key={worker.id} onClick={() => handleRowClick(worker.id)} style={{ background: selectedRow === worker.id ? '#b8daff' : '' }}>
                                        <td>{worker.id}</td>
                                        <td>{worker.name}</td>
                                        <td>{worker.surname}</td>
                                        <td>{worker.age}</td>
                                        <td>{worker.salary}</td>
                                        <td>{worker.profession}</td>
                                        <td>{worker.status}</td>
                                    </tr>
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
                <div className="mt-3">
                    <MDBRow>
                        <MDBCol className="mb-2" size="4">
                            <Button variant="danger" disabled={!selectedRow} onClick={handleDismissFire} className="w-100">
                                Уволить
                            </Button>
                        </MDBCol>
                        <MDBCol className="mb-2" size="4">
                            <Button variant="primary" disabled={!selectedRow} onClick={handleDismissEdit} className="w-100">
                                Редактировать
                            </Button>
                        </MDBCol>
                        <MDBCol className="mb-2" size="4">
                            <Button variant="success" disabled={!selectedRow} onClick={handleDismissAdd} className="w-100">
                                Добавить
                            </Button>
                        </MDBCol>
                    </MDBRow>
                </div>
                <ModalFormFire active={isModalFireActive} setActive={setModalFireActive} info={[selectedRow]} handleFire={handleFire} />
                <ModalFormEdit active={isModalEditActive} setActive={setModalEditActive} info={[selectedRow]}/>
                <ModalFormAdd active={isModalAddActive} setActive={setModalAddActive} info={[selectedRow]} />
            </MDBContainer>
        </section>
    );
};

export default WorkersTable;