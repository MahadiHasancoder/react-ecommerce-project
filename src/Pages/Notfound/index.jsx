import React from 'react'
import Banner from '../../Components/Banner'
import Footer from '../../Components/Footer'
import Navigation from '../../Components/Navigation'

const Notfound = () => {
    return (
        <div>
            <Navigation />
            <Banner h1="404 Pages" p="Data Not Found" img="url('http://wp.alithemes.com/html/nest/demo/assets/imgs/blog/header-bg.png')" />
            <Footer />
        </div>
    )
}

export default Notfound
