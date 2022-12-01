import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io"
import Util from '../util/home'
import Info from '../components/Info'
import Darkmode from '../components/Darkmode'
const Home = () => {
  return( 
    <> 
    <Darkmode/>     
    <Info/>
      <Sidebar
      buttons = {Util.map((profileInfo)=>{
        return(
          <div key={profileInfo.id.toString()}>
            <button
            onClick={profileInfo.onClick} 
            className="text font-bold bg-white opacity-50 w-52 h-20 text-4xl rounded">
            {profileInfo.text}
            </button>
          </div>
        )
      })}
      />
    <Profile
      img="/images/me.jpg"
      name="Dylan Drebes"
      /> 
    <div className="nav z-20 absolute top-0 w-full">
      <div className=" navBtns flex justify-evenly bg-gray-600 py-2">
          <Link to='/' relative='path' className="flex items-center h-full">
            Home
            <AiFillHome/>
          </Link>
          <Link to='/projects' relative='path' className="flex items-center h-full">
              Projects
              <FaProjectDiagram/>
          </Link>
          <Link to='/contact' relative='path' className="flex items-center h-full">
              Contact
              <IoIosContact/>
          </Link>
        </div>
      </div>
  </>
  )
}
export default Home;