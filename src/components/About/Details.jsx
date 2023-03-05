import Stack from "./Stack"
import SocialLinks from '../SocialLinks/SocialLinks'
import { FaDownload } from 'react-icons/fa'
const Details = () => {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  items-center gap-10">

                <div className="justify-center">
                    <div className="rounded-full overflow-hidden bg-gradient-to-r  via-[#ffe700]/5 from-[#851EED]/5 to-[#07C5D1]/5 devv-bg">
                        <img className="w-1/2 mx-auto rounded-full devv-img-skeleton h-auto" src="/assets/DevvSakib.png" alt="DevvSakib.png" />
                    </div>
                </div>
                <div className={`text-md tracking-wider z-[9999] font-[poppins]`}>
                    <p className="mb-3">I am a <span>Frontend Developer</span> with a working proficiency in React, HTML, CSS, JavaScript. Contributting to Open-Source daily. Open-source is the best way to connect with new people and it help to gain more knowledge.</p>
                    <p className="">I have a solid understanding of Tailwind, Bootstrap, SASS, and Git Version. I am currently building cool things to expand my experience.</p>
                    <div className="mt-5 devv-bg p-5 rounded-lg shadow-lg">
                        <p className="devvTextAnimation">Looking for the right opportunity. If you want you can contact with me.</p>
                    </div>
                </div>
                <div className="text-center md:col-span-2  mt-3 flex justify-center t">
                    <button className="gap-3 flex items-center justify-center devv-btn px-5 py-2 rounded  shadow-black/60 shadow-md">
                        <a href="/assets/devvsakib.pdf" download>
                            RESUME
                        </a>
                        <FaDownload />
                    </button>
                </div>
                <SocialLinks />
            </div>
            <div className="text-center  mt-40">
                <h2 className="devv-title text-3xl md:text-6xl inline">Stacks</h2>
                <Stack />
            </div>
        </div>
    )
}

export default Details