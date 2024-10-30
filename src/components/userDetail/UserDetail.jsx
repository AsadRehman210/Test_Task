import React from 'react';
import Appointment_icon from "../../assets/images/appointment icon.svg";
import Revenue from "../../assets/images/revenue icon.png";
import RevenueAnalytics from "../../assets/images/revenue analytics.png";
import UserCard from './UserCard';
import customer from "../../assets/images/customer icon.png";
import Appointment_card from "../../assets/images/appointment icon black.png";
import AppointAnalytics from "../../assets/images/Appoint Analytics.png";

const UserDetail = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 mt-4">
      {/* First Row: Greeting and Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-[1.813rem] font-normal text-[#3F3F44]">
          Good Morning, <span className="font-bold text-black">Bella Famina</span>
        </h1>
        <button className="mt-4 sm:mt-0 bg-[#101928] text-white py-2 px-3 sm:py-3 sm:px-4 rounded-lg flex items-center text-base sm:text-[1.208rem] font-semibold">
          <span className="material-icons-outlined mr-2">
            <img src={Appointment_icon} alt='Appointment icon' className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
          New Appointment
        </button>
      </div>

      {/* Second Row: Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <UserCard 
          srcIcon={Revenue}
          srcAnalytics={RevenueAnalytics}
        />
        <UserCard 
          srcIcon={customer}
          srcAnalytics={RevenueAnalytics}
        />
        <UserCard 
          srcIcon={Appointment_card}
          srcAnalytics={AppointAnalytics}
        />
      </div>
    </div>
  );
};

export default UserDetail;
