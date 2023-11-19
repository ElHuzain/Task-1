import React from 'react'

import { Global } from 'iconsax-react'

const Feature = ({ icon, property, value }) => {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      <h1>{property}</h1>
      <p className="font-bold text-primary-clr-2">{value}</p>
    </div>
  )
}

const Features = () => {

  const Color = "var(--primary-clr-2)";
  const Size = 24;

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      <Feature icon={<Global size={Size} color={Color} />} property="DELIVERY SPEED" value="INSTANT" />
      <Feature icon={<Global size={Size} color={Color} />} property="CAN ACTIVATE IN" value="EGYPT" />
      <Feature icon={<Global size={Size} color={Color} />} property="CURRENTLY" value="IN STOCK" />
      <Feature icon={<Global size={Size} color={Color} />} property="HOW TO ACTIVATE" value="CARD KEY" />
    </div>
  )
}

export default Features
