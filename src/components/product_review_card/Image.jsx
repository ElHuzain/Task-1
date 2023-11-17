import { styled } from 'styled-components';

const StyledImage = styled.div(() => `
background-color: rgb(34, 34, 46, 0.5);
border-radius: 10px;
text-align: center;
overflow: hidden;
height: 410px;
& > img {
    object-fit: cover;
}
`)

const Image = () => {
    return (
        <StyledImage>
            <img alt='Product Preview' src='https://gamerhash.com/storage/mobile-products/4bUGBv8NJ74sQLvWzF21JDHxdidHsCvlWgu8pYN9.jpeg'  />
        </StyledImage>
    )
}

export default Image
