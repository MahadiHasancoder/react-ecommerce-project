import React from 'react';
import { useHistory } from 'react-router';
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import ProductFilter from '../../Components/ProductFilter.jsx';


const Home = () => {

    const history = useHistory()

    const goBack = () => history.goBack()

    return (
        <>
            <Navigation />
            <Banner img="url('http://wp.alithemes.com/html/nest/demo/assets/imgs/blog/header-bg.png')" h1="Shop" style={{center:'text-left'}} goBack={goBack}/>
            <ProductFilter />
            <Footer />
        </>
    )
}

export default Home
