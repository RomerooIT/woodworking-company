import React, { useState, useEffect } from 'react';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import EditRequestModal from './EditRequestModal';

const Pairs = () => {
  const [pairsData, setPairsData] = useState([]);
  const [userId, setUserId] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('REFRESH_TOKEN');
    console.log('Current token:', token);

    const decodedToken = decodeToken(token);
    console.log('Decoded token:', decodedToken);

    setUserId(parseInt(decodedToken.id, 10) || 0);
  }, []);

  useEffect(() => {
    // Check if userId is present
    if (userId) {
      // Fetch data from API using userId
      fetch(`http://127.0.0.1:7891/api/request/getUserRequests?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
          console.log('API Data:', data);
          setPairsData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userId]);

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.error('Token decoding error:', error);
      return {};
    }
  };

  useEffect(() => {
    // Fetch product details for each pair
    const fetchProductDetails = async () => {
      const updatedPairsData = await Promise.all(
        pairsData.map(async (item) => {
          const productResponse = await fetch(`http://127.0.0.1:7891/api/product/${item.productId}`);
          const productData = await productResponse.json();

          return {
            ...item,
            productDetails: productData,
          };
        })
      );

      setPairsData(updatedPairsData);
    };

    if (pairsData.length > 0) {
      fetchProductDetails();
    }
  }, [pairsData]);

  const handleOpenEditModal = (requestId) => {
    setSelectedRequestId(requestId);
    setShowEditModal(true);
  };

  return (
    <div className="container mt-2">
      {pairsData.length === 0 ? (
        <p>Сделайте заказ во вкладке "Товары"</p>
      ) : (
        <MDBRow className="row-cols-1 row-cols-md-2 g-4">
          {pairsData.map((item, index) => (
            <MDBCol key={index}>
              <MDBCard className="m-1" shadow="0" border="dark" background="dark">
                <MDBCardBody className="text-dark">
                  <MDBCardTitle className="text-white font-weight-bolder">Заявка</MDBCardTitle>
                  <MDBCardText className="text-white">
                    <hr className="my-2" />
                    <div className="mb-3">
                      <p className="font-weight-bolder">Адрес:</p>
                      <p>{item.customerAddress || 'N/A'}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="mb-3">
                      <p className="font-weight-bolder">Количество заказанного товара:</p>
                      <p>{item.amount || 'N/A'}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="mb-3">
                      <p className="font-weight-bolder">Требования:</p>
                      <p>{item.requirements || 'N/A'}</p>
                    </div>
                    <hr className="my-2" />
                    {item.productDetails && (
                      <div>
                        <p className="font-weight-bolder">Наименование товара:</p>
                        <p>{item.productDetails.material || 'N/A'}</p>
                        <hr className="my-2" />
                        <p className="font-weight-bolder">Материал:</p>
                        <p>{item.productDetails.materialtype || 'N/A'}</p>
                        <hr className="my-2" />
                        <p className="font-weight-bolder">Цена:</p>
                        <p>{item.productDetails.price || 'N/A'} BYN</p>
                      </div>
                    )}
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
                    onClick={() => handleOpenEditModal(item.id)}
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}
      <EditRequestModal
        showModal={showEditModal}
        handleCloseModal={() => setShowEditModal(false)}
        requestId={selectedRequestId}
        handleEditRequest={(requestId, editedData) => {
          console.log('Edited request data:', requestId, editedData);
        }}
      />
    </div>
  );
};

export default Pairs;
