import React, { useState } from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import Shoes from "./pages/shoes/Shoes";
import Details from './pages/details/Details';
import Basket from './pages/basket/Basket';

function App() {
  // let [basketId, setBasketId] = useState(localStorage.getItem('basketId'));
  // useEffect(() => {
  //   async function getBasketContents(basketId) {
  //     if (basketId) {
  //       let response = await fetch(`http://localhost:8080/api/checkout/baskets/${basketId}`);
  //       if (response.ok) {
  //         let json = await response.json();
  //         console.log('basket = ', json);
  //       }
  //     } else {
  //       let response = await fetch('http://localhost:8080/api/checkout/baskets', {
  //         method: 'POST',
  //         credentials: "include"
  //       });
  //       if (response.ok) {
  //         let json = await response.json();
  //         console.log('basket2 = ', json);
  //       } else if (response.status === 403) {
  //         let cookie = response.headers.get('Cookie');
  //         console.log('cookie = ', cookie);
  //       }
  //     }
  //   }
  //   getBasketContents(basketId);
  // }, [basketId]);
  let [basket, setBasket] = useState({});

  let basketTotalItems = Object.keys(basket)
    .reduce((total, key) => total + basket[key].quantity, 0);

  let basketTotalCost = Object.keys(basket)
    .reduce((total, key) => total + (basket[key].product.pricing_information.currentPrice * basket[key].quantity), 0);

  return (
    <Router>
      <div className="App">
        <header className="App-Header">
          <Link to="/" className="Logo">
          </Link>
          <Link to="/basket" className="basket">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="gl-icon" data-di-rand="1576971083616">
              <use href="#bag-active">
                <symbol id="bag-active" viewBox="0 0 16 24"><g stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"><path fill="currentColor" d="M1 7h14v14H1z"></path><path fill="none" d="M11 10V3H5v7"></path></g></symbol>
              </use>
            </svg>
            <span className="basket-quantity">{basketTotalItems === 0? '' : basketTotalItems}</span>
          </Link>
        </header>
      </div>
      <div className="Page">
        <Switch>
          <Route exact path="/">
            <Shoes />
          </Route>
          <Route exact path="/basket">
            <Basket basket={basket} total={basketTotalCost} items={basketTotalItems} setBasket={setBasket} />
          </Route>
          <Route path="/:productId">
            <Details basket={basket} setBasket={setBasket} totalItems={basketTotalItems} totalCost={basketTotalCost} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
