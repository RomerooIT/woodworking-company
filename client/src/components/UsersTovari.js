import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ModalOrder from './Order';
import { ShowProduct } from '../https/workersAPI';
import '../styles/index.css';

const ProductRow = ({ id, material, materialtype, price, onSelect, selected, setSelected }) => {
  const handleProductClick = () => {
    const newSelected = selected === id ? selected : id;
    setSelected(newSelected);
    onSelect(newSelected);

    console.log('Selected product id:', newSelected);
  };

  return (
    <div
      className={`row product ${selected === id ? 'selected' : ''}`}
      style={{
        backgroundColor: selected === id ? '#cce5ff' : 'inherit',
        cursor: 'pointer',
      }}
      onClick={handleProductClick}
    >
      <div className="col-md-6 product-detail">
        <h4>{material}</h4>
        <p>{materialtype}</p>
      </div>
      <div className="col-md-4 offset-md-2 offset-md-1 product-price">
        {price} BYN
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ShowProduct();
        if (response.response) {
          setProducts(response.response.data);
        } else {
          console.error(response.error);
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelection = (selected) => {
    setSelectedProduct(selected);
  };

  const handleOrderClick = () => {
    console.log('Кнопка "Заказать" нажата');
    setOrderModalOpen(true); // Open the order modal
  };

  return (
    <div className="container main-content">
      <div className="row">
        <div className="col-md-6">
          <h1>Товары:</h1>
        </div>
        <div className="col-md-6 text-right">
          <Button
            variant="warning"
            style={{ marginLeft: 'auto' }}
            onClick={handleOrderClick}
            disabled={!selectedProduct}
          >
            Заказать
          </Button>
        </div>
      </div>
      {products.map((product) => (
        <ProductRow
          key={product.id}
          id={product.id}
          material={product.material}
          materialtype={product.materialtype}
          price={product.price}
          onSelect={(selected) => handleProductSelection(selected)}
          selected={selectedProduct}
          setSelected={setSelectedProduct}
        />
      ))}
      <ModalOrder 
      active={isOrderModalOpen} 
      setActive={() => setOrderModalOpen(false)}
      newSelected={selectedProduct}
      products={products}  />
    </div>
  );
};

export default ProductList;
