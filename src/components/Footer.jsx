import React from 'react';
import styled from 'styled-components';
import { MdFacebook } from "react-icons/md";
import { MdMailOutline} from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt  } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


const Container = styled.div`
    display: flex;
    background-color: black;
    color: white;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.span`
    color: ${props=>props.direction==="left" ? "white" : "gold" };
    font-size:30px;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;


`

const Center = styled.div`
     flex: 1;
     padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
    color: gold;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;


`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
     flex: 1;
     padding: 20px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const Payment = styled.img`
    height: 50px;
    width:80%
    

`

export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo direction="left">GRAN<Logo>VALOR</Logo></Logo>
                    <Desc>
                        your number one online shopping site in Nigeria. We are an online store where you can purchase 
                        all your electronics, as well as books, home appliances, kiddies items, fashion items for men, women,
                       ntees you the 
                    </Desc>
                    <SocialContainer>
                        <SocialIcon color="385999">
                            <MdFacebook />
                        </SocialIcon>
                        <SocialIcon color="E4405F">
                            <FaInstagram />
                        </SocialIcon>
                        <SocialIcon color="55AcEE">
                            <FaTwitter />
                        </SocialIcon>
                    </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Term</ListItem>
                    <ListItem>Order Tracking</ListItem>
                </List>
            </Center>

            <Right>
            <Title>Contact</Title>
            <ContactItem>
               <FaMapMarkerAlt style={{marginRight:"10px"}}/> No. 9 Dambia Street, Wuse Zone 0. Abuja.
            </ContactItem>
            <ContactItem>
                <FaPhone style={{marginRight:"10px"}}/> +234 567 89012
            </ContactItem>
            <ContactItem>
                <MdMailOutline style={{marginRight:"10px"}}/>contact@123.dev
            </ContactItem>
            <Payment src="/images/payment.png"/>
            </Right>
        </Container>
    )
}
