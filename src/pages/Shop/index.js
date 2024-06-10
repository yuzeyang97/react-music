import React, { useState } from 'react';
import { ShoppingAdd } from '@nutui/icons-react';
import './index.scss';

function App() {
    // 商品 Mock 数据
    const products = [
        { id: 1, name: '音响1', price: '199.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
        { id: 2, name: '音响2', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
        { id: 3, name: '音响3', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
        { id: 4, name: '音响4', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
        { id: 5, name: '音响5', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
        { id: 6, name: '音响6', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
        { id: 7, name: '音响7', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
        // 更多商品数据...
    ];

    const [cartItems, setCartItems] = useState([]);

    const addToCart = product => {
        // 这里可以添加逻辑来防止重复添加到购物车等
        setCartItems([...cartItems, product]);
    };

    return <div className="home-page">
        <div className='product-banner'>
            <img src='https://www.hivi.com/uploads/202310/16974333708028.jpg' />
        </div>
        <div className="product-list">
            {products.map((product, index) => (
                <div className="product-card" key={product.id}>
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">¥{product.price}</p>
                        <div className='product-btn-wrapper'>
                            <div className="product-details-link">
                                <ShoppingAdd onClick={() => window.location.href = `/product/${product.id}`} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default App;
