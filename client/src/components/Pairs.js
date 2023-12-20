import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

const Pairs = () => {
  const [pairsData, setPairsData] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('REFRESH_TOKEN');
    console.log('Current token:', token);

    const decodedToken = decodeToken(token);
    console.log('Decoded token:', decodedToken);

    setUserId(parseInt(decodedToken.id, 10) || 0);
  }, []);

  useEffect(() => {
    // Проверка, присутствует ли userId
    if (userId) {
      // Запрос к API, используя userId
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
      console.error('Ошибка декодирования токена:', error);
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

  return (
    <div className="w-75 ms-auto me-auto mt-2">
      {pairsData.length === 0 ? (
        <p>No data available</p>
      ) : (
        <MDBRow className="row-cols-1 row-cols-md-5 g-4">
          {pairsData.map((item, index) => (
            <MDBCol key={index}>
              <MDBCard className="m-1" shadow="0" border="dark" background="dark">
                <MDBCardBody className="text-dark">
                  <MDBCardTitle className="text-white font-weight-bolder">Заявка</MDBCardTitle>
                  <MDBCardText className="text-white">
                    <p className="font-weight-bolder">Адрес:</p>
                    <p> {item.customerAddress}</p>
                    <p className="font-weight-bolder">Количество заказанного товара:</p>
                    <p>{item.amount}</p>
                    <p className="font-weight-bolder">Указанные требования:</p>
                    <p>{item.requirements}</p>
                    <p className="font-weight-bolder">Статус:</p>
                    <p>{item.status}</p>
                    {item.productDetails && (
                      <>
                        <p className="font-weight-bolder">Наименование товара:</p>
                        <p>{item.productDetails.material}</p>
                        <p className="font-weight-bolder">Материал:</p>
                        <p>{item.productDetails.materialtype}</p>
                        <p className="font-weight-bolder">Цена:</p>
                        <p>{item.productDetails.price} BYN</p>
                      </>
                    )}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}
    </div>
  );
};

export default Pairs;
