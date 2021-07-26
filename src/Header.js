import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <Container>
         <HeaderLogo>
             <Link to="/">
             <img src={"https://www.michael-jeter.com/amazon_PNG11.png"}/>
             </Link>
         </HeaderLogo>

         <HeaderOptionAdress>
             <LocationOnIcon/>
             <HeaderOption>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select your address</OptionLineTwo>
             </HeaderOption>
         </HeaderOptionAdress>
         <HeaderSearch>
             <SearchInput type="text" />
             <HeaderSearchIcon>
                <SearchIcon />
            </HeaderSearchIcon>
         </HeaderSearch>
         <HeaderNavItems>
             <HeaderOption>
                 <OptionLineOne>Hello Mike</OptionLineOne>
                 <OptionLineTwo>Account & List</OptionLineTwo>
             </HeaderOption>
             <HeaderOption>
                 <OptionLineOne>Returns</OptionLineOne>
                 <OptionLineTwo>& Options</OptionLineTwo>
             </HeaderOption>
             <HeaderOptionCart>
                 < Link to = "/Cart" >
                <ShoppingBasketIcon />
                <CartCount>5</CartCount>
                </Link>
             </HeaderOptionCart>
             
             
         </HeaderNavItems>
      </Container>
        
    )
}

export default Header;

const Container = styled.div`
height: 60 px;
background-color: #0f1111;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
`
const HeaderLogo = styled.div`
   img {
       width: 100px;
       margin-left: 11px;
   }

`

const HeaderOptionAdress = styled.div`
padding-left: 10px;
display: flex;
align-items: center;
`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
font-weight: 700;
`

const HeaderSearch = styled.div`
display: flex;
flex-grow: 1;
height: 40px;
border-radius: 5px;
overflow: hidden;
margin-left: 4px;
background-color: white;
:focus-within {
    box-shadow: 0 0 0 3px #F90;
}
`

const SearchInput = styled.input`
flex-grow: 1;
border: 0;
:focus {
    outline: none;
}
`

const HeaderSearchIcon = styled.div`
background-color: #febd69;
width: 45px;
color: black;
display: flex;
justify-content: center;
align-items: center;
`

const HeaderNavItems = styled.div`
display: flex;
`

const HeaderOption = styled.div`
padding: 10px 9px 10px 9px;
`

const HeaderOptionCart = styled.div`
display: flex;
align-items: center;
padding-right: 10px;
padding-left: 10px;
display: flex;
a {
    display: flex;
    align-items: center;
    padding-right: 10px;
    color: white;
    text-decoration: none;
}
`

const CartCount = styled.div`
padding-right: 10px;
`
