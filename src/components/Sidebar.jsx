import React from 'react';
const Sidebar = ({ buttons }) => {
    return (
        // <div className="sidebarComponent about-parent fixed top-0 left-0 bottom-0 h-screen bg-blue-700 w-80 flex flex-col items-center justify-evenly">
        <div className="sidebarComponent bg-blue-700 w-40 flex flex-col items-center justify-evenly">
            {buttons}
        </div>
    )
};
export default Sidebar