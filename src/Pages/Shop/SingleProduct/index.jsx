import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../../Components/Footer'
import Navigation from '../../../Components/Navigation'
import StarRateIcon from '@mui/icons-material/StarRate';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useParams, Redirect } from 'react-router-dom';
import Product from '../../../Components/Product';
import { Context } from '../../../Context';




const SingleProduct = () => {
    const context = useContext(Context)
    const [morepdes, setmorepdes] = useState(null)
    const [morepdesres, setmorepdesres] = useState(0)
    const param = useParams()

    // product filtering
    const pageFalse = context.filter(item => {
        const {id} = item
        return id === param.id

    })

    // review function
    const StarIcon = (reviews) => {
        const resut = reviews.reduce((avarage,item) => avarage + item, 0);
        return Math.floor(resut / reviews.length * 10) / 10;
        // if(point = 1){
        //     return  <StarRateIcon />
        // }
    }

    // more_details Description, Additional ,Reviews
    const detailsFiltering = ( morepdesres) => {
        if(morepdesres === 0){
            return (
                <>
                    <h2 className="text-2xl border-b my-2 py-3"> Description</h2>
                    {
                        morepdes[0].btn_detail.map((item,index) => {

                        if(item.includes('</b>')) {
                            return <p key={index} className="my-4" >
                                <b>{item.replace(/[<b> + </b>]/gi, '')}</b>
                            </p> 
                        }
                        return(
                            <p key={index} className="my-4" > {item}</p>
                        )
                        })
                    }
                </>
             )
        }
        if(morepdesres === 1){
            return (
            <>
                    <h2 className="text-2xl border-b mt-2 mb-7 py-3 "> Additional</h2>
                {
                    morepdes[1].btn_detail.map((item,index) => {
                    return(
                        <>
                            <p key={index} className="flex items-center justify-around">
                            <span className="border w-full px-4 py-2">{item.additional_title}</span>
                            <span className="border w-full px-4 py-2">{item.additional_value}</span>
                            </p>
                        </>
                    )
                })
                }
            </>
            )
        }
        if(morepdesres === 2){
            return (
            <>
                    <h2 className="text-2xl border-b mt-2 mb-7 py-3 "> Reviews</h2>
                {
                    morepdes[2].btn_detail.map((item,index) => {
                    return(
                        <>
                            <div key={index} className="flex items-start gap-4 p-4 border-b group">
                                <div className="w-16">
                                    <img className="w-full" src={item.img} />
                                </div>
                                <div> 
                                    <p className="font-bold text-gray-900 group-hover:text-gray-500">{item.name}  </p>
                                    <small> {item.date} </small>
                                    <p> {item.comments} </p>
                                </div>
                            </div>

                        </>
                        )
                    })
                }

                <div className="my-10">
                    <h2 className="py-4 font-bold"> Add a review </h2>
                    <form>
                    
                        <div className="py-4 flex gap-4 text-yellow-500">
                            <div className="border px-2 py-1 rounded flex items-center"> <input type="radio" name="rating" value="1" className="bg-#000" id="1"/> <label for="1" className=" cursor-pointer mx-2"> &#9733; </label> </div>
                            
                            <div className="border px-2 py-1 rounded flex items-center"> <input type="radio" name="rating" value="2" className="bg-#000" id="2"/> <label for="2" className=" cursor-pointer mx-2">&#9733;&#9733;  </label> </div>

                            <div className="border px-2 py-1 rounded flex items-center"> <input type="radio" name="rating" value="3" className="bg-#000" id="3"/> <label for="3" className=" cursor-pointer mx-2">&#9733;&#9733;&#9733; </label> </div>
                            
                            <div className="border px-2 py-1 rounded flex items-center"> <input type="radio" name="rating" value="4" className="bg-#000" id="4"/> <label for="4" className=" cursor-pointer mx-2">&#9733;&#9733;&#9733;&#9733;</label> </div>
                            
                            <div className="border px-2 py-1 rounded flex items-center"> <input type="radio" name="rating" value="5" className="bg-#000" id="5"/> <label for="5" className=" cursor-pointer mx-2">&#9733;&#9733;&#9733;&#9733;&#9733;   </label> </div>
                        </div>
                        <textarea className="w-full h-40 border border-gray-300 rounded px-4 py-2 focus:outline-none" placeholder="Comment..." required></textarea>
                        <input type="email" className="my-1 border border-gray-300 rounded w-full mr-4 px-4 py-1  focus:outline-none" placeholder="Email" required/>
                        <input type="text" className="my-1 border border-gray-300 rounded w-80 mr-4 px-4 py-1  focus:outline-none" placeholder="First Name" required/>
                        <input type="text" className="my-1 border border-gray-300 rounded w-80 mr-4 px-4 py-1  focus:outline-none" placeholder="Last Name" required/>
                        <button className="px-8 rounded py-2 bg-primary block text-white mt-4">Send</button>
                    </form>
                </div>
            </>
            )
        }

    }

    useEffect(() => {
        setmorepdes(pageFalse[0]?.more_details);
    }, [pageFalse[0]?.more_details])

    if(!pageFalse[0]?.id){
        return <Redirect to="/notfound" />
    }

    return (
        <div>
            <Navigation />

            <div className="container my-32">
                <div className="flex justify-start gap-6">
                    <div className="w-1/3 text-center p-7 border">
                        <img className="w-full" src={pageFalse[0]?.img[0]} />
                    </div>
                    <div className="w-2/3 px-7 text-gray-500">
                        <div>

                            <div className="flex items-end justify-between">
                                <h2 className="font-semibold text-primary text-4xl"> {pageFalse[0]?.name}</h2>
                                {                                                                         
                                    ( Number(pageFalse[0]?.count) <= 0)  ?  ( <p className=" text-red-600 text-center font-bold bg-red-200 px-4 py-1 rounded block w-36"> 
                                        stock-out
                                    </p>) : (<p className=" text-green-600 font-bold bg-green-200 px-4 py-1 rounded text-center inline"> 
                                        stock
                                    </p>) 
                                }
                            </div>
                            
                            <div>
                                <small>( <span className="text-yellow-400"> { StarIcon(pageFalse[0]?.r_start) } </span> reviews) </small> 
                            </div>
                            <div className="my-3 flex justify-start items-end gap-3">
                                <h3 className="text-5xl font-bold text-primary"> ${pageFalse[0]?.prize.new} </h3>
                                <h3 className="text-2xl font-bold line-through"> ${pageFalse[0]?.prize.old} </h3>
                            </div>
                            <p>{pageFalse[0]?.shortDetails}</p>
                            <div className="my-3 flex items-center justify-end gap-4">
                                <div>
                                    {
                                        ( Number(pageFalse[0]?.count) <= 0) ? (
                                            <p className={` px-6 py-3 bg-gray-500 text-white rounded`}>
                                                <AddShoppingCartIcon />  Not Available
                                            </p>
                                        ) : (
                                            <Link to="/" className={` px-6 py-3 text-white bg-primary rounded `}>
                                                <AddShoppingCartIcon />  Add to cart
                                            </Link>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 border my-4 rounded text-gray-600">
                    {
                        morepdes &&
                        morepdes.map((item,index) => {
                            const { btn_name } = item
                            return <button key={index} onClick={()=> setmorepdesres(index)} className={` ${ (index===morepdesres) ? "bg-primary text-white" : "" } my-3 mx-4 px-4 py-2 border border-primary rounded-full hover:bg-primary hover:text-white transition capitalize`}> {btn_name} </button>
                        })
                    }

                    <div className="Description my-4">
                        { morepdes && detailsFiltering(morepdesres) }
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SingleProduct
