import Stack from "./Stack"
const Details = () => {
    return (
        <div className="mt-10">
            <p>I am a <span>Frontend Developer</span> with a working proficiency in React, HTML, CSS, JavaScript.</p>
            <p>I have a solid understanding of Tailwind, Bootstrap, SASS, and Git Version. I am currently building cool things to expand my experience.</p>
            <div className="text-center  mt-40">
                <h2 className="devv-title text-3xl md:text-6xl inline">Weapon I use</h2>
                <Stack />
            </div>
        </div>
    )
}

export default Details