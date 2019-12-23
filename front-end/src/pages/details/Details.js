import React, { useEffect, useState } from 'react';
import './Details.scss';
import { useParams } from 'react-router-dom';
import Images from '../../components/images/Images';
import Information from '../../components/information/Information';
import Add from '../../components/add/Add';
import Modal from '../../components/modal/Modal';

function Details({basket, setBasket, totalItems = 0, totalCost = 0}) {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [sku, setSku] = useState();
  const [quantity, setQuantity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(`/api/products/${productId}`);
      if (response.ok) {
        const json = await response.json();
        setProduct(json);
      }
    }
    fetchDetails();
  }, [productId]);

  function addToBasket() {
    if (sku) {
      if (basket.hasOwnProperty(sku)) {
        // increase existing quantity
        let newBasket = {...basket, [sku]: {...basket[sku], quantity: basket[sku].quantity + quantity}};
        setBasket(newBasket);
      } else {
        // add new field
        let newBasket = {...basket, [sku]: {quantity, product}};
        setBasket(newBasket);
      }
      setModalOpen(true);
    } else {
      alert('Please select your size')
    }
  }
  
  return (
    <div className="details">
      <Images images={product.view_list} />
      <div className="right-info">
        <div className="top">
          <Information description={product.product_description} pricing={product.pricing_information} />
        </div>
        <div className="bottom">
          <Add productId={productId} setSku={setSku} setQuantity={setQuantity} quantity={quantity} /> 
          <button onClick={addToBasket} className="add-to-cart">
            ADD TO BAG
          </button>
        </div>
      </div>
      {modalOpen && (
        <div className="modal-container" onClick={e => 'modal-container' === e.target.className && setModalOpen(false)}>
          <Modal product={product} totalItems={totalItems} totalCost={totalCost} close={() => setModalOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Details;