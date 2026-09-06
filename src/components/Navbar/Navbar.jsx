import logoWhite from "../../assets/navbar/logoWhite.svg"
import logoCoklat from "../../assets/navbar/logoCoklat.svg"
import belanjaWhite from "../../assets/navbar/belanjaWhite.svg"
import belanjaBlack from "../../assets/navbar/belanjaBlack.svg"
import Button from "../ui/Button"
import { useState, useEffect } from 'react';

const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
    <header
    className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
    <nav className="w-full h-33 px-14.75 flex items-center justify-between">
        <div className="flex gap-30">
        <img src={isScrolled ? logoCoklat : logoWhite} alt="logo" />
        <ul
            className={`flex justify-between items-center w-91.25 font-medium text-[18px] transition-colors duration-300
            ${isScrolled ? 'text-black' : 'text-white'}`}
        >
            <li>Home</li>
            <li>Forum</li>
            <li>Blog</li>
            <li>E-Commerce</li>
        </ul>
        </div>
        <div className="flex gap-20">
        <img src={isScrolled ? belanjaBlack : belanjaWhite} alt="" />
        <div className="flex justify-center items-center gap-5">
            
            <a href="#"
            className={`text-[18px] font-normal transition-colors duration-300
                ${isScrolled ? 'text-button' : 'text-white'}`}
            >
            Log in
            </a>
            <Button className="w-29.75 h-12.25">Sign up</Button>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar