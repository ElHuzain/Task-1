import { styled } from 'styled-components';
import { Flag, ArrowDown2 } from 'iconsax-react';
import { useState } from 'react';

const StyledCountrySelection = styled.div(({ theme }) => `
  border: 1px solid ${theme.colors.primary[0]};
  border-radius: 5px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 1rem;
   & > div {
    margin-left: auto;
   }
   cursor: pointer;
`)

const StyledCountry = styled.div(({ theme }) => `
padding: 1rem 0;
border-bottom: 1px solid ${theme.colors.primary[2]};
`);
const StyledCountryList = styled.div(({ theme }) => `
  background-color: ${theme.colors.primary[1]};
  position: absolute;
  width: 100%;
  right: 0;
  top: 3.3rem;
  padding: 1rem;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
`);

const Country = ({ name, func }) => {
  return <StyledCountry onClick={() => func(name)}>
    <span>{name}</span>
  </StyledCountry>
}

const CountryList = ({ func }) => {
  return (
    <StyledCountryList>
      <Country name="Egypt" func={func} />
      <Country name="United States" func={func} />
      <Country name="Saudi Arabia" func={func} />
      <Country name="PALESTINE" func={func} />
    </StyledCountryList>
  )
}

const CountrySelection = () => {
  const [expanded, setExpanded] = useState(true);
  const [choosenCountry, setCountry] = useState('United States');

  const handleClick = () => setExpanded((prev) => !prev)
  const chooseCountry = (country) => setCountry(country);

  return (
    <StyledCountrySelection onClick={handleClick}>
      <Flag size="20" color="#218D79" />
      <h1>{choosenCountry}</h1>
      <div>
        <ArrowDown2 size="20" color="#218D79" />
      </div>
      {expanded ? <CountryList func={chooseCountry} /> : ''}
    </StyledCountrySelection>
  )
}

export default CountrySelection
