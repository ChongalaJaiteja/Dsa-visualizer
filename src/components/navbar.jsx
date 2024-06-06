import { useState } from "react";
import SideBar from "./sidebar";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList = darkMode ? ["light"] : ["dark"];
    };

    return (
        <nav className="sticky top-0 flex items-center bg-red-300 px-2 py-4 text-primary shadow  sm:px-5 md:px-8 md:shadow-lg xl:px-10">
            <SideBar />
            <h1 className="xs:text-lg grow text-center text-sm font-extrabold capitalize  text-primary md:text-xl lg:text-2xl">
                dsa visualizer
            </h1>
            <div className="cursor-pointer text-3xl" onClick={toggleTheme}>
                {darkMode ? <IoSunnyOutline /> : <MdOutlineDarkMode />}
            </div>
        </nav>
    );
};

export default Navbar;
