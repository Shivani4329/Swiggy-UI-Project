import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";

export default function Header(){
    const [toggle, setToggle] = useState(false);

    const toggleSideMenu = () => {
      setToggle(!toggle);  // Toggle the state of `toggle`
    }
    
    const links = [
      {
        icon: <IoIosSearch />,
        name: "Search for area, street name.."
      },
      {
        icon: <IoHelpBuoyOutline />,
        name: "Get current location"
      },
      {
        icon: <CiDiscount1 />,
        name: "Offers",
        sup: "New"
      },
      {
        icon: <CiUser />,
        name: "SignIn"
      },
      {
        icon: <CiShoppingCart />,
        name: "Cart",
        sup: 0
      }
    ];

    return (
      <>
        <div className={`black-overlay w-full h-full fixed duration-500 z-[1000] overflow-hidden overscroll-none ${toggle ? "sidebar-open":""}`} onClick={() => setToggle(false)} style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden",
        }}>
          <div onClick={(e) => {
            e.stopPropagation();
          }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
             style={{
              left: toggle ? '0%' : '-100%'
             }}
          >
            {/* Content for side menu */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <ul className="space-y-2">
                {links.slice(0, 2).map((link, index) => (
                  <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]" onClick={() => setToggle(false)}>
                    {link.icon}
                    <span>{link.name}</span>
                    {link.sup && <sup>{link.sup}</sup>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
          <div className='max-w-[1200px] mx-auto flex items-center'> 
            <div className='w-[100px] '>
              <img src="Images/Swiggy-logo.png" className='w-full' alt=""/>
            </div>
            <div className=''>
              <span className='font-bold border-b-[3px] border-[black]'>Ratanada</span> Jodhpur, Rajasthan, India 
              <RxCaretDown fontSize={25} className='inline text-[#fc8019] cursor-pointer' onClick={toggleSideMenu} />
            </div>
            
            <nav className='hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold'>
              {links.slice(2).map((link, index) => (
                <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center gap-2'>
                  {link.icon}
                  {link.name}
                  {link.sup && <sup>{link.sup}</sup>}
                </li>
              ))}
            </nav>
          </div>
        </header>
      </>
    );
}
