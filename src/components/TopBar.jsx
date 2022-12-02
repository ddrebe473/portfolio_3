import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { RiNewspaperFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="nav navBtns z-20 relative top-0 w-full flex justify-evenly bg-gray-600 py-2">
            <Link to='/' relative='path' className="navLink flex items-center h-full">
                Home
                <AiFillHome />
            </Link>

            <Link to='/projects' relative='path' className="navLink flex items-center h-full">
                Projects
                <FaProjectDiagram />
            </Link>

            <Link to='/resume' relative='path' className="navLink flex items-center h-full">
                Resume
                <RiNewspaperFill />
            </Link>

            <Link to='/contact' relative='path' className="navLink flex items-center h-full">
                Contact
                <IoIosContact />
            </Link>
        </div>
    )
}

export default TopBar;