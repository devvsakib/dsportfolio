import React from 'react'
import HeroSection from '../components/Herosection/HearoSection'
import Layout from '../components/Layout'

const Home = () => {
    return (
        <div className='md:h-[70vh] sm:h-auto smflex sm:items-center'>
            <HeroSection />
        </div>
    )
}

export default Home