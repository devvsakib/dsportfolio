import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
const SocialLinks = ({ theme }) => {
    return (
        <div className="text-xl mt-5 mx-auto grid grid-cols-4 gap-10 md:col-span-2 ">
            <a href="https://github.com/devvsakib" target="_blank" className="">
                <div className="flex gap-2 flex-col items-center bg-white devv-icon p-5 py-3 rounded-lg ">
                    <FaGithub className={`${!theme ? "text-white" : "text-black"} text-3xl`} />
                    GitHub
                </div>
            </a>
            <a href="https://linkedin.com/in/devvsakib" target="_blank" className="">
                <div className="flex gap-2 flex-col items-center bg-white devv-icon p-5 py-3 rounded-lg ">
                    <FaLinkedin className={`${!theme ? "text-white" : "text-black"} text-3xl`} />
                    LinkedIn
                </div>
            </a>
            <a href="https://facebook.com/devvsakib" target="_blank" className="">
                <div className="flex gap-2 flex-col items-center bg-white devv-icon p-5 py-3 rounded-lg ">
                    <FaFacebook className={`${!theme ? "text-white" : "text-black"} text-3xl`} />
                    Facebook
                </div>
            </a>
            <a href="https://discordapp.com/users/DevvSakib#3409" target="_blank" className="">
                <div className="flex gap-2 flex-col items-center bg-black/20 bg-white devv-icon p-5 py-3 rounded-lg ">
                    <FaDiscord className={`${!theme ? "text-white" : "text-black"} text-3xl`} />
                    Discord
                </div>
            </a>
        </div>
    )
}

export default SocialLinks