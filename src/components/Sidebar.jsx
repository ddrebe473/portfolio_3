import React from 'react';
const Sidebar = ({buttons}) => {

  return (        
    <div className="about_parent h-screen flex flex-col justify-end">
      <div className="h-full about bg-blue-700 w-80 absolute my-5 z-10">
        <div className="buttons flex items-center h-full flex-col justify-evenly">
          {buttons}
        </div>
      </div>
    </div>
  );
};
export default Sidebar