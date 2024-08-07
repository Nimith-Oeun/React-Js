import React from 'react'
import { Avatar, Dropdown, Navbar, NavbarLink } from "flowbite-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function Navbars() {

    const total = useSelector((state) => state.cart.total)
    const userRespone = useSelector(state => state.user.login)
    console.log("userRespone", userRespone);

    const [navbarList, setNavbarList] = useState([
        {
            title: "Home",
            url: "/",
            active: true
        },
        {
            title: "About Us",
            url: "/AboutUse",
            active: false
        },
        {
            title: "Service",
            url: "/service",
            active: false
        },
        {
            title: "Products",
            url: "/ProductCard",
            active: false
        },

    ]);

    const handleClick = (list) => {
        // console.log(list);
        // setNavbarList((preValue) => console.log(preValue));

        setNavbarList((preValue) => {
            return preValue.map((item) => {
                if (item.title === list.title) {
                    return {
                        ...item,
                        active: true
                    };
                } else {
                    return {
                        ...item,
                        active: false
                    };
                }
            });
        });
    };


    return (
        <div className=' w-full fixed z-20 inline-block '>
            <Navbar fluid rounded className='bg-slate-100'>
                <Navbar.Brand href="https://flowbite-react.com">

                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        userRespone.user ? <Link as={Link} to={"/Login"} >
                            <button className='bg-blue-500 py-[5px] px-[10px] rounded-md mr-3 font-bold'>Logout</button>
                        </Link> : <Link as={Link} to={"/Login"} >
                            <button className='bg-blue-500 py-[5px] px-[10px] rounded-md mr-3 font-bold'>Login</button>
                        </Link>
                    }
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {navbarList.map((list, index) => {
                        return (
                            <Navbar.Link
                                key={index}
                                as={Link}
                                to={list.url}
                                active={list.active}
                                onClick={() => handleClick(list)}
                            >
                                {list.title}
                            </Navbar.Link>
                        );
                    })}
                    <Navbar.Link as={Link} to={"/CartProduct"}>
                        <div className='relative'>
                            <span className='absolute px-1  rounded-full -top-4 -right-3 bg-pink-200'>
                                {total}
                            </span>
                        </div>
                        <FaCartArrowDown className='text-[20px]' />
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
