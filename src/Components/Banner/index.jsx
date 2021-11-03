import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({img, h1, p, link, to, style, goBack}) => {
    return (
        <div className="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `${img && img}`}}>
            <div className={`container  ${style && style.center}`}  >
                <h1 className="capitalize text-gray-800 font-bold mb-4 text-6xl">{h1 && h1}</h1>
                <p className="md:pr-96">{p && p}</p>
                {link && 
                    <div className="mt-10">
                        <Link to={to} className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition">{link}</Link>
                    </div>
                }

                {
                    goBack && 
                    <button onClick={goBack}>Back</button>
                }
            </div>
        </div>
    )
}

export default Banner
