import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-[50vw] px-[10vw] flex flex-col justify-center items-center my-[10vw]'>
      <div className='text-[rgb(4,188,101)] text-[4.5vw] mb-[8vw]'>Unsere Leistungen</div>
      <div className='w-full flex flex-row gap-[6vw]'>
        <div className='rounded-[2vw] w-full h-full bg-[rgb(239,239,239)] flex-col flex items-center px-[2vw]  shadow-lg'>
          <div className='bg-[rgb(239,239,239)] rounded-full p-[1vw] relative top-[-3vw]'>
            <img className='h-[5vw]' src="/IconBagger.svg" alt="" />
          </div>
          <div className='text-green-500 relative top-[-4vw] font-bold text-[2vw] text-center'>
            Erd- und Baggerarbeiten
          </div>
          <div className=' w-full h-full flex-col justify-left text-[1.5vw] relative top-[-2vw] text-[rgb(52,52,52)] font-semibold border rounded-[1vw] p-[1vw]'>

            <div className='pb-[2vw] '>
              Aushub für Fundamente, Pools, Gräben oder Leitungen
            </div>
            <div className='pb-[2vw]'>
              Modellierung und Vorbereitung von Gelände und Untergründen
            </div>
            <div className=''>
              Einsatz moderner Bagger und Maschinen für präzise Ergebnisse
            </div>

          </div>
        </div>
        <div className='rounded-[2vw] w-full h-full bg-[rgb(239,239,239)] flex-col flex items-center px-[2vw] shadow-lg'>
          <div className='bg-[rgb(239,239,239)] rounded-full p-[1vw] relative top-[-3vw]'>
            <img className='h-[5vw]' src="/IconEngineer.svg" alt="" />
          </div>
          <div className='text-green-500 relative top-[-4vw] font-bold text-[2vw] text-center'>
            Pflaster- und Plattenverlegung
          </div>
          <div className=' w-full h-full flex-col justify-left text-[1.5vw] relative top-[-2vw] text-[rgb(52,52,52)] font-semibold border rounded-[1vw] p-[1vw]'>

            <div className='pb-[2vw] '>
            Verlegung von Pflastersteinen, Beton- und Natursteinplatten
            </div>
            <div className='pb-[2vw]'>
            Gestaltung von Einfahrten, Terrassen, Wegen und Höfen
            </div>
            <div className=''>
            Fachgerechter Aufbau von Tragschichten für langlebige Stabilität
            </div>

          </div>
        </div>
        <div className='rounded-[2vw] w-full h-full bg-[rgb(239,239,239)] flex-col flex items-center px-[2vw] shadow-lg'>
          <div className='bg-[rgb(239,239,239)] rounded-full p-[1vw] relative top-[-3vw]'>
            <img className='h-[5vw]' src="/IconStone.svg" alt="" />
          </div>
          <div className='text-green-500 relative top-[-4vw] font-bold text-[2vw] text-center'>
          L-Stein- und Mauerbau
          </div>
          <div className=' w-full h-full flex-col justify-left text-[1.5vw] relative top-[-2vw] text-[rgb(52,52,52)] font-semibold border rounded-[1vw] p-[1vw]'>

            <div className='pb-[2vw] '>
            Setzen von L-Steinen zur Hangsicherung oder Abgrenzung
            </div>
            <div className='pb-[2vw]'>
            Bau von Mauern, Beeteinfassungen und Treppenanlagen
            </div>
            <div className=''>
            Stabil, gerade und sauber ausgeführt – auch bei schwierigen Geländeverhältnissen
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services