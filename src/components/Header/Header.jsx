import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import './css/header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const navElement = [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
        { name: 'About', link: '/about' },
        // { name: 'NF Test', link: '/notfound' },
        { name: 'Contact', link: '/contact' }]
    const [menuActive, setMenuActive] = useState(false);
    const [screenSize, setScreenSize] = useState();
    const [theme, setTheme] = useState(false);

    theme ? document.body.style.background = "white" : document.body.style.background = ""

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
        <header className='flex z-99999 justify-between items-center relative p-0 py-5'>
            <div className="logo">
                <Link to="/">
                    <img src="assets/Logo.png" alt="" srcSet="" />
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
                    <button className='ml-4' onClick={() => setTheme(!theme)}>
                        {/* {theme ? <FaSun /> : <FaMoon />} */}
                        <img src={!theme ? "/assets/lightcat.png" : "/assets/darkcat.png"} className='w-8' alt="" />
                    </button>
                </div>
            </div>
            <button
                className="hamburger"
                onClick={() => setMenuActive(!menuActive)}
            >
                <MenuIcon className="text-[#07C5D1]" />
            </button>
            <button className='fixed -left-3 -bottom-3 w-28'
            onClick={() => setTheme(!theme)}
            >
                <img src="/assets/test.png" className={`${!theme && 'invert'}`} alt="" />
            </button>
        </header >
    )
}

export default Header