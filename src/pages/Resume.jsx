import React from 'react'
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