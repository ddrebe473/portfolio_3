import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io"
import { RiNewspaperFill } from "react-icons/ri";
import Skills from '../components/Skills';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';

function Resume() {
    return (
        <>
            <TopBar />
            <Sidebar buttons={[]}/>
            <div className="mainContent">
                <Skills />
            </div>
        </>
    )
}

export default Resume