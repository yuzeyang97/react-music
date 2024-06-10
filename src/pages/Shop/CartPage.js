import React, { useMemo } from 'react';
import './CartPage.scss';

const CartPage = ({ cartItems = [
  { id: 1, name: '音响1', price: '199.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
  { id: 2, name: '音响2', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
  { id: 3, name: '音响3', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
  { id: 4, name: '音响4', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
  { id: 5, name: '音响5', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
  { id: 6, name: '音响6', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
  { id: 7, name: '音响7', price: '299.99', imageUrl: 'https://www.hivi.com/uploads/202202/1645162970691.jpg' },
  // 更多商品数据...
] }) => {
  const totalMoney = useMemo(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += Number(item.price)
    })

    return total;
  }, [cartItems]);

  return (
    <div className="cart-page">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className='cart-item-left'>
              <img src={item.imageUrl} alt={item.name} className="cart-image" />
              <div className="cart-info">
                <div className="cart-item-title">{item.name}</div>
                <p className="cart-item-price">¥{item.price}</p>
              </div>
            </div>

            <div className='add-wrapper'>
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart">购物车为空</p>
      )}
      <div className='total-price-wrapper'>
        <div className='item'>
          <div className='item-title'>合计件数:</div>
          <div>共{cartItems.length}件商品</div>
        </div>
        <div className='item'>
          <div className='item-title'>商品总价:</div>
          <div>¥{totalMoney}</div>
        </div>
        <div className='item'>
          <div className='item-title'>运费:</div>
          <div>¥0.00</div>
        </div>
      </div>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <button className="add-to-cart" onClick={() => window.location.href = '/cart'}>提交订单</button>
      </div>
    </div>
  );
};

export default CartPage;