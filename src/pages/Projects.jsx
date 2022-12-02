import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io"
import { RiNewspaperFill } from "react-icons/ri";
import Darkmode from '../components/Darkmode'
import TopBar from '../components/TopBar';

function Projects() {
    const buttons = () => {
        return
    }

    return (<>
        <TopBar />
        <Sidebar buttons={buttons()}/>
        <div className="mainContent">

        </div>
    </>)
}

export default Projects