import { FaMessage } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="container mx-auto h-auto bg-gray-800 flex items-center justify-between px-6 py-4 shadow-lg">
      {/* Left section with name */}
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold text-white">Ram dai</h2>
      </div>

      {/* Right section with message icon and profile */}
      <div className="flex items-center gap-6">
        {/* Message icon */}
        <FaMessage className="text-white text-2xl hover:text-blue-400 cursor-pointer transition-colors" />

        {/* Profile picture */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-500">
            <img src="" alt="he" className="w-full h-full object-cover" />
          </div>
          {/* Optional notification indicator */}
          <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
