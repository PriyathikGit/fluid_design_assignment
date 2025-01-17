import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { CircleHelp, House, LogOut, Menu, X } from 'lucide-react';
import user from "../assets/user.png"
import block from "../assets/building.png"
import clock from "../assets/clock.png"
import todo from "../assets/todo.png"
import home from "../assets/home.png"
const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    const [navbar, setNavbar] = useState(false)
    const handleSelect = (id) => {
        setSelected(id)
    }

    const nav = [
        { id: 0, name: "home", img: home },
        { id: 1, name: "Attendance", img: todo },
        { id: 2, name: "Leave", img: clock },
        { id: 3, name: "Company Details", img: block },
        { id: 4, name: "Profile & Settings", img: user },
    ]

    const handleNavbar = () => {
        setNavbar(!navbar)
    }

    return (
        <>
            <div className="bg-white sticky left-0 w-64 max-h-screen px-4 py-6 hidden md:block">
                <img src={logo} alt="" className='w-[70%] mx-auto mb-6' />
                <div>
                    <div className='flex gap-4 flex-col'>
                        {nav.map((item) => (
                            <div key={item.id} className={`flex space-x-4 cursor-pointer py-2 p-2 rounded-lg
                        ${selected === item.id ? 'bg-blackbg text-white' : 'bg-white text-black'}`}
                                onClick={() => handleSelect(item.id)}>
                                <img src={item?.img} alt=""
                                    className={item.id !== 0 && selected === item.id ? 'invert' : 'brightness-50'}
                                />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-6">
                    <div className='flex gap-4 items-center p-2'>
                        <CircleHelp />
                        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Help</a>
                    </div>
                    <div className='flex gap-4 items-center p-2'>
                        <LogOut />
                        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Logout</a>
                    </div>
                </div>
            </div>

            {/* mobile nav  */}
            <Menu onClick={() => handleNavbar()} className='absolute top-0 left-0 block md:hidden'/>
            {navbar && <div className='block md:hidden absolute w-full h-full bg-white'>
                <X 
                onClick={()=>setNavbar(false)}
                />
                <div className='flex gap-4 flex-col'>
                    {nav.map((item) => (
                        <div key={item.id} className={`flex space-x-4 cursor-pointer py-2 p-2 rounded-lg
                        ${selected === item.id ? 'bg-blackbg text-white' : 'bg-white text-black'}`}
                            onClick={() => handleSelect(item.id)}>
                            <img src={item?.img} alt=""
                                className={item.id !== 0 && selected === item.id ? 'invert' : 'brightness-50'}
                            />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-6">
                    <div className='flex gap-4 items-center p-2'>
                        <CircleHelp />
                        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Help</a>
                    </div>
                    <div className='flex gap-4 items-center p-2'>
                        <LogOut />
                        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Logout</a>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Sidebar;
