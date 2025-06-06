import {LogOut} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-[#4B2E2B] text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold cursor-default">
        <span className="text-white ">Coffee</span> Script
      </div>
      
      


      {/* logout button */}
      <button className="relative" onClick={() => navigate("/")}>
        <LogOut size={28} className="text-white hover:text-gray-300 transition-colors" />
       
        {/* logout text */}
        <span className="absolute -top-0 -left-10 text-xs text-white w-7 h-7 flex items-center justify-center rounded-full">
         Logout
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
