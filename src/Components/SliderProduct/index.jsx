import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'


const SliderProduct = () => {
const AllProduct = useContext(Context)
    const [Product, setProduct] = useState(AllProduct)
    const [itemNum, setitemNum] = useState(0)
    const autoplay = useRef()
    
    // const coustomsetInterval = () => {
    //     autoplay.current = setInterval(()=>{
    //         setitemNum((e)=> setitemNum(++e))
    //      }, 5000)
    // }


        // coustomsetInterval()
    // useEffect(() => {
    // }, [])

    // console.log(itemNum);

    return (
        <div className="fixed bg-white w-60 left-2 bottom-4 border overflow-hidden">
            {AllProduct &&
                AllProduct.map((item, index)=>{
                        return(
                            <div className="flex items-center gap-2">
                                <div>
                                    <img className="w-12" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" />
                                </div>
                                <div>
                                    <Link to={`./Shop/SingleProduct/${item.name}`}>
                                        <h3 className="text-1xl hover:text-primary capitalize transition"> {item.name} </h3>
                                    </Link>
                                </div>
                            </div>
                        )
                })
            }
           
        </div>
    )
}

export default SliderProduct
