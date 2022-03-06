import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom: 0;
  margin: auto;
  left: ${props=>props.direction==="left"&&"10px"};
  right: ${props=>props.direction==="right"&&"10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    &:hover {
    background-color: gold;
  }
`

const Wrapper = styled.div`
   height: 100%;
   display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;

`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 95%;
    margin-left: 200px;

`

const InfoContainer = styled.div`
   flex: 1;
   padding: 50px;
    
`

const Title = styled.h1`
    font-size: 70px;

`

const Desc = styled.p`
   margin: 50px 0;
    font-size: 20px;
    font-weigh: 500;
    letter-spacing: 3px;

`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    &:hover {
    background-color: gold;
  }
`

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if (direction==='left'){
            setSlideIndex(slideIndex > 0? slideIndex - 1 : 0);
        } else {
            setSlideIndex(slideIndex <2 ? slideIndex + 1 : 2);
        }
    };

    return (
        <Container>
            <Arrow direction = "left" onClick={()=>handleClick('left')}>
                <MdArrowLeft  />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg}>
                    <ImageContainer>
                        <Image src={item.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc} </Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick('right')}>
                <MdArrowRight  style= {{margin: "auto"}}/>
            </Arrow>
        </Container>
    )
}
