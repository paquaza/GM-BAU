import React, { useState } from 'react'

const projects = [
  {
    id: 1,
    vorherImg: '',
    nachherImg: '',
    kundenZitat:
      '„Wir sind begeistert vom Ergebnis – professionell, pünktlich und sauber gearbeitet!“',
  },
  {
    id: 2,
    vorherImg: '',
    nachherImg: '',
    kundenZitat:
      '„Schnell, freundlich und das Ergebnis spricht für sich. Jederzeit wieder!“',
  },
  {
    id: 3,
    vorherImg: '',
    nachherImg: '',
    kundenZitat:
      '„Die Jungs haben unsere Einfahrt komplett verwandelt. Top Leistung!“',
  },
]

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevProject = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    )
  }

  const nextProject = () => {
    setActiveIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    )
  }

  const currentProject = projects[activeIndex]

  return (
    <div className="relative w-full py-[5vw] px-[5vw] overflow-hidden">
      {/* Titel */}
      <h2 className="text-center text-[rgb(4,188,101)] text-[4.5vw]  mb-[5vw]">
        Unsere Projekte
      </h2>

      <div className="relative w-full flex items-center justify-center">
        {/* Linker Pfeil */}
        <div className="absolute left-0 z-20">
          <button
            onClick={prevProject}
            className="w-[10vw] h-[10vw] md:w-[50px] md:h-[50px] bg-green-600 text-white rounded-full flex items-center justify-center text-[6vw] md:text-xl shadow-md hover:bg-green-700 transition"
          >
            ‹
          </button>
        </div>

        {/* Projektbox */}
        <div className="bg-white rounded-[3vw] shadow-lg w-full max-w-[90vw] md:max-w-[70vw] px-[5vw] py-[4vw] md:p-8 transition-all duration-500 ease-in-out">
          {/* Vorher/Nachher Bilder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vw] md:gap-6 mb-[5vw]">
            <div className="flex flex-col items-center">
              <p className="mb-2 font-semibold text-gray-700 text-[4vw] md:text-base">
                Vorher
              </p>
              <div className="w-full h-[40vw] md:h-[200px] bg-gray-300 rounded-[2vw] flex items-center justify-center text-gray-500">
                {/* <img src={currentProject.vorherImg} alt="Vorher" className="rounded-lg object-cover w-full h-full" /> */}
                Vorher-Bild
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 font-semibold text-gray-700 text-[4vw] md:text-base">
                Nachher
              </p>
              <div className="w-full h-[40vw] md:h-[200px] bg-gray-300 rounded-[2vw] flex items-center justify-center text-gray-500">
                {/* <img src={currentProject.nachherImg} alt="Nachher" className="rounded-lg object-cover w-full h-full" /> */}
                Nachher-Bild
              </div>
            </div>
          </div>

          {/* Kundenfeedback */}
          <div className="flex flex-col md:flex-row items-center mt-4">
            <div className="w-[15vw] h-[15vw] md:w-[60px] md:h-[60px] rounded-full bg-gray-400 mr-0 md:mr-4 mb-4 md:mb-0"></div>
            <p className="italic text-gray-600 text-[3.5vw] md:text-base text-center md:text-left">
              {currentProject.kundenZitat}
            </p>
          </div>
        </div>

        {/* Rechter Pfeil */}
        <div className="absolute right-0 z-20">
          <button
            onClick={nextProject}
            className="w-[10vw] h-[10vw] md:w-[50px] md:h-[50px] bg-green-600 text-white rounded-full flex items-center justify-center text-[6vw] md:text-xl shadow-md hover:bg-green-700 transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
