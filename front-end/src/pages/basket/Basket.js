import React from 'react';
import { Link } from 'react-router-dom';
import './Basket.scss';

function Basket({basket = {}, total = 0, items = 0, setBasket}) {
  return (
    <div className="basket">
      {items === 0 && (
        <>
          <h1>YOUR BAG IS EMPTY</h1>
          <div>Once you add something to your bag, it will appear here. Ready to get started?</div>
          <Link to="/">
            <div className="button-link">
              <span>GET STARTED</span>
            </div>
          </Link>
        </>
      )}
      {items >= 1 && (
        <div>
          <h1>YOUR BAG</h1>
          <span>TOTAL: ({items} items)</span> <span className="total">${total}</span>
          <div className="order">
            <div className="items">
              {Object.keys(basket)
                .map(key =>
                (<div className="basket-item" key={key}>
                  <div className="thumbnail">
                    <img alt="thumbnail" src={basket[key].product.product_description.description_assets.image_url}></img>
                  </div>
                  <div className="item-info">
                    <div className="top">
                      <div className="line">
                        <span>{basket[key].product.name}</span>
                        <span>${basket[key].quantity * basket[key].product.pricing_information.currentPrice}</span>
                      </div>
                      <div>{basket[key].product.attribute_list.color}</div>
                      <div className='stock'>IN STOCK</div>
                    </div>
                    <div className="item-quantity">{basket[key].quantity}</div>
                  </div>
                  <button className="close-button" onClick={() => {
                      if (basket[key].quantity >= 2) {
                        // reduce quantity by one
                        let newBasket = {...basket, [key]: {...basket[key], quantity: basket[key].quantity - 1}};
                        setBasket(newBasket);
                      } else {
                        // remove entry completely
                        let {[key]: removed, ...newBasket} = basket;
                        setBasket(newBasket);
                      }
                    }
                  }>
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="gl-icon" data-di-rand="1576971083616">
                      <use href="#close">
                        <symbol id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path></symbol>
                      </use>
                    </svg>
                  </button>
                </div>)
              )}
            </div>
            <div className="summary">
              <h2>ORDER SUMMARY</h2>
              <div className="line">
                <span>{items} ITEM{items === 1? '': 'S'}</span>
                <span>${total}</span>
              </div>
              <div className="line">
                <span>DELIVERY</span>
                <span>FREE</span>
              </div>
              <div className="line">
                <span>SALES TAX</span>
                <span>-</span>
              </div>
              <div className="line">
                <span>TOTAL</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;