import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-between items-center px-4 lg:px-20 py-4 gap-[6vw] mb-[6vw]'>

      <div className='w-[50%]' >
        <div>
          <div className='text-[rgb(52,52,52)] text-[5.5vw] h-[5.5vw] '>Bauen mit</div>
          <div className='flex items-center gap-[12px]'>
            <div className='text-[rgb(4,188,101)] text-[5.5vw] '>vertrauen</div>
            <div><img className='w-[6vw]' src="/public/IconHandshake.svg" alt="" /></div>
          </div>
        </div>

        <div className='text-[rgb(115,115,115)] text-[2.5vw]'>
        Ihr zuverlässiger Partner für Garten- und Landschaftsbau. Von der Planung bis zur Umsetzung – alles aus einer Hand.
        </div>

        
          <button className='flex justify-between items-center text-white bg-gradient-to-r from-[rgb(4,188,101)] to-[rgb(1,121,65)] py-2 px-4 rounded-[0.5vw] mt-[4vw] text-[2.5vw] font-semibold gap-2 shadow-[0_0_8px_rgb(4,188,101)] transition-all duration-500 hover:scale-105 hover:ml-[2%]'>
            Unsere Projekte ansehen
            <img className='h-[3.5vw]' src="/IconArrowDown.svg" alt="" />
          </button>
          
       
        
        
      </div>

      <div className='h-[35vw] w-[50vw] shadow-lg mt-[3vw] mb-[3vw] rounded-[12px]'>
        <img className='w-full h-full object-cover object-center rounded-[12px] ' src="/public/Hero2.png" alt="" />
      </div>

    </div>
  )
}

export default Hero
