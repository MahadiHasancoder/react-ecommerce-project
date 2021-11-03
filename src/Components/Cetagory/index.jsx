import React from 'react'
import { Link } from 'react-router-dom';

const Cetagory = () => {
    return (
        <div className="container py-16">
            <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6"> Shop by Category</h2>
            <div className="grid grid-cols-3 gap-3">
                {/* single */}
                    <Link to="/" className="row-start-1 row-end-3">
                        <div className="relative rounded-lg overflow-hidden group h-full shadow-md">
                            <img className="w-full h-full" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-11.png" />
                            <div className="absolute bottom-4 left-6">
                                <p className="font-bold text-2xl">Everyday Fresh & <br />  Clean with Our Products</p>
                                <Link to="/" className="bg-primary py-2 px-6 rounded text-gray-100 mt-4 hover:bg-transparent hover:text-primary border border-primary transition inline-block">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </Link>
                {/* single */}
                {/* single */}
                    <Link to="/">
                        <div className="relative rounded-lg overflow-hidden group h-full shadow-md">
                            <img className="w-full h-full" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png" />
                            <div className="absolute bottom-4 left-6">
                                <p className="font-bold text-2xl">Make your Breakfast <br /> Healthy and Easy</p>
                                <Link to="/" className="bg-primary py-2 px-6 rounded text-gray-100 mt-4 hover:bg-transparent hover:text-primary border border-primary transition inline-block">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </Link>
                {/* single */}
                {/* single */}
                    <Link to="/">
                        <div className="relative overflow-hidden group rounded-lg h-full shadow-md col-end-2">
                            <img className="w-full h-full" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png" />
                            <div className="absolute bottom-4 left-6">
                                <p className="font-bold text-2xl">The best Organic <br /> Products Online</p>
                                <Link to="/" className="bg-primary py-2 px-6 rounded text-gray-100 mt-4 hover:bg-transparent hover:text-primary border border-primary transition inline-block">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </Link>
                {/* single */}
                {/* single */}
                    <Link to="/">
                        <div className="relative overflow-hidden group rounded-lg h-full shadow-md col-end-2">
                            <img className="w-full h-full" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png" />
                            <div className="absolute bottom-4 left-6">
                                <p className="font-bold text-2xl">The best Organic <br /> Products Online</p>
                                <Link to="/" className="bg-primary py-2 px-6 rounded text-gray-100 mt-4 hover:bg-transparent hover:text-primary border border-primary transition inline-block">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </Link>
                {/* single */}
                {/* single */}
                    <Link to="/">
                        <div className="relative overflow-hidden group rounded-lg h-full shadow-md col-end-2">
                            <img className="w-full h-full" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png" />
                            <div className="absolute bottom-4 left-6">
                                <p className="font-bold text-2xl">The best Organic <br /> Products Online</p>
                                <Link to="/" className="bg-primary py-2 px-6 rounded  text-gray-100 mt-4 hover:bg-transparent hover:text-primary border border-primary transition inline-block">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </Link>
                {/* single */}
            </div>
           
        </div>
    )
}

export default Cetagory;
