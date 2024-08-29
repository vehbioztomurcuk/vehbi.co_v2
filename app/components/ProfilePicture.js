import React from 'react';

const ProfilePicture = ({ src, alt }) => {
  return (
    <div className="absolute top-4 right-4 w-24 h-24 bg-[#C0C0C0] border-2 border-[#DFDFDF] border-r-[#808080] border-b-[#808080] shadow-md">
      <div className="w-full h-5 bg-[#000080] flex items-center justify-between px-1">
        <span className="text-white text-xs">Profile.exe</span>
        <div className="flex">
          <button className="w-3 h-3 bg-[#C0C0C0] border border-[#808080] text-[8px] flex items-center justify-center mr-1">_</button>
          <button className="w-3 h-3 bg-[#C0C0C0] border border-[#808080] text-[8px] flex items-center justify-center mr-1">&square;</button>
          <button className="w-3 h-3 bg-[#C0C0C0] border border-[#808080] text-[8px] flex items-center justify-center">x</button>
        </div>
      </div>
      <div className="p-1">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default ProfilePicture;