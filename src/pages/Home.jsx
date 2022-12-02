import React from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'
import Util from '../util/home'
import Info from '../components/Info'
import Darkmode from '../components/Darkmode'
import TopBar from '../components/TopBar'
const Home = () => {
    return (
        <div 
            className='about-parent h-screen' 
        >
            <TopBar />
            <Sidebar
                buttons={Util.map((profileInfo) => {
                    return (<button
                        onClick={profileInfo.onClick}
                        className="text font-bold bg-white opacity-50 w-52 h-20 text-4xl rounded">
                        {profileInfo.text}
                    </button>)
                })}
            />

            <div className="mainContent">
                <Profile
                    img="/images/me.jpg"
                    name="Dylan Drebes"
                />
            </div>

        </div>
    )
}
export default Home;