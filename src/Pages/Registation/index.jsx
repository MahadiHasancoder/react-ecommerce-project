import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div className="w-full h-screen bg-red-300 flex items-center justify-center bg-no-repeat bg-cover bg-right px-2" style={{backgroundImage: 'url(https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg)'}}>
            <div className="md:w-1/3 w-full  bg-white py-14 px-3 rounded-md text-center border shadow-sm">
                <div>
                    <Link to="/">
                        <h1 className="text-4xl font-semibold text-primary">MAHADI SHOP</h1>
                    </Link>
                    <h2 className="text-2xl my-4 uppercase ">Registration</h2>
                    <from>
                        <div className="text-left mt-1">
                            <label className="block text-gray-600 px-2 mt-1 capitalize">user Name :</label>
                            <input type="email" required className="border w-full py-1 px-4 rounded-full focus:outline-none hover:border-primary text-primary" />
                        </div>
                        <div className="text-left mt-1">
                            <label className="block text-gray-600 px-2 mt-1 capitalize">phone :</label>
                            <input type="email" required className="border w-full py-1 px-4 rounded-full focus:outline-none hover:border-primary text-primary" />
                        </div>
                        <div className="text-left mt-1">
                            <label className="block text-gray-600 px-2 mt-1 capitalize">Email :</label>
                            <input type="email" required className="border w-full py-1 px-4 rounded-full focus:outline-none hover:border-primary text-primary" />
                        </div>
                        <div className="text-left mt-1">
                            <label className="block text-gray-600 px-2 mt-1 capitalize">Password :</label>
                            <input type="password" required className="border w-full py-1 px-4 rounded-full focus:outline-none hover:border-primary text-primary" />
                        </div>

                        
                        
                        <div className="text-center my-1 mt-8">
                            <input type="submit" className="border bg-primary text-white w-1/2 px-2 rounded-full focus:outline-none cursor-pointer py-2 hover:border-primary " />
                        </div>
                    </from>
                    <br />
                    <Link to="/login" className="text-gray-600 underline hover:text-primary">already login</Link>
                </div>
            </div>
        </div>
    )
}

export default Registration
