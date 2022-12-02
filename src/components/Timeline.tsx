import React from 'react'
const Timeline = () => {
    return (
        <>
            <div className="container bg-[#1f1f1f] mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">

                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: "50%" }}></div>


                    <div className="mb-8 flex justify-between mx-auto items-center w-9/12 right-timeline">
                        {/* <div className="order-1  bg-[#222222] w-5/12 rounded-lg shadow-xl"></div> */}
                        <div className="order-1 w-5/12 px-6 py-4 "></div>
                        <div className="order-2 rounded-lg w-2/12 px-6 py-4 hover:scale-105">
                            <div className="z-20 flex mx-auto items-center order-1 bg-[#2c2c2c] shadow-2xl w-30 h-8 rounded-lg">
                                <h1 className="mx-auto font-semibold text-lg text-white">2023-Q1</h1>
                            </div>
                        </div>
                        <div className="order-3 bg-[#2c2c2c] shadow-2xl w-5/12 px-6 py-4 hover:scale-105">
                            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.    .</p>
                        </div>
                    </div>

                    {/* <!-- left timeline --> */}
                    <div className="-top-50 mb-8 flex justify-between flex-row-reverse mx-auto items-center w-9/12 left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="order-2 rounded-lg w-2/12 px-6 py-4 hover:scale-105">
                            <div className="z-20 flex mx-auto items-center order-1 bg-[#F26C4F] shadow-2xl w-30 h-8 rounded-lg">
                                <h1 className="mx-auto font-semibold text-lg text-[#2c2c2c]">2023-Q2</h1>
                            </div>
                        </div>
                        <div className="order-3 bg-[#F26C4F] shadow-xl w-5/12 px-6 py-4 hover:scale-105">
                            <h3 className="mb-3 font-bold text-[#2c2c2c] text-xl">Lorem Ipsum</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-[#2c2c2c] text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ,   .</p>
                        </div>
                    </div>

                    {/* <!-- right timeline --> */}
                    <div className="mb-8 flex justify-between mx-auto items-center w-9/12 right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="order-2 rounded-lg w-2/12 px-6 py-4 hover:scale-105">
                            <div className="z-20 flex mx-auto items-center order-1 bg-[#2c2c2c] shadow-2xl w-30 h-8 rounded-lg">
                                <h1 className="mx-auto font-semibold text-lg text-white">2023-Q3</h1>
                            </div>
                        </div>
                        <div className="order-3 bg-[#2c2c2c] shadow-xl w-5/12 px-6 py-4 hover:scale-105">
                            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ,   .</p>
                        </div>
                    </div>

                    {/* <!-- left timeline --> */}
                    <div className="mb-8 flex justify-between flex-row-reverse mx-auto items-center w-9/12 left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="order-2 rounded-lg w-2/12 px-6 py-4 hover:scale-105">
                            <div className="z-20 flex mx-auto items-center order-1 bg-[#F26C4F] shadow-2xl w-30 h-8 rounded-lg">
                                <h1 className="mx-auto font-semibold text-lg text-[#2c2c2c]">2023-Q4</h1>
                            </div>
                        </div>
                        <div className="order-3 bg-[#F26C4F] shadow-xl w-5/12 px-6 py-4 hover:scale-105">
                            <h3 className="mb-3 font-bold text-[#2c2c2c] text-xl">Lorem Ipsum</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-[#2c2c2c] text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ,   .</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline;