import React from 'react'
import { Link } from 'react-router-dom'

const Forgetpage = () => {
    return (
        <div className="w-full h-screen bg-red-300 flex items-center justify-center bg-no-repeat bg-cover bg-right" style={{backgroundImage: 'url(https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg)'}}>
            <div className="w-1/3 bg-white py-14 px-3 rounded-md text-center border shadow-sm">
                <div>
                    <Link to="/">
                        <h1 className="text-4xl font-semibold text-primary">MAHADI SHOP</h1>
                    </Link>
                    <h2 className="text-2xl my-4 uppercase ">forgot password</h2>
                    <from>
                        <div className="text-left my-1">
                            <label className="block text-gray-600 px-2 mt-4">Email :</label>
                            <input type="email" required className="border w-full py-2 text-primary hover:border-primary px-4 rounded-full focus:outline-none text-sm" />
                        </div>
                        
                        <div className="text-center my-1 mt-8">
                            <input type="submit" value="Send" className="border bg-primary text-white w-1/2 px-2 rounded-full focus:outline-none cursor-pointer py-2 hover:border-primary" />
                        </div>
                        <small className="text-gray-500">
                        Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                        </small>
                    </from>
                    <br />
                    <Link to="/login" className="text-gray-600 underline hover:text-primary">already login</Link>
                </div>
            </div>
        </div>
    )
}

export default Forgetpage
