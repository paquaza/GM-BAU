import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex-col flex justify-center items-center px-[10vw]'>
      <div className='text-[rgb(4,188,101)] text-[4.5vw] mb-[6vw]'>Über uns</div>
      <div className='flex flex-row text-[1.5vw] gap-[5vw]'>
        <div className='bg-[rgb(221,221,221)] w-[35vw] h-[35vw] flex justify-center items-center rounded-[1vw] shadow-lg'>Bild von Wilhelm und Julius</div>
        <div className='w-[50%] flex-col flex justify-between'>
          <div className='font-bold text-[rgb(4,188,101)]'>
            "Mit Leidenschaft für das Handwerk und einem Blick fürs Detail gestalten wir nicht nur Außenanlagen – wir schaffen Werte, die bleiben."
          </div>
          <div className='text-[rgb(52,52,52)]'>
          Wir haben unser Unternehmen im Jahr 2024 in Eichenzell gegründet – mit dem Wunsch, Garten- und Landschaftsbau auf unsere Art umzusetzen: ehrlich, zuverlässig und mit vollem Einsatz. Was mit einem Bagger, viel Motivation und einem klaren Qualitätsanspruch begonnen hat, ist heute ein eingespieltes Team, das Projekte mit Leidenschaft und Präzision realisiert.
          Vom ersten Spatenstich bis zur fertigen Außenanlage – für uns zählt jedes Detail, und vor allem: die Zufriedenheit unserer Kunden.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
