import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./Nav";

export default function Topping({_topping, setJuice, setToppingPrice, menuFadeIn}) {
  const toppings = [
    {name: 'no', price: 0},
    {name: 'chocolate', price: 2000},
    {name: 'cheese', price: 3000},
    {name: 'caramel', price: 3500},
    {name: 'strawberry', price: 3500},
  ]
  const pickedHandler = (toppingPicked) => {
    setToppingPrice(toppingPicked.price)
    setJuice(prevState => ({...prevState, topping: toppingPicked.name}))
  }

  const optionSelected = (topping, trueVal, falseVal) => _topping === topping ? trueVal : falseVal

  return (
    <motion.div 
      initial={menuFadeIn.hidden} animate={menuFadeIn.visible} variants={menuFadeIn}
      className="flex flex-col items-center">
      <h2 className="mb-3 font-bold">Pick a Topping</h2>
      <div className="flex max-w-full overflow-x-scroll sm:overflow-hidden rounded-xl mb-3">
        {toppings.map(topping => (
          <div key={topping.name} className="flex flex-col items-center-center pr-1 pb-1 mr-3 last:mr-0">
            <button onClick={() => pickedHandler(topping)} className={`mb-2 w-16 h-16 px-2 bg-topping-${topping.name} rounded-xl shadow focus:outline-none`}>
              <div className="w-full h-12 flex justify-center items-center shadow rounded-lg bg-white bg-opacity-20">
                <p className={`${optionSelected(topping.name, 'opacity-100', 'opacity-0')} text-lg font-bold transition-all`}>✔</p>
              </div>
            </button>
            <p className="text-center text-xs font-bold">{topping.name}</p>
            <p className="text-center text-xs font-medium">Rp{topping.price}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="mr-4 flex-1">
          <Link to="/flavor">
            <Nav nav="back" />
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/confirm">
            <Nav nav="next" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
