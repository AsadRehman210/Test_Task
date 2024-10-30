import React from 'react';

const ProductCard = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="flex items-center py-2 md:py-4">
      <div className="w-[4.098rem] h-[4.098rem] rounded-md flex justify-center items-center mr-4">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className='flex flex-col justify-between'>
        <p className="text-[1.216rem] font-medium md:text-[1.5rem]">{title}</p>
        <p className="text-[1.042rem] text-[#3F3F44] opacity-70 md:text-[1.25rem]">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProductCard;
