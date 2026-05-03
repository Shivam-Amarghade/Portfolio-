import { FaArrowRight } from "react-icons/fa6";
import { navMenu } from "../assets/asstes";
export default function Navbar() {
  console.log(navMenu);
  return (
    <div className="fixed w-full py-4 z-50">
      <div className="max-w-7x1 mx-auto px-6">
        <div div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-zinc-800">
            {/* logo*/}
            <span>THE-</span>
            <span className="text-teal-800 font-orbitron">SHIVAM -AMARGHADE</span>
          </div>
          {/* navlinks */}
          <div className="hidden md:flex space-x-8 border border-gray-200 rounded-full px-10 py-4">
            {navMenu.map((item, index) => {
              return (
                <a key={index} href={`#${item}`}>
                  {item}
                </a>
              );
            })}
          </div>
          {/* button resume */}
          <div>
            <a href="https://drive.google.com/file/d/1vh3MlpnToQxOOVHTbQesUMP9duFy1E05/view?usp=drive_link">
              <button className="px-10 py-4 border border-zinc-800 rounded-full  flex items-center gap-2 cursor-pointer  text-slate-500 hover:text-slate-800 hover:translate-y-1 transition duration-300">
                Resume
                <FaArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
