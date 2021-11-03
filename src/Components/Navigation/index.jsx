import React from 'react'
import { Link, useHistory } from "react-router-dom";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import ThreeGMobiledataRoundedIcon from '@mui/icons-material/ThreeGMobiledataRounded';
import LocalCarWashRoundedIcon from '@mui/icons-material/LocalCarWashRounded';
import DevicesOtherRoundedIcon from '@mui/icons-material/DevicesOtherRounded';

const Navigation = () => {
     const history =useHistory()
    return (
       <>
           
         {/* hrader */}
            <header className="py-2 shadow-sm ">
                <div className="container flex items-center  justify-between">
            {/* logo */}
                    <div className="w-30">
                        <Link to="/">

                            {/* <img className="w-100" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"  /> */}

                            <h1 className="text-4xl font-semibold text-red-600">MAHADI SHOP</h1>
                        </Link>
                    </div>
            {/* logo */}
            {/* Search */}
                    <div className="w-full max-w-xl relative flex ">
                        <span className="absolute left-4 top-3 text-lg text-gray-400">
                            <SearchRoundedIcon  />
                        </span>
                        <input type="text" className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" />
                        <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition" onClick={()=> history.push("/shop")}>Search</button>
                    </div>
            {/* Search */}
            {/* Account */}
                    <div>
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <FavoriteBorderRoundedIcon />
                                </div>
                                <div className="text-xs leading-3">Wish List</div>
                                <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
                            </Link>
                            <Link to="/" className="text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <AddShoppingCartRoundedIcon />
                                </div>
                                <div className="text-xs leading-3">cart</div>
                                <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">13</span>
                            </Link>
                            <Link to="/" className="text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl border rounded-full px-2 pb-2 bg-primary text-white">
                                    <PersonOutlineRoundedIcon />
                                </div>
                            </Link>
                        </div>
                    </div>
            {/* Account */}
                </div>
            </header>
         {/* hrader */}

        {/* // manu */}
            <div className="bg-gray-800">
                <div className="container flex">
                    <div className="bg-primary flex items-center cursor-pointer px-8 py-4 relative group">
                        <span className="text-white">
                            <BallotRoundedIcon />
                        </span>
                        <span className="capitalize ml-2 text-white">All categories</span>

                        <div className="absolute top-full left-0 w-full shadow-md bg-white dividde-y divide-gray-100 divide-deshed hidden group-hover:block z-10 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible ">
                            <Link to="/shop" className="flex items-center px-6 py-3 hover:bg-primary hover:text-white text-gray-600 transition">
                                <HeadsetMicRoundedIcon />
                                <span className="ml-6  text-sm capitalize">Headphone</span>
                            </Link>
                            <Link to="/shop" className="flex items-center px-6 py-3 hover:bg-primary hover:text-white text-gray-600 transition">
                                <ThreeGMobiledataRoundedIcon />
                                <span className="ml-6 text-sm capitalize">Mobile</span>
                            </Link>
                            <Link to="/shop" className="flex items-center px-6 py-3 hover:bg-primary hover:text-white text-gray-600 transition">
                                <LocalCarWashRoundedIcon />
                                <span className="ml-6 text-sm capitalize">Car</span>
                            </Link>
                            <Link to="/shop" className="flex items-center px-6 py-3 hover:bg-primary hover:text-white text-gray-600 transition">
                                <DevicesOtherRoundedIcon />
                                <span className="ml-6 text-sm capitalize">Other Devices</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-grow pl-12">
                        <div className="flex items-center capitalize space-x-6">
                            <Link to="/" className="text-gray-200 hover:text-white transition">
                                Home
                            </Link>
                            <Link to="/shop" className="text-gray-200 hover:text-white transition">
                                Shop
                            </Link>
                            <Link to="/" className="text-gray-200 hover:text-white transition">
                                About us
                            </Link>
                            <Link to="/" className="text-gray-200 hover:text-white transition">
                                Contact us
                            </Link>
                        </div>
                        <div className="flex items-center capitalize space-x-1">
                            <Link to="/login" className="text-gray-200 hover:text-white transition">
                                log in
                            </Link>
                            <p className="text-white">/</p>
                            <Link to="/registration" className="text-gray-200 hover:text-white transition">
                                registration
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        {/* // manu */}
       </>
    )
}

export default Navigation
