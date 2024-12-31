import React from 'react';

const Button = ({ label = "Click Me", width = "150px", height = "45px", onClick }) => {
    return (
        <button
            className={`overflow-hidden text-[18px] text-white bg-transparent mx-[30px] rounded-lg capitalize z-1 relative 
            before:left-[-${width}] before:hover:left-0 before:z-0 before:top-0 before:transition-all before:duration-1000 before:ease-out border-2 
            border-[#2f51b5] before:absolute before:w-[${width}] before:h-[${height}] before:bg-[#2f51b5] before:block 
            after:right-[-${width}] after:hover:right-0 after:z-0 after:top-0 after:transition-all after:duration-1000 after:ease-out after:absolute 
            after:w-[${width}] after:h-[${height}] after:bg-[#2f51b5] after:block group`}
            style={{ width, height }}
            onClick={onClick}
        >
            <p className="relative text-black group-hover:z-10 group-hover:text-white">
                {label}
            </p>
        </button>
    );
};

export default Button;
