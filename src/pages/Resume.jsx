import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io"
import { RiNewspaperFill } from "react-icons/ri";
import Skills from '../components/Skills';
import TopBar from '../components/TopBar';

function Resume() {
    return (
        <>
            <TopBar />
            <Skills />
        </>
    )
}

export default Resume