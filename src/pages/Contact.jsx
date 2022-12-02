import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io"
import { RiNewspaperFill } from "react-icons/ri";
import Contacts from '../components/Contacts';
import Darkmode from '../components/Darkmode'

const Contact = () => {
  
  return( 
  <>
    <Darkmode/>
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

            <Link to='/resume' relative='path' className="flex items-center h-full">
                Resume
                <RiNewspaperFill/>
            </Link>
          
            <Link to='/contact' relative='path' className="flex items-center h-full">
                Contact 
                <IoIosContact/>
            </Link>
        </div>
      </div>
    <Contacts/>
  </>
  )
};


export default Contact;