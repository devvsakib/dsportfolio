import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const NotFound = () => {
    const meme = ["/assets/lost.gif", "/assets/lost1.gif", "/assets/lost2.gif", "/assets/lost3.gif"]
    const [lostMeme, setLostMeme] = useState('')
    const [genNumber, setGenNumber] = useState(null)

    const genMeme = () => {
        const randomNumber = Math.floor(Math.random() * meme.length)
        setLostMeme(meme[randomNumber])
        setGenNumber(randomNumber)
        return randomNumber
    }
    useEffect(() => {
        setGenNumber(genMeme())
    }, [])

    return (
        <div className='w-full h-full flex items-center justify-center mt-10 md:mt-20'>
            <div className='text-center'>
                <button className='mb-1' onClick={e => genMeme()}>New Meme {genNumber}</button>
                <div className='w-90 h-72'>
                    <img className='w-full h-full border-[#882bbe] border-2' src={lostMeme ? lostMeme : meme[0]} alt="" srcset="" />
                </div>
                <h1 className='mt-5 text-3xl font-semibold'>Oh nooooo! You lost...</h1>
                <button className='devv-btn block mx-auto py-3 px-10 mt-5 rounded-full text-white hover:scale-110 transition-scale ease-linear duration-150'>
                    <Link to="/">Come Back Home</Link>
                </button>
            </div>
        </div>
    )
}

export default NotFound