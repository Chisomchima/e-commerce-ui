import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 20px;
    background-color: white;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
`

export const Anouncement = () => {
    return (
        <Container>
            Hottest deals! free delivery for purchase of over 5 items!!!
        </Container>
    )
    }
