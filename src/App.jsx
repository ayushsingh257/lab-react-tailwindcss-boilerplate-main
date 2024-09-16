import React, { useState } from 'react';

const Navbar = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showStore, setShowStore] = useState(true);

  const handleButtonClick = () => {
    setShowAlert(!showAlert); 
    
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="bg-blue-700 h-2 w-full"></div> 
        <nav className="bg-red-500 p-4 h-16 flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="w-20 text-white font-bold text-xl">Kalvium</div>
            <ul className="flex space-x-4 ml-4">
              <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Courses</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <button className="border border-white text-white hover:bg-white hover:text-red-500 px-4 py-2 rounded">
            Login
          </button>
        </nav>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
            Button One
          </button>
        </div>
        {showAlert && (
          <div className="bg-red-200 border border-red-500 text-red-700 px-4 py-2 mt-4 w-72 flex justify-center shadow-md">
            Alert! This is awesome!
          </div>
        )}
        {showStore && (
          <div className="bg-white border border-gray-300 text-gray-700 px-4 py-2 mt-2 w-72 flex flex-col items-center shadow-md">
            <div className="text-lg font-bold">Kalvium Store</div>
            <div className="text-sm mt-1">You have a new course</div>
          </div>
        )}
      </div>

      {/* Light grey navbar at the bottom */}
      <div className="bg-gray-200 p-4 h-16 flex items-center justify-center w-full">
        <p className="text-gray-800">@ 2021 Copyright:Kalvium</p>
      </div>
    </div>
  );
};

export default Navbar;
