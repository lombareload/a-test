import React from 'react';
import './Modal.scss';
import { Link } from 'react-router-dom';

function Modal({product, totalItems, totalCost, close}) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h1>SUCCESSFULLY ADDED TO BAG!</h1>
        <div className="bag">
          <div className="product-detail">
            {product && product.product_description && (
              <>
                <div className="img-container">
                  <img alt="product" src={product.product_description.description_assets.image_url}></img>
                </div>
                <div className="product-data">
                  <h3>{product.name}</h3>
                  <div>${product.pricing_information.currentPrice}</div>
                  <div>Color: {product.attribute_list.color}</div>
                </div>
                <div className="bag-total">
                  <div className="bag-top">
                    <h2>YOUR BAG</h2>
                    <div className="line">
                      <div>{totalItems} item{totalItems >= 2 ? 's' : ''}</div>
                    </div>
                    <div className="line">
                      <div>Total Product Cost:</div><div>${totalCost}</div>
                    </div>
                    <div className="line">
                      <div>Total Delivery Cost:</div><div>FREE</div>
                    </div>
                  </div>
                  <div className="bag-bottom">
                    <div className="line">
                      <div>Total:</div><div>${totalCost}</div>
                    </div>
                    <div className="line">
                      Installment options
                    </div>
                    <Link to="/basket">
                      <div className="button-link">
                        <span>VIEW BAG</span>
                      </div>
                    </Link>
                    <div className="button-link-white">
                      <span>CHECKOUT</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <button className="close-button" onClick={close}>
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="gl-icon" data-di-rand="1576971083616">
          <use href="#close">
            <symbol id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path></symbol>
          </use>
        </svg>
      </button>
    </div>
  );
}

export default Modal;
