const Stack = () => {
    const stacksFrontend = ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Bootstrap", "Sass"]
    const stacksBackend = ["Node.js", "Express", "MongoDB", "RestAPI"]
    return (

        <div className="mt-5 mb-20  grid grid-cols-1 lg:grid-cols-2  gap-y-10 gap-x-32">
            <div className="flex flex-col">
                <h2 className="devv-title text-left text-4xl inline-block">Frontend</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                    {
                        stacksFrontend?.map((item, idx) => (
                            <button key={idx} className="devv-btn">{item}</button>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-left devv-title text-4xl inline-block">Backend</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

                    {
                        stacksBackend?.map((item, idx) => (
                            <button key={idx} className="devv-btn">{item}</button>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Stack