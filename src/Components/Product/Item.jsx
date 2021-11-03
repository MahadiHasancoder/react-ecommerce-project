import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Context } from '../../Context';

const Item = ({item, ClassName}) => { 
    const [popup, setpopup] = useState(false)
    const [number, setnumber] = useState()

    const AllProductData = useContext(Context)

    const {id,img,name,prize,r_start,count} = item

    let namerex = name.replace(/[,+\-+\–+ ]/ig, "-")
    const StarIcon = (r_start) => {
        const resut = r_start.reduce((avarage,item) => avarage + item, 0);
        return  Math.floor(resut / r_start.length * 10) / 10;
    }
    const pupUPIem = (id) =>{
        setpopup(true)
        const itemfilter = AllProductData.filter(item => item.id === id)
        setnumber(itemfilter)
    }

    const pupdownIem = () => {
        setpopup(false)
        setnumber()
    }

    return (
        <>
            {/* single Product */}
            <div className={`mb-4 px-2 py-6 shadow group ${(ClassName === 'gridTwo') ? 'flex items-end justify-between' : '' }`}>
                <div className={` relative h-64 rounded-lg overflow-hidden ${(ClassName === 'gridTwo') ? 'w-1/2' : 'w-full' }`}>
                    <button onClick={ () => pupUPIem(id) }>
                        <img className="w-full h-full object-cover" src={img[0]} />
                    </button>
                    <div className=" absolute top-0 right-0 hidden group-hover:block transition">
                        <button className="p-1 mx-1 rounded-lg text-primary bg-white border border-primary" onClick={ () => pupUPIem(id) }>
                            <LocationSearchingIcon />
                        </button>
                        <button className="p-1 mx-1 rounded-lg text-primary bg-white border border-primary">
                            <FavoriteIcon />
                        </button>
                    </div>
                </div>
                <div className={`${(ClassName === 'gridTwo') ? 'w-1/2' : 'w-full' }`}>
                    <div>
                        <Link to={`./shop/singleProduct/${namerex}/${id}`}>
                            <h3 className="text-1xl hover:text-primary capitalize transition"> {name.substring(0,45)}... </h3>
                        </Link>
                        <div className="flex items-baseline mt-2 space-x-2 ">
                            <p className="text-xl text-primary font-semibold">${prize.new}</p>
                            <p className="text-sm text-gray-400 line-through">${prize.old}</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="flex gap-1 text-sm text-yellow-400">

                                {
                                    StarIcon(r_start)
                                }

                            </div>
                            <div className="text-sm text-gray-500 ml-3"> ({ count }) </div>
                        </div>
                    </div>
                    <div>
                    <Link to="/" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                            Add to cart
                    </Link>
                </div>
                </div>
                
            </div>
            {/* single Product */}
            
            
            {
                popup && 
                <div className="fixed inset-0 bg-gray-700 flex items-center justify-center z-40">
                        <button className="text-white" onClick={ () => pupdownIem() }>
                            <CloseIcon />
                        </button>
                    <div className="flex items-center justify-start gap-6 bg-white py-10 w-3/4 rounded-md border relative">
                        <div className="w-1/3 text-center p-7">
                            <img className="w-full" src={number[0].img[0]} />
                        </div>
                        <div className="w-2/3 px-7 text-gray-500 mt-10">
                            <div>

                                <div className="flex items-end justify-between">
                                    
                                    <h2 className="font-semibold text-primary text-4xl">{number[0].name}</h2>
                                    
                                    {                                                                         
                                       ( Number(number[0].count) <= 0 ) ?  ( <p className=" text-red-600 font-bold bg-red-200 px-4 py-1 rounded text-center block w-36"> 
                                                stock-out
                                            </p>):(<p className=" text-green-600 font-bold bg-green-200 px-4 py-1 rounded text-center inline"> 
                                                stock
                                            </p>) 
                                    }
                                </div>
                                
                                <div>
                                    <small>(
                                        <span className="mx-1 text-yellow-500">
                                            {
                                                StarIcon(number[0].r_start) 
                                            } 
                                        </span>
                                            
                                         <span>reviews</span>)
                                    </small> 
                                    
                                </div>
                                <div className="my-3 flex justify-start items-end gap-3">
                                    <h3 className="text-5xl font-bold text-primary"> ${number[0].prize.new} </h3>
                                    <h3 className="text-2xl font-bold line-through"> ${number[0].prize.old} </h3>
                                </div>
                                <p>{number[0].shortDetails}</p>
                                <button className="text-primary "> See more... </button>
                                <div className="my-3 flex items-center gap-4">
                                    
                                    <div className="w-full text-right">
                                        <Link to="/" className="px-6 py-3 bg-primary text-white rounded">
                                            <AddShoppingCartIcon />  Add to cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            

        </>
    )
}

export default Item
