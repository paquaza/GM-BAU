import React from 'react'

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu')

    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden')
    } else {
      mobileMenu.classList.add('hidden')
    }
  }

  return (
    <header className='flex justify-between items-center py-4 px-4 lg:px-20 sticky top-0 bg-white shadow-md z-50'>
      <img className='h-[40px]' src="/public/GMBauLogo.png" alt="" />

      <nav className='hidden md:flex items-center gap-12 z-50'>
        <a className='text-[rgb(52,52,52)] tracking-wider transition-all hover:text-[rgb(4,188,101)] hover:scale-105 duration-300' href="">Startseite</a>
        <a className='text-[rgb(52,52,52)] tracking-wider transition-all hover:text-[rgb(4,188,101)] hover:scale-105 duration-300' href="">Leistungen</a>
        <a className='text-[rgb(52,52,52)] tracking-wider transition-all hover:text-[rgb(4,188,101)] hover:scale-105 duration-300' href="">Über uns</a>
        <a className='text-[rgb(52,52,52)] tracking-wider transition-all hover:text-[rgb(4,188,101)] hover:scale-105 duration-300' href="">Projekte</a>
      </nav>

      <button className='hidden md:block bg-gradient-to-r from-[rgb(4,188,101)] to-[rgb(1,121,65)] text-white py-2 px-4 rounded-[0.5vw] border-none font-medium transition-all duration-500 hover:scale-110 shadow-[0_0_8px_rgb(4,188,101)]'>
        Kontakt
      </button>

      <button onClick={toggleMobileMenu} className='md:hidden z-50'>
        <img className='h-[32px]' src="/public/IconMenu.svg" alt="" />
      </button>

      <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z:40 bg-black bg-opacity-40 backdrop-blur-md'>
        <nav className='flex flex-col gap-6 items-center'>
          <a className='text-white tracking-wider transition-all hover:text-[rgb(4,188,101)] hover:scale-105 duration-300' href="">Startseite</a>
          <a className='text-white tracking-wider transition-all hover:text-[rgb(4,188,101)] hover:scale-105 duration-300' href="">Leistungen</a>
          <a className='text-white tracking-wider transition-all hover:text-[rgb(4,188,101)] hover:scale-105 duration-300' href="">Über uns</a>
          <a className='text-white tracking-wider transition-all hover:text-[rgb(4,188,101)] hover:scale-105 duration-300' href="">Projekte</a>
        </nav>
      </div>

    </header>
  )
}

export default Header
