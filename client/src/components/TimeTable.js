import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ModalAddProduct from './ModalAddProduct';
import ModalEditProduct from './ModalEditProduct';
import ModalDeleteProduct from './ModalDeleteProduct';
import ModalOrder from './Order'; // Corrected import
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false); // Added state for the order modal

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

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEditClick = () => {
    if (selectedProduct) {
      setEditModalOpen(true);
    } else {
      console.warn('Выберите продукт для редактирования.');
    }
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleDeleteClick = () => {
    if (selectedProduct) {
      setDeleteModalOpen(true);
    } else {
      console.warn('Выберите продукт для удаления.');
    }
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleOrderClick = () => {
    console.log('Кнопка "Заказать" нажата');
    setOrderModalOpen(true); // Open the order modal
  };

  return (
    <div className="container main-content">
      <div className="row">
        <div className="col-md-6">
          <h1>Мои товары:</h1>
        </div>
        <div className="col-md-6 text-right">
          <Button variant="success" className="mr-2" onClick={handleOpenModal}>
            Добавить
          </Button>{' '}
          <Button
            variant="primary"
            className="mr-2"
            onClick={handleEditClick}
            disabled={!selectedProduct}
          >
            Редактировать
          </Button>{' '}
          <Button
            variant="danger"
            className="mr-3"
            onClick={handleDeleteClick}
            disabled={!selectedProduct}
          >
            Удалить
          </Button>
          <Button
            variant="warning"
            style={{ marginLeft: '8px' }}
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
      <ModalAddProduct active={isModalOpen} setActive={handleCloseModal} />
      <ModalEditProduct
        active={isEditModalOpen}
        setActive={handleCloseEditModal}
        productToEdit={selectedProduct}
        productId={selectedProduct ? selectedProduct.id : null}
        newSelected={selectedProduct}
      />
      <ModalDeleteProduct
        active={isDeleteModalOpen}
        setActive={handleCloseDeleteModal}
        productId={selectedProduct ? selectedProduct.id : null}
        newSelected={selectedProduct}
      />
      <ModalOrder 
      active={isOrderModalOpen} 
      setActive={() => setOrderModalOpen(false)}
      newSelected={selectedProduct}
      products={products}  />
    </div>
  );
};

export default ProductList;
