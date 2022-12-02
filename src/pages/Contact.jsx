import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io"
import { RiNewspaperFill } from "react-icons/ri";
import Contacts from '../components/Contacts';
import Darkmode from '../components/Darkmode'
import TopBar from '../components/TopBar';

const Contact = () => {

    return (
        <>
            <Darkmode />
            <TopBar />
            <Contacts />
        </>
    )
};


export default Contact;