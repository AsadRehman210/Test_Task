import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../assets/styles/CalendarAppointments.css"; 
import Manicure from '../../assets/images/Manicure.png';
import Hair from '../../assets/images/Hair dye.png';
import AppiointUser from "../../assets/images/appointment user.png";
import AppointmentCard from './AppointmentCard';

const AppointmentArray = [
    {
        srcImage: Manicure,
        heading: "Manicure",
        srcIcon: AppiointUser,
    },
    {
        srcImage: Hair,
        heading: "Hair Dye",
        srcIcon: AppiointUser,
    },
    {
        srcImage: Manicure,
        heading: "Manicure",
        srcIcon: AppiointUser,
    },
];

const CalendarAppointments = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="container mx-auto p-4 mt-4">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Calendar Section */}
                <div className=" rounded-lg lg:w-1/2">
                    <div className="w-full bg-white rounded-lg">
                        <div className="calendar-container">
                            <Calendar
                                onChange={handleDateChange}
                                value={date}
                                className="custom-calendar"
                                prev2Label={null}
                                next2Label={null}
                                nextLabel={<span className="arrow">&gt;</span>}
                                prevLabel={<span className="arrow">&lt;</span>}
                                navigationLabel={({ date }) => (
                                    <span className="month-year">
                                        {date.toLocaleDateString('en-US', {
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </span>
                                )}
                                formatShortWeekday={(locale, date) =>
                                    date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)
                                }
                                tileClassName={({ date, view }) => {
                                    const today = new Date();
                                    const isToday =
                                        date.getDate() === today.getDate() &&
                                        date.getMonth() === today.getMonth() &&
                                        date.getFullYear() === today.getFullYear();

                                    return isToday ? 'active-tile' : '';
                                }}
                                tileContent={({ date, view }) =>
                                    view === 'month' && [20, 21, 23].includes(date.getDate()) ? (
                                        <div className="dot" />
                                    ) : null
                                }
                            />
                        </div>

                    </div>
                </div>

                {/* Appointments Section */}
                <div className="w-full md:w-full lg:w-1/2 p-4 sm:p-2">
                    <h2 className="text-lg sm:text-base lg:text-xl text-[#3F3F44] font-semibold mb-4">
                        Today's Appointments
                    </h2>
                    {AppointmentArray.map((data, i) => (
                        <AppointmentCard
                            key={i}
                            srcImage={data.srcImage}
                            heading={data.heading}
                            srcIcon={data.srcIcon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarAppointments;
