import React from 'react'

// test from Luke
const Info = (props) => {
    return (
        <div key={props.info.id.toString()}>
            <h3
            className="text font-bold bg-white opacity-50 w-52 h-20 text-4xl rounded absolute"
            >
                {props.info.info}
            </h3>
        </div>
    )
}

export default Info