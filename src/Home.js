import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';


function Home() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = []

            console.log(snapshot);
        })
    }

    getProducts();
    return (
        <Container>
           <Banner>
           </Banner>
           <Content>
               <Product />
               <Product />
           </Content> 
        </Container>
    )
}

export default Home

const Container = styled.div`
max-width: 1500px;
margin: 0 auto;
`

const Banner = styled.div`
background-image: url(https: //i.imgur.com/SYHeuYM.jpg);
min-height: 600px;
background-size: cover;
background-position: center;
z-index: 1;
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`

const Content = styled.div`
padding-left: 10px;
padding-right: 10px;
margin-top: -350px;
display: flex;
`
