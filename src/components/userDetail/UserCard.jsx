import React from 'react'

const UserCard = ({srcIcon, srcAnalytics}) => {
    return (
        <div className="bg-white px-5 py-6 shadow-lg rounded-lg  ">
            <div className='flex items-center justify-between'>
                <div className="text-gray-600">
                    <img src={srcIcon} alt="Revenue icon" />
                </div>
                <p className="text-[#007930] text-[1.967rem] font-bold">$1,682</p>
            </div>
            <div className='flex items-center justify-between pt-7'>
                <p className="text-[#3F3F44] text-[1.148rem] font-semibold">Total Revenue</p>
                <div className="text-green-600 text-xl font-bold">
                    <img src={srcAnalytics} alt="analytics icon" />
                </div>
            </div>
        </div>
    )
}

export default UserCard
