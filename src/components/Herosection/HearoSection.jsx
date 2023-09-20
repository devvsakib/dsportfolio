import './css/herosection.css'
const HeroSection = () => {
    return (
        <>
            <div className="circle"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
            <section className='z-99 hero-sec p-0 h-[60vh]'>
                <div className='lg:w-[1200px] w-auto mx-auto'>
                    <div className='text-[#AD30FA]'><span className='text-[#FFF506]'>{'('}</span>{'function()'}<span className='text-[#FFF506]'>{'{'}</span>
                        <div className='sm:pl-[5rem] sm:py-10 py-3'>
                            <table className='table-auto'>
                                <tbody>
                                    <tr><td><span className='text-[#07C5D1]'>greeting</span></td><td><span className='text-[#E02AAD] mx-6'>=</span></td><td><span className='text-[#A026FF]'><span className='quat'>"</span>Hi! Im<span className='quat'> "</span></span></td></tr>
                                    <tr><td><span className='text-[#07C5D1]'>name</span></td><td><span className='text-[#E02AAD] mx-6'>=</span></td><td><span className='devvsakib'>"Sakib Ahmed"</span></td></tr>
                                    <tr className='-mt-5'><td><span className='text-[cc]'>cj</span></td><td><span className='text-[#E02AAD] mx-6'>=</span></td><td><span className='text-[#AD62F8] intro'><span className='quat'>"</span>Frontend Developer at <span className='text-[#07d1c0]'><a href="https://shunyeka.com">ShunyEka System Private LTM</a></span> <span className='quat'> "</span></span></td></tr>
                                    <tr><td><span className='text-[cc]'>intro</span></td><td><span className='text-[#E02AAD] mx-6'>=</span></td><td><span className='text-[#AD62F8] intro'><span className='quat'>"</span>Frontend Developer | WordPress Expert | Open-source Advocate. Learning is the key of success. Help other, Learn more. <span className='quat'> "</span></span></td></tr>
                                </tbody>
                            </table>

                        </div>
                        <span className='text-[#FFF506]'>{'})()'}</span></div>
                </div>
                {/* <div className='flex flex-col md:flex-row w-[80vw] lg:w-[80vw] sm:justify-center items-center mx-auto sm:h-auto h-[300px] justify-evenly '>

                    <p className='text-4xl relative left-[-100px] opacity-30'>href="/</p>
                    <div className="button1 sm:pr-3" >
                        <Link to="/contact">
                            <span className='bg-[#01041E] px-10 hover:bg-[#AD30FA] hover:text-[#FFF506] ease-in  duration-150 py-3 border-2 border-[#AD30FA] rounded-md'>{`<Get In Touch/>`}</span>
                        </Link>
                    </div>
                    <div className="button2 sm:pl-3">
                        <Link to="/contact">
                            <span className='text-[#FFF506] hover:bg-[#01041E] hover:text-[#AD30FA] ease-in duration-150 bg-[#AD30FA] px-10 py-3 border-2 border-[#AD30FA] rounded-md'>{`<Get In Touch/>`}</span>
                        </Link>
                    </div>
                    <p className='text-4xl relative right-[-100px] opacity-30'>"</p>

                </div> */}
            </section>
        </>
    )
}

export default HeroSection