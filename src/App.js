import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Juice from "./components/juice/Juice";
import Cart from "./components/Cart";
import Input from "./components/Input";
import Size from "./components/Size";
import Flavor from "./components/Flavor";
import Topping from "./components/Topping";
import ConfirmCart from "./components/ConfirmCart";
import CartAdded from "./components/CartAdded";

import Nav from "./components/Nav";

function App() {
  const [juice, setJuice] = useState({ size:'M', name: '', flavor:'vanilla', topping:'no', price:10000 })
  const [sizePrice, setSizePrice] = useState(10000)
  const [toppingPrice, setToppingPrice] = useState(0)
  
  const [cartItems, setCartItems] = useState([])
  const [priceTotal, setPriceTotal] = useState(0)
  
  const [expand, setExpand] = useState(false)

  useEffect(() => {
     setJuice(prevState => ({...prevState, price: sizePrice + toppingPrice}))
  }, [sizePrice, toppingPrice])

  useEffect(() => {
    setPriceTotal(0)
    cartItems.map(cartItem => setPriceTotal(prevState => prevState + cartItem.price))
  }, [cartItems])

  const expandHandler = () => {
    setExpand(prevState => !prevState)
  }

  return (
    <Router>
      <div className={`App min-h-screen font-body p-4 flex flex-col items-center bg-${juice.flavor}-500 transition-all duration-300`}>
        <div className="w-full sm:max-w-screen-sm flex-grow flex flex-col items-center">

          {/* The Head Body */}
          <div className="flex flex-col justify-center w-full items-center shadow bg-white bg-opacity-50 rounded-3xl px-8 py-4 mb-4">
            <h1 className="mb-2 text-xl w-ful font-bold text-center">Order Your Milkshake</h1>

            {/* The Cup */}
            <Juice name={juice.name} size={juice.size} flavor={juice.flavor} />

            <div className="w-full mt-4 flex flex-col items-center justify-center text-center">
              <h1 className="text-xs">Price</h1>
              <p className="w-full text-lg font-bold break-words">{`Rp${juice.price}`}</p>
            </div>
          </div>

          {/* The Cart */}
          <div className="mb-4 w-full flex flex-col justify-center shadow rounded-3xl overflow-hidden">
            {/* Cart Header */}
            <div onClick={expandHandler} className="flex justify-between items-center p-4 bg-white bg-opacity-60 font-bold cursor-pointer">
              <p>Cart ({cartItems.length})</p>
              { expand ?
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                : <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg> }
            </div>

            {/* Cart Body */}
            <div className={`flex flex-col p-4 bg-white bg-opacity-20 text-sm ${expand ? 'flex' : 'hidden'}`}>
              {cartItems.map(cartItem => (
                <Cart key={cartItem.id} setCartItems={setCartItems} cartItems={cartItems} item={cartItem} />
              ))}

              <div className="flex justify-between items-center">
                <p>Total: <span className="font-bold">Rp{priceTotal}</span></p>
                {cartItems.length >= 1 && (
                  <Link to="/">
                    <Nav nav="continue" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {/* The Menu */}
          <div className="w-full bg-white bg-opacity-50 shadow rounded-3xl p-4 flex flex-col items-center">
            <Switch>
              <Route exact path="/">
                <Size setJuice={setJuice} setSizePrice={setSizePrice} />
              </Route>
              <Route path="/input">
                <Input setJuice={setJuice} name={juice.name} />
              </Route>
              <Route path="/flavor">
                <Flavor _flavor={juice.flavor} setJuice={setJuice} />
              </Route>
              <Route path="/topping">
                <Topping 
                  _topping={juice.topping} 
                  setJuice={setJuice} 
                  setToppingPrice={setToppingPrice} />
              </Route>
              <Route path="/confirm">
                <ConfirmCart 
                  juice={juice} 
                  setJuice={setJuice}
                  setSizePrice={setSizePrice}
                  setToppingPrice={setToppingPrice}
                  setCartItems={setCartItems} />
              </Route>
              <Route path="/success">
                <CartAdded />
              </Route>
            </Switch>
          </div>
        </div>

      </div>
    </Router>

  );
}

export default App;
