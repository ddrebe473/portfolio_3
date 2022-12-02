import React from 'react'
import Sidebar from '../components/Sidebar'
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