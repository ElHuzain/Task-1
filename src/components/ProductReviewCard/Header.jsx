import { useState } from 'react'
import { Heart } from 'iconsax-react'

const Header = () => {
  const [fav, setFav] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-bold">Steam Gift Card (USD)</h1>
      <div onClick={() => setFav(prev => !prev)} className="hover:opacity-70 cursor-pointer p-2 bg-secondary-clr-3 rounded-md">
        <Heart variant={fav ? 'Bold' : ''} size="28" color="var(--primary-clr-2)" />
      </div>
    </div>
  )
}

export default Header
