import React from 'react';
import styled from 'styled-components';
import { MdSearch } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { mobile } from '../responsive';


const Container = styled.div`
    height: 80px;
    background-color: black;
    color: white;
    ${mobile({height:'50px'})};
`

const Wrapper = styled.div`
    padding: 20px 20px 10px 20px;
    display: flex;

    justify-content: space-between;
    ${mobile({padding:'10px 0px'})};
`
const Left =styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})};
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({display:"none"})};
`

const Input = styled.input`
    border: none;
    ${mobile({width:'50px'})};
`

const Center =styled.div` 
    flex: 1;
    text-align: center;
`
const Logo = styled.span`
    font-size: 32px;
    color: ${props=>props.direction==="left" ? "white" : "gold" };
    ${mobile({fontSize:'24px'})};
`

const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent:'center'})};
`

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:'12px', marginLeft: '10px'})};
    &:hover {
    color: gold;
  }

`

export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder="search"/>
                            <MdSearch style={{color:'grey', fontSize:'16px'}}/>
                        </SearchContainer>
                </Left>
                <Center>
                    <Logo direction="left">GRAN</Logo><Logo>VALOR</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <MdOutlineShoppingCart style={{color:'gold', fontSize:'16px'}}/>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
