import React from 'react';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './style.model.css'


const Feature = () => {
    return (
        <div className="container py-16">
            <div className="grid grid-cols-3 gap-6 justify-center w-10/12 mx-auto ">
                <div className="boxShadowCostom rounded-sm px-3 py-4 gap-5 flex items-center justify-center" >
                    <div className="pr-6">
                        <ElectricCarIcon className="text-primary" style={{fontSize:"40px"}}/>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg capitalize">Free Shopping</h4>
                        <p className="text-gray-500 text-sm"> order over $200</p>
                    </div>
                </div>
                <div className="boxShadowCostom rounded-sm px-3 py-4 gap-5 flex items-center justify-center">
                    <div className="pr-6">
                        <LocalAtmIcon className="text-primary" style={{fontSize:"40px"}}/>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg capitalize">money returns</h4>
                        <p className="text-gray-500 text-sm"> 30 Days money return </p>
                    </div>
                </div>
                <div className="boxShadowCostom rounded-sm px-3 py-4 gap-5 flex items-center justify-center">
                    <div className="pr-6">
                        <SupportAgentIcon className="text-primary" style={{fontSize:"40px"}}/>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg capitalize"> 24/7 support </h4>
                        <p className="text-gray-500 text-sm"> Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
