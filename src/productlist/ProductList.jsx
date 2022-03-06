import React from 'react'
import styled from "styled-components";
import { Navbar } from '../components/Navbar';
import { Anouncement } from '../components/Anouncement';
import { Products } from '../components/Products';
import { NewsLetter } from '../components/NewsLetter';
import { Footer } from '../components/Footer';


const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const Filter = styled.div`
    margin: 20px;
`
const FilterText =styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    PADDING: 10px;
    margin-right: 20px
`

const Option = styled.option`

`



export const ProductList = () => {
    return (
        <Container>
            <Anouncement />
            <Navbar />
            <div style = {{backgroundColor:"#fcf1ed"}}>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disable selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disable selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price</Option>
                </Select>
                </Filter>
            </FilterContainer>
            </div>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}
