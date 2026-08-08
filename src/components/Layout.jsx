import React from 'react'

export default function Layout({ children }) {
  return (
    <main className='px-4 sm:px-[2rem] max-w-[1240px] mx-auto'>
      {children}
    </main>
  )
}
