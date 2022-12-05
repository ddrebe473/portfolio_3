import React from 'react'
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import Resumepdf from '../../src/Resume.pdf'

function Resume() {
    return (
        <>
            <TopBar />
            <Sidebar buttons={[]}/>
            <div className="mainContent">
                <iframe
                    src={Resumepdf}
                    frameBorder="0"
                    scrolling="auto"
                    height="100%"
                    width="100%"
                ></iframe>
            </div>
        </>
    )
}

export default Resume