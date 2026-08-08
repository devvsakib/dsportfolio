import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import './css/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const location = useLocation();

    const navElement = [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' }
    ];

    const [alertMsg, setAlertMsg] = useState(false);
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlertMsg((prev) => !prev);
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (alertMsg) {
            const hideTimer = setTimeout(() => {
                setAlertMsg(false);
            }, 3500);
            return () => clearTimeout(hideTimer);
        }
    }, [alertMsg]);

    return (
        <header className='flex z-50 justify-between items-center relative p-0 py-5'>
            {/* <div className="logo z-50">
                <Link to="/">
                    <img src="assets/Logo.png" alt="DevvSakib Logo" className="h-8 md:h-10 object-contain" />
                </Link>
            </div> */}

            <div
                className={`fixed md:relative top-0 left-0 w-full h-screen md:h-auto ${
                    theme ? 'bg-white/95 md:bg-transparent' : 'bg-slate-950/90 md:bg-transparent'
                } backdrop-blur-2xl md:backdrop-blur-none flex flex-col md:flex-row items-center justify-center transition-all duration-300 ease-in-out z-40 ${
                    menuActive ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-full md:translate-x-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
                }`}
            >
                {/* Mobile Menu Close Button */}
                <button
                    className={`absolute top-6 right-8 text-2xl md:hidden w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                        theme ? 'text-gray-800 bg-black/5 hover:bg-black/10' : 'text-gray-400 bg-white/10 hover:text-white'
                    }`}
                    onClick={() => setMenuActive(!menuActive)}
                    aria-label="Close menu"
                >
                    ✕
                </button>

                <div className="flex list-none flex-col items-center justify-center gap-8 md:flex-row md:gap-6 menu">
                    {navElement.map((e, key) => {
                        const isActive = location.pathname === e.link;
                        return (
                            <Link
                                to={e.link}
                                key={key}
                                onClick={() => screenSize < 768 && setMenuActive(false)}
                                className={`relative navitem text-xl md:text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
                                    isActive
                                        ? "text-cyan-500 font-bold"
                                        : theme
                                        ? "text-slate-800 hover:text-cyan-500"
                                        : "text-gray-300 hover:text-cyan-400"
                                }`}
                            >
                                <p>{e.name}</p>
                                {/* Active Underline Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNavIndicator"
                                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-500 rounded-full shadow-[0_0_8px_#07C5D1]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Hamburger Button */}
            <button
                className="hamburger md:hidden z-50 p-2 focus:outline-none"
                onClick={() => setMenuActive(!menuActive)}
                aria-label="Toggle menu"
            >
                <MenuIcon className="text-cyan-500 !text-3xl" />
            </button>

            {/* Floating Theme Switcher */}
            <motion.button
                drag="y"
                dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
                dragConstraints={{ left: 0, right: 0, top: -400, bottom: 10 }}
                whileDrag={{ scale: 1.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className='fixed -left-0 bottom-0 w-28 z-50'
                onClick={() => setTheme(!theme)}
                aria-label="ThemeBtn"
                id="themeSwitcher"
            >
                {alertMsg ? (
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        whileInView={{ scale: [0, 1.1] }}
                        transition={{ duration: .5, ease: "easeInOut", type: "spring", stiffness: 500, damping: 30 }}
                    >
                        {theme ? "Dark Theme?" : "Light Theme?"}
                    </motion.span>
                ) : null}
                <img
                    src={theme ? "/assets/test.png" : "/assets/test2.png"}
                    className={`${theme ? 'rotate-0' : 'rotate-6'} origin-top-right w-16 z-10 transition-all ease-linear duration-500`}
                    alt="Theme Mascot"
                />
            </motion.button>
        </header>
    );
};

export default Header;