import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import './css/header.css'
import MenuIcon from '@mui/icons-material/Menu';
// import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';


const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const navElement = [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
        { name: 'About', link: '/about' },
        // { name: 'NF Test', link: '/notfound' },
        { name: 'Contact', link: '/contact' }]

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
        setTimeout(() => {
            setAlertMsg(!alertMsg);
        }, 6000);
    }, [])


    if (alertMsg) {
        setTimeout(() => {
            setAlertMsg(!alertMsg);
        }, 3500);
    }

    return (
        <header className='flex z-99999 justify-between items-center relative p-0 py-5'>
            <div className="logo">
                <Link to="/">
                    <img src="assets/Logo.png" alt="DevvSakib Logo" />
                </Link>
            </div>

            <div
                className={`nav  transition delay-150 ease-in-out ${menuActive ? "" : "hidden"} `}
            >
                <button
                    className="text-3xl text-white md:hidden mb-4 closeBTN"
                    onClick={() => setMenuActive(!menuActive)}
                >
                    x
                </button>
                <div className="flex list-none flex-col items-center justify-center gap-[2rem] md:flex-row md:gap-[0.6rem] menu">
                    {navElement.map((e, key) => (
                        <Link to={e.link} key={key} className="navitem ml-4 hover:text-[#07C5D1] transition-colors delay-75 ease-in-out uppercase"
                        >
                            {
                                screenSize < 768 ? (
                                    <p
                                        onClick={() => setMenuActive(!menuActive)}
                                    >
                                        {e.name}
                                    </p>
                                ) : (
                                    <p>
                                        {e.name}
                                    </p>
                                )
                            }

                        </Link>
                    ))}
                    {/* <button className='ml-4' onClick={() => setTheme(!theme)}> */}
                    {/* {theme ? <FaSun /> : <FaMoon />} */}
                    {/* <img src={!theme ? "/assets/lightcat.png" : "/assets/darkcat.png"} className='w-8' alt="" /> */}
                    {/* </button> */}
                </div>
            </div>
            <button
                className="hamburger"
                onClick={() => setMenuActive(!menuActive)}
            >
                <MenuIcon className="text-[#07C5D1]" />
            </button>
            <motion.button
                drag="y"
                dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
                dragConstraints={{ left: 0, right: 0, top: -400, bottom: 10 }}
                whileDrag={{ scale: 1.2 }}
                whileHover={{
                    scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}

                className='fixed -left-0 bottom-0 w-28'
                onClick={() => setTheme(!theme)}
                aria-label="ThemeBtn"
                id="themeSwitcher"
            >
                {
                    alertMsg ? (
                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 25 }}
                            whileInView={{ scale: [0, 1.1] }}
                            transition={{ duration: .5, ease: "easeInOut", type: "spring", stiffness: 500, damping: 30 }}
                        >{theme ? "Dark Theme?" : "Light Theme?"}</motion.span>
                    ) : null
                }
                <img src={theme ? "/assets/test.png" : "/assets/test2.png"} className={`${theme ? 'rotate-0' : 'rotate-6'} 
                 origin-top-right w-16 z-10 transition-all ease-linear duration-500`} alt="" />
            </motion.button>
        </header >
    )
}

export default Header