import { styled } from 'styled-components';

// Component Imports
import Image from './Image';

import Header from './Header';
import CountrySelection from './CountrySelection';
import Features from './Features';
import Controls from './Controls';

const StyledProductReviewCard = styled.div(({}) => `
background-color: black;
padding: 2rem;
border-radius: 10px;
display: flex;
gap: 1rem;

@media only screen AND (max-width: 480px) {
    flex-direction: column;
    padding: 1rem;
}
`);

const Content = styled.div(({}) => `
display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem;
background-color: rgb(34, 34, 46, 0.5);
border-radius: 10px;
@media only screen AND (max-width: 480px) {
    padding: 1rem;
}
`)

const ProductReviewCard = () => {
    return (
        <StyledProductReviewCard>
            <Image />
            <Content>
                <Header />
                <CountrySelection />
                <Features />
                <Controls />
            </Content>

        </StyledProductReviewCard>
    )
}

export default ProductReviewCard
