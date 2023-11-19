import React, { useEffect } from 'react'

import { DollarCircle, Add, Minus, Home, Card } from 'iconsax-react'
import { useState } from 'react'

const TotalPrice = ({ TPrice }) => {
  return (
    <div className="p-2 items-center flex border-2 border-primary-clr-2 rounded-md">
      <DollarCircle size="32" color="var(--primary-clr-1)" />
      <h1 className="m-auto text-2xl font-bold">{TPrice}</h1>
    </div>
  )
}

const Discount = () => {
  return (
    <div className="p-2 bg-primary-clr-3 rounded-md items-center flex flex-col">
      <h1 className="w-fit m-auto h-fit">
        Saved <span className="font-bold">$12</span> (<span className="font-bold">38</span>%)
      </h1>
    </div>
  )
}
const Amount = ({ amnt, increaseHandler, decreaseHandler }) => {
  return (
    <div className="w-full items-center p-2 flex justify-between bg-secondary-clr-3 rounded-md">
      <div onClick={increaseHandler} className="hover:opacity-70 cursor-pointer">
        <Add size="32" color="var(--primary-clr-1)" />
      </div>
      <h1 className="text-xl">{amnt}</h1>
      <div onClick={decreaseHandler} className="hover:opacity-70 cursor-pointer">
        <Minus size="32" color="var(--primary-clr-1)" />
      </div>
    </div>
  )
}
const Favorite = ({wish, handler}) => {
  return (
    <div onClick={handler} className="w-fit hover:opacity-70 cursor-pointer p-4 bg-secondary-clr-3 rounded-md">
      <Home variant={wish ? "Bold" : ""} size="28" color="var(--primary-clr-2)" />
    </div>
  )
}
const BuyNow = () => {
  return (
    <div className="p-2 hover:opacity-70 cursor-pointer items-center bg-secondary-clr-3 rounded-md">
      <div className="w-fit m-auto h-full flex items-center gap-2">
        <h1 className="w-fit text-lg">Buy Now</h1>
        <Card size="28" color="var(--primary-clr-2)"/>
      </div>
    </div>
  )
}

const Finalize = () => {

  const [Amnt, setAmount] = useState(0);
  const [TPrice, setPrice] = useState(Amnt * 5);
  const [wish, setWish] = useState(false);

  useEffect(() => { setPrice(Amnt * 5) }, [Amnt]);

  const setWishHandler = () => setWish(prev => !prev);
  const IncreaseAmount = () => setAmount(prev => prev + 1);
  const DecreaseAmount = () => { if (Amnt != 0) setAmount(prev => prev - 1); }

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[2fr_1fr]">
      <TotalPrice TPrice={TPrice} />
      <Discount />
      <div className="flex gap-3">
        <Amount decreaseHandler={DecreaseAmount} increaseHandler={IncreaseAmount} amnt={Amnt} />
        <Favorite wish={wish} handler={setWishHandler} />
      </div>
      <BuyNow />
    </div>
  )
}

export default Finalize
