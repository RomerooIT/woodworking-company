import React, { useState, useEffect } from 'react';
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
import Button from 'react-bootstrap/Button';
import { PencilSquare, PlusSquare, Trash } from 'react-bootstrap-icons';
import ModalFormFire from './ModalFormFire';
import ModalFormEdit from './ModalFormEdit';
import ModalFormAdd from './ModalFormAdd';

const WorkersTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalFireActive, setModalFireActive] = useState(false);
  const [isModalEditActive, setModalEditActive] = useState(false);
  const [isModalAddActive, setModalAddActive] = useState(false);
  const [apiData, setApiData] = useState([]);

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
      const updatedWorkers = apiData.filter(worker => worker.id !== selectedRow);
      setApiData(updatedWorkers);
      setSelectedRow(null);
      setModalFireActive(false);
    }
  };

  useEffect(() => {
    fetch('https://localhost:7891/api/worker')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error(error));
  }, []);

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
                {apiData.map(worker =>
                  <tr key={worker.id} onClick={() => handleRowClick(worker.id)} style={{ background: selectedRow === worker.id ? '#b8daff' : '' }}>
                    <td>{worker.id}</td>
                    <td>{worker.name}</td>
                    <td>{worker.surname}</td>
                    <td>{worker.age}</td>
                    <td>{worker.salary}</td>
                    <td>{worker.category}</td>
                    <td>{worker.currentstate}</td>
                  </tr>
                )}
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
        <div className="mt-3">
          <MDBRow>
            <MDBCol className="mb-2" size="4">
              <Button variant="primary" disabled={!selectedRow} onClick={handleDismissEdit} className="w-100">
                <PencilSquare className="mr-2" /> Редактировать
              </Button>
            </MDBCol>
            <MDBCol className="mb-2" size="4">
              <Button variant="success" onClick={handleDismissAdd} className="w-100">
                <PlusSquare className="mr-2" /> Добавить
              </Button>
            </MDBCol>
            <MDBCol className="mb-2" size="4">
              <Button variant="danger" disabled={!selectedRow} onClick={handleDismissFire} className="w-100">
                <Trash className="mr-2" /> Уволить
              </Button>
            </MDBCol>
          </MDBRow>
        </div>
        <ModalFormFire active={isModalFireActive} setActive={setModalFireActive} info={[selectedRow]} handleFire={handleFire} />
        <ModalFormEdit active={isModalEditActive} setActive={setModalEditActive} info={[selectedRow]} />
        <ModalFormAdd active={isModalAddActive} setActive={setModalAddActive} info={[selectedRow]} />
      </MDBContainer>
    </section>
  );
};

export default WorkersTable;

