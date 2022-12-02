import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io"
import { RiNewspaperFill } from "react-icons/ri";
import {BsFillBarChartFill} from "react-icons/bs";
import Skills from '../components/Skills';

function Resume() {
  return (
    <>
        <div className="nav z-20 absolute top-0 w-full">
            <div className=" navBtns flex justify-evenly bg-gray-600 py-2">
                <Link to='/' relative='path' className="flex items-center h-full">
                    Home <AiFillHome/>
                </Link>
          
                <Link to='/projects' relative='path' className="flex items-center h-full">
                    Projects
                    <FaProjectDiagram/>
                </Link>

            <Link to='/resume' relative='path' className="flex items-center h-full">
                Resume
                <RiNewspaperFill/>
            </Link>
            
            <Link to='/skills' relative='path' className="flex items-center h-full">
                Skills
                <BsFillBarChartFill/>
            </Link>
          
            <Link to='/contact' relative='path' className="flex items-center h-full">
                Contact 
                <IoIosContact/>
            </Link>
        </div>
      </div>

    <Skills/>
  </>
  )
}

export default Resume