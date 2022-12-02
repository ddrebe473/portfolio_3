import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

const Profile = (props) => {

    return (
        <div className='profile flex flex-col items-center relative'>
            {/* <div className="me relative flex justify-center items-center pt-20 right-1"> */}
            <img className=" img w-[15rem] h-[15rem] relative mt-10 border-black border-8 rounded-full " src={props.img} alt="hi" />
            {/* </div> */}

            <ReactTypingEffect
                className="name select-none relative text-5xl mt-10"
                text={[props.name]}
                eraseDelay={100_000_000}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text) => {
                    return (<h1>
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                                <span key={key}>
                                    {char}
                                </span>
                            );
                        })}
                    </h1>)
                }}
            />
        </div>
    )
}

export default Profile