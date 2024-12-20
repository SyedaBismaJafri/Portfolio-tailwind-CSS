'use client'
import { useState } from 'react';
import React from 'react'
import { userInfo, headerItems } from "@/constants/constant"
import { NavItems } from '@/models/Header'
import { IoMenu } from "react-icons/io5";
import { Link as ScrollLink} from 'react-scroll'

const Header: React.FC = () => {
    const [navItem, showNavItems] = useState<boolean>(false);

    return (
        <header className='bg-white p-6 justify-between fixed top-0 md:flex w-full z-10'>
            <div className='flex justify-between'> {/*header ka left part*/}
                <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
                <IoMenu 
                    size={30}
                    className='md:hidden'
                    onClick={() => showNavItems(prevState => !prevState)}
                />
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 ${navItem ? 'block' : ''}`}> {/*header ka right part*/}
                {
                    Object.keys(headerItems).map(item => 
                        (
                        <ScrollLink 
                        to={headerItems[item as keyof NavItems].page}
                            key={headerItems[item as keyof NavItems].label}
                            className='block md:inline-block cursor-pointer'
                            spy={true}
                            smooth={true}
                        >
                            {headerItems[item as keyof NavItems].label}
                        </ScrollLink>)
                    )
                }
            </div>
        </header>
    )
}

export default Header
