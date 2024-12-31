import React from 'react'

const Banner = () => {
    return (
        <div className='text-center  bg-[#EAEEFF] mt-[55px] pt-[40px] pb-[10rem] relative ' >

            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[30px] h-[30px] top-[45%] left-[20%]"></div>
            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[100px] h-[100px] top-[50%] left-[10%]"></div>
            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[30px] h-[30px] bottom-[20%] left-[23%]"></div>
            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[100px] h-[100px] top-[20%] right-[10%]"></div>
            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[30px] h-[30px] bottom-[50%] right-[23%]"></div>

            <div className="w-full mx-auto">
                <div className="mt-6 text-4xl text-center ">
                    <h1>India’s <span className='font-semibold' >Largest</span>  Job Portal</h1>
                </div>
                <p className='mt-4 text-xl text-center' >WorkIndia helps you hire staff in 2 days</p>
                <div className="relative w-full h-full mx-auto mt-6 lg:w-7/12 lg:h-[25rem]">
                    <img src="http://resources.workindia.in/employer/assets/img/landing_hero.png" className='object-contain w-full h-full lg:object-cover aspect-video' alt="" />
                </div>
                <div className="relative flex w-full mx-auto mt-6 lg:w-5/12 ">
                    <button className='h-[45px] overflow-hidden text-[18px] text-white bg-transparent w-5/12 mx-[30px] rounded-lg capitalize z-1 relative  before:left-[-150px] before:hover:left-0 before:z-0  before:top-0 border-2 before:transition-all before:duration-1000 before:ease-out border-[#2f51b5] before:absolute before:w-[150px] before:h-[45px] before:bg-[#2f51b5] before:block after:right-[-150px] after:hover:right-0 after:z-0  after:top-0 border-2 after:transition-all after:duration-1000 after:ease-out after:absolute after:w-[150px] after:h-[45px] after:bg-[#2f51b5] after:block group' >
                        <p className='relative text-black group-hover:z-10 group-hover:text-white' >hire now</p>
                    </button>
                    <button className='h-[45px] overflow-hidden text-[18px] text-white bg-transparent w-5/12 mx-[30px] rounded-lg capitalize  before:left-[-150px] before:hover:left-0 before:z-0  before:top-0 border-2 before:transition-all before:duration-1000 before:ease-out border-[#2f51b5] z-1 relative before:absolute before:w-[150px] before:h-[45px] before:bg-[#2f51b5] before:block after:right-[-150px] after:hover:right-0 after:z-0  after:top-0 border-2 after:transition-all after:duration-1000 after:ease-out after:absolute after:w-[150px] after:h-[45px] after:bg-[#2f51b5] after:block group' >
                        <p className='relative text-black group-hover:z-10 group-hover:text-white' >get a job</p>
                    </button>
                </div>
            </div>
            <div className="absolute w-3/12 right-0 top-[55px] "></div>
        </div>
    )
}

export default Banner