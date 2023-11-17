import { styled } from 'styled-components';
import { Heart } from 'iconsax-react';
import { useState } from 'react';

const StyledHeader = styled.div(() => `
display: flex;
justify-content: space-between;  

h1 {
    font-size: 24px;
    font-weight: bold;
  }
  & > div {
    cursor: pointer;
  }
`);

const Header = () => {
  const [fav, setFav] = useState(false);

  return (
    <StyledHeader>
      <h1>Steam Gift Card</h1>
      <div onClick={() => setFav((prev) => !prev)}>
        <Heart size="26" color="#218D79" variant={fav && 'Bold'} />
      </div>
    </StyledHeader>
  )
}

export default Header