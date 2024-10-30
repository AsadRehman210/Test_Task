import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = () => {
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [selectedMonthTeam, setSelectedMonthTeam] = useState("Last 12 Months");

  const months = ["Last 12 Months", "Last 6 Months", "Last 3 Months"];

  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Sales",
        data: [80, 40, 60, 70, 50, 60, 35, 40, 85, 75, 90, 95],
        backgroundColor: "#4F46E5",
        barThickness: 15,
        maxBarThickness: 20,
      },
      {
        label: "Appointments",
        data: [50, 20, 100, 75, 60, 40, 55, 30, 70, 90, 80, 85],
        backgroundColor: "#1F2937",
        barThickness: 15,
        maxBarThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.dataset.label}: $${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          font: {
            size: 15.73,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 25,
          font: {
            size: 15.73,
          },
          callback: (value) => `$${value}`,
        },
        border: {
          display: false,
        },
        grid: {
          drawBorder: false,
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  const toggleTeamDropdown = () => {
    setIsTeamDropdownOpen(!isTeamDropdownOpen);
  };

  const selectMonthTeam = (month) => {
    setSelectedMonthTeam(month);
    setIsTeamDropdownOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        {/* Title Section */}
        <h2 className="text-[1.311rem] font-semibold text-[#3F3F44] mb-2 sm:mb-0">
          Revenue
        </h2>

        {/* Legends and Dropdown Section */}
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
          {/* Legends */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="w-[0.656rem] h-[0.656rem] rounded-full bg-[#5679FF] mr-2"></span>
              <span className="text-[0.983rem] text-[#3F3F44]">Sales</span>
            </div>
            <div className="flex items-center">
              <span className="w-[0.656rem] h-[0.656rem] rounded-full bg-black mr-2"></span>
              <span className="text-[0.983rem] text-[#3F3F44]">Appointments</span>
            </div>
          </div>

          {/* Dropdown Section */}
          <div className="flex items-center">
            <span className="text-[0.983rem] mr-2 text-[#3F3F44] opacity-70">
              {selectedMonthTeam}
            </span>
            <div className="relative">
              <button
                onClick={toggleTeamDropdown}
                className="text-[0.983rem] opacity-70 text-[#3F3F44] flex items-center"
              >
                <svg
                  className={`w-5 h-5 ml-1 transition-transform duration-200 ${isTeamDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
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

              {/* Dropdown Menu */}
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
        </div>
      </div>


      {/* Scrollable chart wrapper */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: "800px", height: "400px" }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
