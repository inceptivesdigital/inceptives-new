import React from 'react';

const TeamAvatarsCard = () => {
  return (
    <div className="bg-[#00CE44] rounded-[42px] border-4 border-[#00CE44] p-6 h-[200px] flex flex-col justify-center items-center">
      {/* Avatar Row */}
      <div className="flex -space-x-3">
        {/* Avatar 1 */}
        <div className="w-14 h-14 rounded-full border-3 border-white overflow-hidden bg-gray-200">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
            1
          </div>
        </div>
        
        {/* Avatar 2 */}
        <div className="w-14 h-14 rounded-full border-3 border-white overflow-hidden bg-gray-200">
          <div className="w-full h-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white font-bold">
            2
          </div>
        </div>
        
        {/* Avatar 3 */}
        <div className="w-14 h-14 rounded-full border-3 border-white overflow-hidden bg-gray-200">
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-bold">
            3
          </div>
        </div>
        
        {/* Avatar 4 */}
        <div className="w-14 h-14 rounded-full border-3 border-white overflow-hidden bg-gray-200">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">
            4
          </div>
        </div>
        
        {/* +6 Badge */}
        <div className="w-14 h-14 rounded-full border-3 border-white bg-white flex items-center justify-center">
          <span className="text-[#00CE44] font-bold text-lg">+6</span>
        </div>
      </div>
    </div>
  );
};

export default TeamAvatarsCard; 