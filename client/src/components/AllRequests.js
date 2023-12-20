import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import StatusUpdateModal from './ModalStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Импортируйте нужную иконку

const Pairs = () => {
  const [pairsData, setPairsData] = useState([]);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const response = await fetch('http://127.0.0.1:7891/api/request/getAllRequests');
        const data = await response.json();
        console.log('API Data:', data);
        setPairsData(data);

        const updatedPairsData = await Promise.all(
          data.map(async (item) => {
            const userResponse = await fetch(`http://127.0.0.1:7891/api/users/${item.clientId}`);
            const userData = await userResponse.json();

            const productResponse = await fetch(`http://127.0.0.1:7891/api/product/${item.productId}`);
            const productData = await productResponse.json();

            return {
              ...item,
              userData,
              productData,
            };
          })
        );

        setPairsData(updatedPairsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllRequests();
  }, []);

  const handleStatusChange = () => {
    // Обновите данные после изменения статуса (если необходимо)
    // Можно вызвать повторный запрос для обновления данных
  };

  const handleOpenStatusModal = (requestId) => {
    setSelectedRequestId(requestId);
    setShowStatusModal(true);
  };

  const handleCloseStatusModal = () => {
    setSelectedRequestId(null);
    setShowStatusModal(false);
  };

  return (
    <div className="container mt-2">
      {pairsData.length === 0 ? (
        <p>No data available</p>
      ) : (
        <MDBRow className="row-cols-1 row-cols-md-2 g-4">
          {pairsData.map((item, index) => (
            <MDBCol key={index}>
              <MDBCard className="m-1" shadow="0" border="dark" background="dark">
                <MDBCardBody className="text-dark">
                  <MDBCardTitle className="text-white font-weight-bolder">
                    Заявка № {item.id}
                    <hr className="my-2" />
                  </MDBCardTitle>
                  <MDBCardText className="text-white">
                    <div className="mb-3">
                      <p className="font-weight-bolder">Адрес заказчика:</p>
                      <p>{item.customerAddress || 'N/A'}</p>
                    </div>
                    <hr className="my-2" />
                    {item.userData && (
                      <>
                        <p className="font-weight-bolder">Email пользователя:</p>
                        <p>{item.userData.email || 'N/A'}</p>
                        <hr className="my-2" />
                        <p className="font-weight-bolder">Имя пользователя:</p>
                        <p>{item.userData.name || 'N/A'}</p>
                        <hr className="my-2" />
                        <p className="font-weight-bolder">Фамилия пользователя:</p>
                        <p>{item.userData.surname || 'N/A'}</p>
                        <hr className="my-2" />
                      </>
                    )}
                    {item.productData && (
                      <>
                        <p className="font-weight-bolder">Наименование товара:</p>
                        <p>{item.productData.material || 'N/A'}</p>
                        <hr className="my-2" />
                        <p className="font-weight-bolder">Материал:</p>
                        <p>{item.productData.materialtype || 'N/A'}</p>
                        <hr className="my-2" />
                        <p className="font-weight-bolder">Цена:</p>
                        <p>{item.productData.price || 'N/A'} BYN</p>
                      </>
                    )}
                    <hr className="my-2" />
                    <div className="mb-3">
                      <p className="font-weight-bolder">Требования:</p>
                      <p>{item.requirements || 'N/A'}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="mb-3">
                      <p className="font-weight-bolder">Статус заявки:</p>
                      <span className="status-badge bg-secondary text-white p-1 rounded">
                        {item.status || 'Awaiting confirmation'}
                      </span>
                    </div>
                  </MDBCardText>
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="btn btn-secondary ml-auto mb-2"
                    style={{ marginRight: '15px' }}
                    onClick={() => handleOpenStatusModal(item.id)}
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}
      <StatusUpdateModal
        showModal={showStatusModal}
        handleCloseModal={handleCloseStatusModal}
        requestId={selectedRequestId}
        handleStatusUpdate={handleStatusChange}
      />
    </div>
  );
};

export default Pairs;
