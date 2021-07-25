import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
      <Container>
         <HeaderLogo>
             <img src={"https://www.michael-jeter.com/amazon_PNG11.png"}/>
         </HeaderLogo>
         <HeaderOptionAdress>
             <OptionLineOne>Hello</OptionLineOne>
             <OptionLineTwo>Select your address</OptionLineTwo>

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
                 <ShoppingBasketIcon />
                 <CartCount>5</CartCount>

             </HeaderOptionCart>
         </HeaderNavItems>
      </Container>
        
    )
}

export default Header

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
`

const SearchInput = styled.input`
flex-grow: 1;
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

`

const CartCount = styled.div`

`
