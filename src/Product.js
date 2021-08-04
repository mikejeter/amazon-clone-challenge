import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
        <Container>
           <Title>
               2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation) 
           </Title>
           <Price>
               $1299.00
           </Price>
           <Rating>
            ⭐⭐⭐⭐⭐
           </Rating>
           <Image src ="https://michael-jeter.com/apple_mxau2ll_a_12_9_ipad_pro_early_1553829.jpg" />
           <ActionSection>
             <AddToCartButton>
              Add to Cart
             </AddToCartButton>
           </ActionSection>
            
        </Container>
    )
}

export default Product

const Container = styled.div`
background-color: white;
z-index: 100;
flex: 1;
padding: 20px;
margin: 20px;
height: 300px;
max-height: 400px;
display: flex;
flex-direction: column;
`

const Title = styled.span`

`

const Price = styled.span`
font-weight: 500;
margin-top: 3px;
`

const Rating = styled.div`

`

const Image = styled.img`
max-height: 200px;
object-fit: contain;
`

const AddToCartButton = styled.button`
width: 100px;
height: 30px;
background-color: #f0c14b;
border: 2px solid #a88734;
border-radius: 5px;
`

const ActionSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`
