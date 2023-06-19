import React from 'react';
import Slide from '../components/Slide'
import ProductDetail from './Products/ProductDetail';
const Home = () =>{
    return(
        <div className='home'>
            <Slide/>
            <ProductDetail />
        </div>
    )
};

export default Home;