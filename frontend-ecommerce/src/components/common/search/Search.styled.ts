import { url } from "inspector";
import styled from "styled-components";
import SearchIcon from '../../../assets/icons/SearchIcon.svg'

interface SearchType { 
    height?: string,
    width?: string,
    icon?: boolean
}

export const SearchStyled = styled.input<SearchType>`
    height: ${({height}) => height ? height : "40px"};
    width: ${({width}) => width ? width : "350px"};
    border: 2px solid ${({theme}) => theme.colors.mainBlue};
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 4px;

    text-indent: 10px;
    font-size: 20px;

    &::placeholder{
        color: ${({theme}) => theme.colors.mainBlue};
        opacity: 1;
    }

    &:focus { 
        outline: none;
        
    }

    background: ${({icon}) => icon ? `${`url(${SearchIcon})`}` : " "} no-repeat;
    background-size: 25px;
    background-position: 96%;

    


`