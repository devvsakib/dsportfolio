import React from 'react'

const Notice = () => {
  return (
    <div className='absolute z-[99999] bg-transparent top-20 right-10 md:right-36 md:top-28 text-center'>
        <span className='absolute top-12 md:top-14  text-[8px] md:text-[10px] left-[24px] md:left-[29px] skew-x-12 skew-y-12'>Coding..</span>
        <img src="/assets/cat.gif" className='w-32 md:w-40' alt="" />
        <p>Building in progrress...</p>
    </div>
  )
}

export default Notice