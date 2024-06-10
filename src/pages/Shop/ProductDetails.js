import React, { useState } from 'react';
import './ProductDetails.scss';
import { useParams } from "react-router-dom";
import { Tabs } from '@nutui/nutui-react'

const ProductDetails = ({ addToCart = () => undefined }) => {
  const [tab1value, setTab1value] = useState('0')
  let { id } = useParams();
  const [product] = useState({
    id: id,
    name: `音响 ${id}`,
    description: '高质量音效，让您的音乐享受更上一层楼。',
    price: '299.99',
    imageUrl: `https://www.hivi.com/uploads/202202/1645162970691.jpg`
  });

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">¥{product.price}</p>
        <div className="button-wrap">
          <button className="add-to-cart" onClick={() => addToCart(product)}>加入购物车</button>
          <button className="add-to-cart" onClick={() => window.location.href = '/cart'}>查看购物车</button>
        </div>
        <Tabs
          value={tab1value}
          onChange={(value) => {
            setTab1value(value)
          }}
        >
          <Tabs.TabPane title="介绍">
            <img src='https://www.hivi.com/backend/upload/image/20220218/20220218134112_86294.jpg' />
          </Tabs.TabPane>
          <Tabs.TabPane title="参数">
            <img src='https://www.hivi.com/backend/upload/image/20230908/20230908102327_62611.jpg' />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;