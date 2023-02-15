import React from 'react'

const Notice = () => {
  return (
    <div className='absolute bg-transparent top-20 right-10 md:right-36 md:top-28 text-center'>
        <span className='text-black absolute top-12 md:top-14  text-[8px] md:text-[10px] left-[24px] md:left-[29px] skew-x-12 skew-y-12'>Coding..</span>
        <img src="/assets/cat.gif" className='w-32 md:w-40' alt="" />
        <p className="text-[12px]">Building in progress...<br/>Ignore me</p>
    </div>
  )
}

export default Notice