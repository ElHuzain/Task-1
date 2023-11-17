import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { Card, DollarCircle, Add, Minus, HomeHashtag } from 'iconsax-react';

const StyledControls = styled.div(({ }) => `
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  @media only screen AND (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`);

const StyledTotalPrice = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${theme.colors.primary[0]};
  padding: 0.5rem;
  border-radius: 5px;
  span {
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
`)

const StyledDiscount = styled.div(({ theme }) => `
background-color: ${theme.colors.primary[0]};
padding: 0.5rem;
align-items: center;
display: flex;
text-align: center;
border-radius: 5px;
& > span {
  width: 100%;
  text-align: center;
  span {
    font-weight: bold;
  }
}
`)

const ButtonDefaults = `
display: flex;
align-items: center;
text-align: center;
border-radius: 5px;
&:hover {
  opacity: 0.7;
}
cursor: pointer;
display: flex;
`

const StyledBuyNow = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0;
  ${ButtonDefaults}
  padding: 0.5rem;
  background-color: ${theme.colors.primary[1]};
  border-radius: 5px;
  & > * {
    margin-right: auto;
  }
  span {
    margin-left: auto;
  }
  `)

const StyledAmount = styled.div(({ theme }) => `
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem;
width: 100%;
border-radius: 5px;
& > div {
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}
background-color: ${theme.colors.primary[1]};
`)

const StyledFavorite = styled.div(({ theme }) => `
padding: 1rem;
${ButtonDefaults}
border-radius: 5px;
width: fit-content;
background-color: ${theme.colors.primary[1]};
`)

const Flex = styled.div`
display: flex; gap: 1rem;
`

const Controls = () => {
  const [Amount, SetAmount] = useState(0);
  const [Total, SetTotal] = useState(5 * Amount);
  useEffect(() => { SetTotal(Amount * 5) }, [Amount])
  const IncreaseAmount = () => SetAmount((prev) => prev + 1);
  const DecreaseAmount = () => Amount > 0 ? SetAmount((prev) => prev - 1) : '';

  return (
    <StyledControls>
      <StyledTotalPrice>
        <DollarCircle size="32" color="#218D79" />
        <span>{Total}</span>
      </StyledTotalPrice>
      <StyledDiscount>
        <span>Saved <span>$12</span> (38%)</span>
      </StyledDiscount>
      <Flex>
        <StyledAmount>
          <div onClick={IncreaseAmount}>
            <Add size="32" color="#218D79" />
          </div>
          <span>{Amount}</span>
          <div onClick={DecreaseAmount}>
            <Minus size="32" color="#218D79" />
          </div>
        </StyledAmount>
        <StyledFavorite>
          <HomeHashtag size="24" color="#218D79" />
        </StyledFavorite>
      </Flex>
      <StyledBuyNow>
        <span>Buy Now</span>
        <Card size="32" color="#218D79" />
      </StyledBuyNow>
    </StyledControls>
  )
}

export default Controls
