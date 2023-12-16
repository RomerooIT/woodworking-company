import React from 'react';
import '../styles/style1.css';
// import { products, seffy } from './dummyData.js';

class Product extends React.Component {
  render() {
    return (
      <div className="ProductItem">
        <div className="image">
          <img src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="description">
            <div>id:{this.props.id}</div>
            <p>title:{this.props.title}</p>
            <p>description:{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="avatar-image" src={this.props.submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export const products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      submitterAvatarUrl:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Tanned',
      productImageUrl: 'https://via.placeholder.com/250'
    },
    {
      id: 2,
      title: 'Jake',
      description: 'dasdasdas sdsad n expertise.',
      url: '#',
      submitterAvatarUrl:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Tanned',
      productImageUrl: 'https://via.placeholder.com/250'
    },
    {
      id: 3,
      title: 'Roger',
      description: 'dasdasdas sdsad n expertise.',
      url: '#',
      submitterAvatarUrl:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Tanned',
      productImageUrl: 'https://via.placeholder.com/250'
    }
  ];
  
  export const seffy = 'joeSeffy1';
  


class ProductList extends React.Component {
  render() {
    const products = this.props.products;
    return products.map(product => (
      <Product
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
      />
    ));
  }
}

export default function App() {
  return (
    <div>
      <h1>{seffy}</h1>
      <ProductList products={products} />
    </div>
  );
}
