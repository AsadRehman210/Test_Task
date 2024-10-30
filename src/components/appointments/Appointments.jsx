import React from 'react';
import Manicure from "../../assets/images/Manicure.png";

const appointments = [
    {
        service: 'Manicure',
        date: '9 July, 2022',
        employee: 'Irtaza Zaidi',
        sale: '01',
        earnings: 100.5,
        icon: Manicure,
    },
    {
        service: 'Manicure',
        date: '9 July, 2022',
        employee: 'Irtaza Zaidi',
        sale: '01',
        earnings: 100.5,
        icon: Manicure,
    },
    {
        service: 'Manicure',
        date: '9 July, 2022',
        employee: 'Irtaza Zaidi',
        sale: '01',
        earnings: 100.5,
        icon: Manicure,
    },
    {
        service: 'Manicure',
        date: '9 July, 2022',
        employee: 'Irtaza Zaidi',
        sale: '01',
        earnings: 100.5,
        icon: Manicure,
    },
];

const Appointments = () => {
    return (
        <div className="container mx-auto p-4 my-4">
            <div className='p-6 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)]'>
                <h2 className="text-[1.639rem] font-semibold mb-6 text-[#3F3F44]">Recent Appointments</h2>
                <div className="bg-white rounded-lg overflow-hidden">
                    <div className="overflow-x-auto sm:overflow-x-hidden">
                        <table className="min-w-full">
                            <thead className='bg-gray-100'>
                                <tr className="rounded-t-lg rounded-b-lg">
                                    <th className="text-left px-6 py-3 text-[#3F3F44] opacity-70 font-medium text-[0.983rem] rounded-tl-lg rounded-bl-lg">Service</th>
                                    <th className="text-left px-6 py-3 text-[#3F3F44] opacity-70 font-medium text-[0.983rem]">Employee</th>
                                    <th className="text-left px-6 py-3 text-[#3F3F44] opacity-70 font-medium text-[0.983rem]">Sale</th>
                                    <th className="text-right px-6 py-3 text-[#3F3F44] opacity-70 font-medium text-[0.983rem] rounded-tr-lg rounded-br-lg">Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index} className={index === 0 ? '' : 'border-t'}>
                                        <td className="px-4 pr-12 py-3 sm:px-6 sm:py-4 flex items-center">
                                            <img src={appointment.icon} alt="Service Icon" className="w-[2.95rem] h-[2.95rem] mr-4" />
                                            <div>
                                                <p className="font-medium text-[#101928] text-[0.901rem] md:text-[0.983rem]">{appointment.service}</p>
                                                <p className="text-[0.812rem] md:text-[0.901rem] text-[#3F3F44]">{appointment.date}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-[0.901rem] md:text-[0.983rem] text-[#3F3F44]">{appointment.employee}</td>
                                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-[0.901rem] md:text-[0.983rem] text-[#3F3F44]">{appointment.sale}</td>
                                        <td className="text-right px-4 py-3 sm:px-6 sm:py-4 font-semibold">
                                            <div className='inline-flex rounded-lg text-[#5679FF] bg-blue-50 px-2 py-2'>${appointment.earnings.toFixed(1)}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;
