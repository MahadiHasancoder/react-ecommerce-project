import { Link } from "react-router-dom"
import React from 'react'

const Footer = () => {
    return (
        <div className="container border-t mb-4 mt-30">
            <div className="my-12 grid grid-cols-4 gap-7 border-b pb-10">
                <div>
                    <h4 className="text-2xl text-gray-800 my-4 capitalize">Categories</h4>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Shop </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma" > Pan </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> T-shart </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Shop </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma" > Pan </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> T-shart </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Programming & Tech </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> sitemap </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Video & animation </Link>
                </div>
                <div>
                    <h4 className="text-2xl text-gray-800 my-4 capitalize">about</h4>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Shop </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Shop </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma" > Pan </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> T-shart </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Programming & Tech </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> sitemap </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Video & animation </Link>
                </div>
                <div>
                    <h4 className="text-2xl text-gray-800 my-4 capitalize">Community</h4>
                   
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma" > Pan </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> T-shart </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Programming & Tech </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> sitemap </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Video & animation </Link>
                </div>
                <div>
                    <h4 className="text-2xl text-gray-800 my-4 capitalize">Support</h4>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Shop </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma" > Pan </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> T-shart </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Shop </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma" > Pan </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> T-shart </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Programming & Tech </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> sitemap </Link>
                    <Link to="/" className="capitalize block text-gray-700 mt-1 hover:text-red-500 font-tahoma"> Video & animation </Link>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-semibold text-red-600">MAHADI SHOP</h1>
                {/* <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg" /> */}
            </div>
            <div className="flex items-center justify-between">
                <small className="text-gray-600">© 2021, Nest - React Ecommerce Template
                            All rights reserved</small>
                <a className="text-primary" href="https://www.linkedin.com/in/md-mahadi-hasan-a06b5b210/" target="_blank">@MAHADI</a>
            </div>
        </div>
    )
}

export default Footer
