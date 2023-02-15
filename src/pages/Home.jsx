import React from 'react'
import HeroSection from '../components/Herosection/HearoSection'
import Notice from '../components/Notice/Notice'

const Home = () => {
    return (
        <div className='md:h-[70vh] sm:h-auto smflex sm:items-center'>

            <Notice />
            <HeroSection />
        </div>
    )
}

export default Home