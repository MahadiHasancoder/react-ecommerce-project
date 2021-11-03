import React, { useState, useContext } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import FilterListIcon from '@mui/icons-material/FilterList';
import Item from './Item';
import { Context } from '../../Context';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';


const Product = ({gridCol, title, filter}) => {

    const [ClassName, setClassName] = useState("gridOne")

    const AllProductData = useContext(Context)


    return (
        <>
        <div className="container">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">{title? title : null}</h2>

                {
                    filter && 
                    <div className="flex items-center justify-center gap-4">

                    <div>
                        <button className="px-8 py-1 text-primary rounded border border-primary"> 
                           <FilterListIcon /> Filter
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <button className={`p-1 ${ (ClassName === "gridOne") ? "bg-primary text-white" : "bg-white text-primary"}  rounded border border-primary`} onClick={()=>setClassName("gridOne")}> <GridViewIcon /> </button>
                        <button className={`p-1 ${ (ClassName === "gridTwo") ? "bg-primary text-white" : "bg-white text-primary"}  rounded border border-primary`} onClick={()=>setClassName("gridTwo")}> <FormatListBulletedIcon /> </button>
                    </div>
                   
                </div>
                }
                
            </div>
            <div className={`grid ${(ClassName === "gridTwo") ? `grid-cols-2` : ` ${gridCol ? `grid-cols-${gridCol}` : "grid-cols-4" } ` }  gap-4 items-center justify-center pb-28`}>

                {AllProductData &&
                    AllProductData.map((item, index) => {
                        return <Item key={index} item={item} ClassName={ClassName} />
                    })
                }

            </div>
        </div>

           

        </>
    )
}

export default Product
