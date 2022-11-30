import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

const Profile = (props) => {
  
    return (
    <>
        <div className="me flex justify-center items-center pt-20 right-1">
            <img className=" img w-[15rem] h-[15rem] relative border-black border-8 rounded-full "src={props.img } alt="hi" />
        </div>
      
        <ReactTypingEffect 
            className="name select-none relative top-[25rem] text-5xl"
            text={[props.name]}
            eraseDelay ={100_000_000}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            displayTextRenderer={(text) => {
                return (
                    <>
                        <h1>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </h1>
                    </>
                )
            }}
        /> 
    </>
  )
}

export default Profile