import React from 'react';
import ProfileSummary from './ProfileSummary';
import pfp from "../assets/pfp.png"
const Header = () => {
    return (
        <div className='md:p-6'>
            <div className="flex justify-between md:justify-between items-center h-28 px-6 md:pt-4 md:pb-8 bg-white shadow">
                <div className='flex space-x-2 md:space-x-4'>
                    <div className='relative'>
                        <img src={pfp} alt="" className='w-12' />
                        <span className='w-3 h-3 bg-[#34C759] absolute -right-[2px] bottom-[4px] rounded-full'></span>
                    </div>
                    <div>
                        <h1 className="font-bold text-sm md:text-lg">Diana</h1>
                        <p className="text-sm text-gray-600">diana@fluidesign.in</p>
                    </div>
                </div>
                <button className="p-2 md:px-4 md:py-2 bg-blackbg text-white rounded">Selfie Clock In</button>
            </div>
            <ProfileSummary />
        </div>
    );
};

export default Header;
