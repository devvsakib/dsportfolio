import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import './css/header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const navElement = [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact', link: '/contact' }]
    const [menuActive, setMenuActive] = useState(false);
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (screenSize < 768) {
            setMenuActive(false);
        } else {
            setMenuActive(true);
        }
    }, [screenSize]);

    return (
        <header className='flex z-99999 justify-between items-center relative '>
            <div className="logo">
                <Link to="/">
                <img src="assets/Logo.png" alt="" srcSet="" />
                </Link>
            </div>

            <div
                className={`nav  transition delay-150 ease-in-out ${menuActive ? "" : "hidden"} `}
            >
                <button
                    className="text-3xl text-white md:hidden mb-4"
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <CloseIcon className="text-white font-bold" />
                </button>
                <div className="flex list-none flex-col items-center justify-center gap-[2rem] md:flex-row md:gap-[0.6rem] menu">
                    {navElement.map((e, key) => (
                        <Link to={e.link} key={key} className="navitem ml-4 hover:text-[#07C5D1] transition-colors delay-75 ease-in-out"
                        >
                            {e.name}
                        </Link>
                    ))}
                </div>
            </div>
            <button
                className="hamburger "
                onClick={() => setMenuActive(!menuActive)}
            >
                <MenuIcon className="text-[#07C5D1]" />
            </button>
        </header >
    )
}

export default Header