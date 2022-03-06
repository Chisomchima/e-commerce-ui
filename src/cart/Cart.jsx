import React from 'react'
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Anouncement } from '../components/Anouncement';
import { Footer } from '../components/Footer';
import { MdAdd, MdRemove } from 'react-icons/md';

const Container = styled.div`
    background-color: #fcf5f5;
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black": "transparent"};
    color: ${props=>props.type==="filled" && "white"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
 text-decoration: underline;
 cursor: pointer;
 margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Product = styled.div`
    display: flex;
    justify-content:space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:20px;
    
   
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};

`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`
const ProductAmountContainer =styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount =styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice =styled.div`
    font-size: 30px;
    font-weight: 200;
    
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    padding: 20px;
    border-radius: 10px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weght: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "25px"};
`
const SummaryText = styled.div`

`
const SummaryPrice = styled.div`

`
const Button = styled.div`
    width: 100%;
    padding: 10px;
    background-color: black;
    font-weight: 600;
    color: white;
    
`


export const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Anouncement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart</TopText>
                        <TopText>Wish List</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="/images/girlhat.png" />
                                <Details>
                                    <ProductName><b>Product:</b>CHIMA TECH HAT</ProductName>
                                    <ProductId><b>ID:</b>12345678</ProductId>
                                    <ProductColor color="yellow"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <MdAdd />
                                    <ProductAmount>2</ProductAmount>
                                    <MdRemove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="/images/jacket.png" />
                                <Details>
                                    <ProductName><b>Product:</b>CHIMA TECH jacket</ProductName>
                                    <ProductId><b>ID:</b>12345678</ProductId>
                                    <ProductColor color="blue"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <MdAdd />
                                    <ProductAmount>2</ProductAmount>
                                    <MdRemove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryText>subtotal</SummaryText>
                            <SummaryPrice>$ 80</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Estimated shipping</SummaryText>
                            <SummaryPrice>$ 5.90</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Shipping Discount</SummaryText>
                            <SummaryPrice>$ -5.90</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem type= "total" >
                            <SummaryText>Total</SummaryText>
                            <SummaryPrice>$ 80</SummaryPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
