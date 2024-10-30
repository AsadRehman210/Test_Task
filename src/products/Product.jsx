import React, { useState } from 'react';
import ProductCard from './ProductCard'; 
import AppointmentCard from './AppointmentCard';
import Manicure from "../assets/images/Manicure.png";
import faheem from "../assets/images/Faheem.png";
import Alina from "../assets/images/Alina.png";
import Irtaza from "../assets/images/irtaza.png";

const Products = () => {
  const [selectedMonthProducts, setSelectedMonthProducts] = useState('This Month');
  const [selectedMonthTeam, setSelectedMonthTeam] = useState('This Month');
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isTeamDropdownOpen, setTeamDropdownOpen] = useState(false);

  const months = ['Previous Month', 'This Month'];

  const toggleProductsDropdown = () => setProductsDropdownOpen(!isProductsDropdownOpen);
  const toggleTeamDropdown = () => setTeamDropdownOpen(!isTeamDropdownOpen);

  const selectMonthProducts = (month) => {
    setSelectedMonthProducts(month);
    setProductsDropdownOpen(false);
  };

  const selectMonthTeam = (month) => {
    setSelectedMonthTeam(month);
    setTeamDropdownOpen(false);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {/* Top Products Card */}
      <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] p-6">
        <div className="flex justify-between items-center mb-4 gap-4">
          <h2 className="text-[1.311rem] text-[#3F3F44] font-semibold">Top Products</h2>

          {/* Dropdown for Products */}
          <div className="relative">
            <button
              onClick={toggleProductsDropdown}
              className="text-[0.983rem] opacity-70 text-[#3F3F44] flex items-center"
            >
              {selectedMonthProducts}
              <svg
                className={`w-5 h-5 ml-1 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isProductsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {months.map((month, index) => (
                  <button
                    key={index}
                    onClick={() => selectMonthProducts(month)}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="divide-y divide-grey-500">
          {[1, 2, 3].map((_, index) => (
            <ProductCard 
              key={index} 
              imageSrc={Manicure} 
              title="Menicure" 
              subtitle="24 Services" 
            />
          ))}
        </div>
      </div>

      {/* Top Team Members Card */}
      <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] p-6">
        <div className="flex justify-between items-center mb-4 gap-4">
          <h2 className="text-[1.311rem] text-[#3F3F44] font-semibold">Top Team Members</h2>

          {/* Dropdown for Team Members */}
          <div className="relative">
            <button
              onClick={toggleTeamDropdown}
              className="text-[0.983rem] opacity-70 text-[#3F3F44] flex items-center"
            >
              {selectedMonthTeam}
              <svg
                className={`w-5 h-5 ml-1 transition-transform duration-200 ${isTeamDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isTeamDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {months.map((month, index) => (
                  <button
                    key={index}
                    onClick={() => selectMonthTeam(month)}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="divide-y divide-grey-500">
          {[{ name: 'Alina Arshad', appointments: 24, src: faheem }, 
            { name: 'Irtaza Zaidi', appointments: 20, src: Alina }, 
            { name: 'Faheem Altaf', appointments: 13, src: Irtaza }].map((member, index) => (
            <AppointmentCard
              key={index} 
              imageSrc={member.src} 
              name={member.name} 
              appointments={member.appointments} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
