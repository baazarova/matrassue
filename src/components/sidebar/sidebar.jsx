import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill, BsFillBarChartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import "./sidebar.css";

export const Sidebar = () => {
  const menuItem = [
    {
      path: "/buyurtmalar",
      name: "Buyurtmalar",
      icon: <AiFillHome />,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: <BsFillPersonFill />,
    },
    {
      path: "/toifalar",
      name: "Toifalar",
      icon: <BsFillBarChartFill />,
    },
    {
      path: "/mahsulot",
      name: "Mahsulotlar",
      icon: <FaShoppingCart />,
    },
    {
      path: "/texnologiya",
      name: "Texnologiyalar",
      icon: <IoMdSettings />,
    },
    {
      path: "/manzil",
      name: "Manzil",
      icon: <MdLocationOn />,
    },
  ];
  return (
    <section className="sidebar">
        <div className="sidebar">
        <ul className="sidebar__list"> 
          {menuItem.map((item, index) => (
            <li className="sidebar__item" key={index}>
              <Link to={item.path}className="link">
                <div className="icon">{item.icon}</div>
                <p className="link__text">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        </div>
        
   </section>
  );
};
