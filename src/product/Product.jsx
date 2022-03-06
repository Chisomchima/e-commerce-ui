import React from 'react'
import styled from "styled-components";
import { Navbar } from '../components/Navbar';
import { Anouncement } from '../components/Anouncement';
import { Products } from '../components/Products';
import { NewsLetter } from '../components/NewsLetter';
import { Footer } from '../components/Footer';
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display:flex;
`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;

`
const Desc = styled.p`
    margin: 20px 0px;

`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content:space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    width:50%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const AmountContainer = styled.div`
    font-weight: 700;
    display: flex;
    align-items: center;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
    }
`


export const Product = () => {
    return (
        <Container>
            <Anouncement />
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="/images/yellowskirt.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>FLORAL SKIRT</Title>
                    <Desc>
                        your number one online shopping site in Nigeria. We are an online store where you can purchase 
                         all your electronics, as well as books, home appliances, kiddies items, fashion items for men, women,
                         ntees you the
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="orange" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="red" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <MdRemove />
                                    <Amount>1</Amount>
                                <MdAdd/>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}
