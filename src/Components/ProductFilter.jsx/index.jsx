import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import Product from '../Product'

const ProductFilter = () => {


    return (
        <div className="container">
            <div className="flex items-start justify-center gap-6 my-6">
                {/* <div className="w-1/4 p-4 border-b pb-8 shadow"> 
                    
                        <h4 className="text-2xl font-medium text-gray-700 mt-8 mb-3 uppercase">Catagories</h4>
                        <div className="border-b pb-8">
                          
                                <div  className="flex items-center justify-between">
                                    <div>
                                        <input type="checkbox" class=" bg-primary rounded-full" id="Shart"/>
                                        <label className="capitalize inline-block pl-2 text-gray-800" for="Shart"> hello </label>
                                    </div>
                                    <p className="text-primary font-bold text-sm border border-primary rounded px-2">50</p>
                                </div>
                            
                        </div>
                    

                    <h4 className="text-2xl font-medium text-gray-700 mt-8 mb-3 uppercase">Bands</h4>
                        <div className="border-b pb-8">
                         
                                <div className="flex items-center justify-between">
                                    <div>
                                        <input type="checkbox" class=" bg-primary rounded-full" id="aws"/>
                                        <label className="capitalize inline-block pl-2 text-gray-800" for="aws">aws</label>
                                    </div>
                                    <p className="text-primary font-bold text-sm border border-primary rounded px-2">50</p>
                                </div>
                           
                                <div className="flex items-center justify-between">
                                    <div>
                                        <input type="checkbox" class=" bg-primary rounded-full" id="Poma"/>
                                        <label className="capitalize inline-block pl-2 text-gray-800" for="Poma">Poma</label>
                                    </div>
                                    <p className="text-primary font-bold text-sm border border-primary rounded px-2">50</p>
                                </div>
                           
                        </div>
                    
                        <h4 className="text-2xl font-medium text-gray-700 mt-8 mb-3 uppercase">prize</h4>
                        <div className="flex justify-between w-full">
                            <input type="number" className="border border-primary w-1/3 rounded focus:outline-none p-1" placeholder="min" />
                            <p>-</p>
                            <input type="number" className="border border-primary w-1/3 rounded focus:outline-none p-1" placeholder="max" />
                        </div>
                    
                </div> */}
                <div className="w-4/4 py-4"> 
                    <div>
                        <Product gridCol="4" title="products" filter="true" /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter
