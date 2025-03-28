import { Coffee, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#242424] text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold cursor-default">
        <span className="text-amber-500 ">Coffee</span>Script
      </div>

      {/* carrinho */}
      <button className="relative">
        <Coffee size={28} className="text-white hover:text-amber-500 transition-colors" />
       
        {/* qtd itens */}
        <span className="absolute -top-1 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
         0
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
