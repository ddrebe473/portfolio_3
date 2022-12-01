import React from 'react'
import Util from '../util/home'


// test from Luke
const Info = () => {
    return (
        <>
            {Util.map((theInfo)=>{
                return(
                <div key={theInfo.id.toString()}>
                    <h3
                    onClick={theInfo.onClick} 
                    className="text font-bold bg-white opacity-50 w-52 h-20 text-4xl rounded absolute"
                    >
                        {theInfo.info}
                    </h3>
                </div>
                )
            })}
        </>
    )
}

export default Info