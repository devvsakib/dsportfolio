import Stack from "./Stack"
import MovingText from 'react-moving-text'
import SocialLinks from '../SocialLinks/SocialLinks'

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
                <SocialLinks/>
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