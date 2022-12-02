import React from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'
import Util from '../util/home'
import Info from '../components/Info'
import Darkmode from '../components/Darkmode'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io"
import { RiNewspaperFill } from "react-icons/ri";
import TopBar from '../components/TopBar'
const Home = () => {
    return (
        <>
            {/* <Darkmode /> */}
            {/* <Info /> */}
            <Sidebar
                buttons={Util.map((profileInfo) => {
                    return (
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
            <TopBar />
        </>
    )
}
export default Home;