import React from 'react';
import Banner from '../../Components/Banner';
import Cetagory from '../../Components/Cetagory';
import Feature from '../../Components/Feature';
import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation'
import Product from '../../Components/Product';
import SliderProduct from '../../Components/SliderProduct';


const Home = () => {
    return (
        <>
            <Navigation />
            <Banner img="url('https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-7.jpg')" h1={<>Best colection for {<br />} home decoration</>} p="Lorem ipsum dolor sit amet consectetur adipiscing elit eget arcu maecenas, erat eu laoreet per interdum felis fringilla mi pretium, ligula etiam molestie sem nulla urna semper convallis risus.s" to="/" link="Shop Now" />
            <Feature />
            <Cetagory />
            <Product title="All products"/>
            <Footer />
            {/* <SliderProduct /> */}
        </>
    )
}

export default Home
