import { styled } from 'styled-components';

import { Global, Calendar1, Calendar2 } from 'iconsax-react';

const StyledFeature = styled.div(({ theme }) => `
  display: flex;
  gap: 0.3rem;
  align-items: center;
  p {
    color: ${theme.colors.primary[0]};
  }
  h1 {
    margin-left: 5px;
  }
`);

const StyledFeatures = styled.div(({}) => `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  column-gap: 1.3rem;
  @media only screen AND (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`);

const Feature = ({ icon, property, value }) => {
  return (
    <StyledFeature>
      {icon}
      <h1>{property}</h1>
      <p>{value}</p>
    </StyledFeature>
  )
}

const Features = () => {

  const Color = '#218D79';
  const Size = '20';
  const Earth = <Global size={Size} color={Color} />;
  const Check = <Calendar1 size={Size} color={Color}  />;
  const Available = <Calendar2 size={Size} color={Color} />;

  return (
    <StyledFeatures>
      <Feature icon={Earth} property="DELIVERY SPEED" value="INSTANT" />
      <Feature icon={Available} property="CURRENTLY" value="IN STOCK" />
      <Feature icon={Check} property="HOW TO ACTIVATE" value="CARD KEY" />
      <Feature icon={Earth} property="CAN ACTIVATE IN" value="EGYPT" />
    </StyledFeatures>
  )
}

export default Features
