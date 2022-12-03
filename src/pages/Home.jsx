import React from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'
import Util from '../util/home'
import Info from '../components/Info'
import Darkmode from '../components/Darkmode'
import TopBar from '../components/TopBar'
import {useState} from 'react'
const Home = () => {

    const [curInfo, setCurInfo] = useState(Object.keys(Util)[0])
    // console.log(curInfo, Util[curInfo])


    return (
        <div 
            className='about-parent h-screen' 
        >
            <TopBar />
            <Sidebar
                buttons={Object.keys(Util).map((infoKey) => {
                    return (
                    <button
                        onClick={() => setCurInfo(infoKey)}
                        key={infoKey}
                        className="text font-bold bg-white opacity-50 w-52 h-20 text-4xl rounded">
                            {infoKey}
                    </button>)
                })}
            />

            <div className="mainContent">
                <Profile
                    img="/images/me.jpg"
                    name="Dylan Drebes"
                    info={Util[curInfo]}
                />
            </div>

        </div>
    )
}
export default Home;