import React from 'react'
import SelectInput from '../ui/SelectInput'

import { Flag, Money3 } from 'iconsax-react'

const SelectionInputs = () => {
  return (
    <div className="flex flex-col gap-4">
      <SelectInput Icon={<Flag />} defaultValue="United States" list={['United States', 'Egypt', 'Palestine']} />
      <SelectInput Icon={<Money3 />} defaultValue="USD" list={['USD', 'EGP', 'SAR']}/>
    </div>
  )
}

export default SelectionInputs
