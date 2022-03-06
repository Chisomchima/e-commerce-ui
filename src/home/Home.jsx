
import React from 'react';
import { Anouncement } from '../components/Anouncement';
import { Navbar } from '../components/Navbar';
import { Slider } from '../components/Slider';
import { Categories } from '../components/Categories';
import { Products } from '../components/Products';
import { NewsLetter } from '../components/NewsLetter';
import { Footer } from '../components/Footer';



export const Home = () => {
    return (
        <div>
            <Anouncement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    )
}
