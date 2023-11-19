import { ArrowDown2 } from "iconsax-react"
import { useState } from 'react';

const Option = ({ value, func }) => {
  return (
    <div onClick={() => func(value)} className="p-4 hover:bg-secondary-clr-1 cursor-pointer rounded-md border-black">{value}</div>
  )
}

const SelectInput = ({ defaultValue, Icon, list }) => {
  const [Expanded, setExpanded] = useState(false);
  const [choosenValue, setValue] = useState(defaultValue);

  const toggleExpanded = () => setExpanded(prev => !prev);
  const setValueHandler = (value) => { toggleExpanded(); setValue(value) };

  const ListOfOptions = list.map((elm, index) => <Option key={index} func={setValueHandler} value={elm} />)

  return (
    <div className="relative">
      <div onClick={toggleExpanded} className="flex cursor-pointer p-2 px-4 items-center rounded-md border-2 border-primary-clr-2">
        {Icon}
        <h1 className="ml-4">{choosenValue}</h1>
        <ArrowDown2 className="ml-auto" size="28" color="var(--primary-clr-2)" />
      </div>
      {
        Expanded && <div className="flex z-10 flex-col w-full p-4 rounded-md bg-secondary-clr-3 absolute top-14">
          {ListOfOptions}
        </div>
      }
    </div>
  )
}

export default SelectInput
