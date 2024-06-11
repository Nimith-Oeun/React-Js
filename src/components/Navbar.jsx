import React ,{useState} from "react";
import { Avatar, Dropdown, List, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Navbars() {
  const [navbarList, setNavbarList] = useState([
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "About Us",
      url: "/AboutUse",
      active: false,
    },
    {
      title: "Service",
      url: "/service",
      active: false,
    },
  ]);
const handleClick = (list)=>{
    setNavbarList((preValue) => {
        return preValue.map((item) => {
          if (item.title === list.title) {
            return {
              ...item,
              active: true,
            };
          } else {
            return {
              ...item,
              active: false,
            };
          }
        });
      });
}
  

  return (
    <>
      <Navbar fluid rounded className="bg-slate-100 w-[75%] m-auto">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
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
            console.log("List", list)
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
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
