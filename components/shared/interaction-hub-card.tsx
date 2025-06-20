import React from 'react';

const InteractionHubCard = () => {
  return (
    <div className="bg-[#F8F8F8] rounded-[42px] border-4 border-[#E5E5E5] p-6 h-[280px] flex flex-col justify-between">
      {/* Title */}
      <div className="text-left">
        <h3 className="text-xl font-bold text-black mb-2">
          From Idle<br />
          Space To<br />
          Interaction<br />
          Hub!
        </h3>
        <p className="text-gray-600 text-sm">One Island At A Time.</p>
      </div>
      
      {/* Device Interface Mockup */}
      <div className="bg-black rounded-2xl p-3 mt-4">
        <div className="bg-gray-900 rounded-xl p-3 relative">
          {/* Top Status Bar */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-white text-xs">03:27</div>
          </div>
          
          {/* Progress Bar */}
          <div className="bg-gray-700 rounded-full h-2 mb-3">
            <div className="bg-[#00CE44] h-2 rounded-full w-1/3"></div>
          </div>
          
          {/* Bottom Icons */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-[#00CE44] rounded-full"></div>
              <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
            </div>
            <div className="text-white text-xs">Device log</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionHubCard; 