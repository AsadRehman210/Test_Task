import React from 'react';

const AppointmentCard = ({ srcImage, heading, srcIcon }) => {
    return (
        <div className="flex flex-row items-center bg-gray-800 text-white rounded-lg p-4 mb-4">
            {/* Icon Section */}
            <div className="w-[3rem] h-[3rem] sm:w-[4.621rem] sm:h-[4.621rem] flex items-center justify-center sm:mr-4">
                <img src={srcImage} alt="icon" className="w-full h-full object-cover" />
            </div>

            {/* Appointment Details */}
            <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                <p className="text-sm lg:text-base">10:30 AM - 11:00 AM</p>
                <h3 className="text-base lg:text-lg font-medium">
                    {heading}
                </h3>
                <p className="text-sm flex items-center justify-center sm:justify-start gap-2">
                    <img
                        src={srcIcon}
                        alt="appointment profile"
                    />
                    Fabiha Arshad
                </p>
            </div>

            {/* Date Section */}
            <div className=" text-center flex flex-col items-center justify-center">
                <p className="text-3xl lg:text-4xl font-bold">13</p>
                <p className="text-sm lg:text-base">July</p>
            </div>
        </div>
    );
}

export default AppointmentCard;
