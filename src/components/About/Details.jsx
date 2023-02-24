import Stack from "./Stack"
import MovingText from 'react-moving-text'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Details = () => {
    return (
        <div className="mt-10 z-[9999999999999999999999999]">
            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-10">
                <div className="rounded-full overflow-hidden bg-gradient-to-r  via-[#ffe700]/5 from-[#851EED]/5 to-[#07C5D1]/5 devv-bg">
                    <img className="w-1/2 mx-auto rounded-full" src="/assets/DevvSakib.png" alt="" />
                </div>
                <div className="text-md tracking-wider font-[poppins] text-white">
                    <p className="mb-3">I am a <span>Frontend Developer</span> with a working proficiency in React, HTML, CSS, JavaScript. Contributting to Open-Source daily. Open-source is the best way to connect with new people and it help to gain more knowledge.</p>
                    <p className="">I have a solid understanding of Tailwind, Bootstrap, SASS, and Git Version. I am currently building cool things to expand my experience.</p>
                    <div className="mt-5 devv-bg p-5 rounded-lg shadow-lg">
                        <p className="devvTextAnimation">Looking for the right opportunity. If you want you can contact with me.</p>
                    </div>
                </div>
                <div className="text-xl mt-10 mx-auto flex gap-10 col-span-2 ">
                    <a href="https://github.com/devvsakib" target="_blank" className="">
                        <div className="flex gap-2 flex-col items-center bg-white devv-icon p-5 py-3 rounded-lg ">
                            <FaGithub className="text-white text-3xl" />
                            GitHub
                        </div>
                    </a>
                    <a href="https://linkedin.com/in/devvsakib" target="_blank" className="">
                        <div className="flex gap-2 flex-col items-center bg-white devv-icon p-5 py-3 rounded-lg ">
                            <FaLinkedin className="text-white text-3xl" />
                            LinkedIn
                        </div>
                    </a>
                    <a href="https://facebook.com/devvsakib" target="_blank" className="">
                        <div className="flex gap-2 flex-col items-center bg-white devv-icon p-5 py-3 rounded-lg ">
                            <FaFacebook className="text-white text-3xl" />
                            Facebook
                        </div>
                    </a>
                    <a href="https://discordapp.com/users/DevvSakib#3409" target="_blank" className="">
                        <div className="flex gap-2 flex-col items-center bg-white devv-icon p-5 py-3 rounded-lg ">
                            <FaDiscord className="text-white text-3xl" />
                            Discord
                        </div>
                    </a>
                </div>
            </div>
            <div className="text-center  mt-40">
                <MovingText
                    type="unfold"
                    duration="1000ms"
                    delay="index * 100ms"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <h2 className="devv-title text-3xl md:text-6xl inline">Stacks</h2>
                </MovingText>
                <Stack />
            </div>
        </div>
    )
}

export default Details