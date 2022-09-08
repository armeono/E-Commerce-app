import styled from "styled-components";

export const ItemCardStyled = styled.div`
    height: 400px;
    width: 32%;
    border: 1px solid red;
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 4px;
    box-shadow: 1px 3px 15px rgba(0,0,0, 0.1);
`

export const CardImage = styled.img`
    
`