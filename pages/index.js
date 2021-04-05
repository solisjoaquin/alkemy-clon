import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Alkemy</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      {/* navbar */}
      <div className="flex items-center justify-between h-16 lg:mx-8">
        <div className="flex-shrink-0"><img className="h-7 ml-8" src="/logo-header.png" alt="logo" /></div>
        <div className="mx-4 flex items-center">
          <a href="/">Home</a>
          <div className="rounded-lg bg-blue-700 px-4 mx-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cyan-500">Aplica</div>
        </div>
      </div>
      {/* end of navbar */}

      <main >
        {/*header */}
        <div className="flex flex-col pt-16 sm:flex-row bg-gradient-to-r from-blue-400 to-indigo-500 ">

          <div className="flex flex-col justify-center mx-auto px-8 py-5">
            <h2 className="text-sm sm:text-base text-indigo-200 font-semibold tracking-wide uppercase">¿Sabes programar y estas buscando trabajo?</h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight sm:text-6xl">¡Te ayudamos a conseguirlo!</h1>
            <p className="text-lg sm:text-2xl my-4 font-medium text-gray-100">
              Acelerate con Alkemy #Alkcelerate
            </p>
            <div className="rounded-md lg:w-1/2 shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                APLICA
              </a>
            </div>
          </div>

          <div className="mx-auto mt-4">
            <img src="/grafico-header.png" alt="header" />
          </div>
        </div>
        {/*End of header */}
        <div className="mx-auto max-w-screen-xl">
          {/* Lab section */}

          <div className="pt-16 pb-5 px-8  flex flex-col lg:flex-row justify-center">
            <div className="px-8 w-5/12 hidden lg:flex">
              <img src="/nosotros-personas.jpg" alt="nosotros" />
            </div>
            <div className="pt-6">
              <h2 className="text-sm sm:text-base text-blue-500 font-semibold tracking-wide uppercase">Alkemy Labs </h2>
              <h3 className="text-2xl font-bold leading-7 text-gray-900 mt-3 sm:text-3xl sm:truncate">Nuestra metodología 100% online:</h3>
              <ul>
                <div className="flex pt-4 lg:pt-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                  <li>Capacitaciones en proyectos de uso real</li></div>
                <div className="flex pt-4 lg:pt-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg><li>Coaching y mentoreo 1:1 con expertos</li></div>

                <div className="flex pt-4 lg:pt-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg><li>Conexión con empresas de todo el mundo</li></div>
                <div className="flex pt-4 lg:pt-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg><li>¡Te acercamos a tu primer empleo Tech!</li></div>
              </ul>
            </div>
          </div>
          {/* End of Lab section */}

          {/* steps */}
          <div className="pt-16 pb-5 mx-auto px-8 max-w-screen-xl mx-auto">
            <div className=" text-center">
              <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">Descubriendo Alkemy Labs en simples Pasos</h3>

              <div className="flex flex-col lg:flex-row">
                <div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4">
                  <div className="flex justify-center my-2">
                    <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-black">Convertite en un Alkimer</h4>
                  <p className="mt-3 text-base font-medium text-gray-600">Completa el formulario de inscripción y participa de un challenge de ingreso. </p>
                </div>
                <div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4">
                  <div className="flex justify-center my-2">
                    <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-black">Acelerando</h4>
                  <p className="mt-3 text-base font-medium text-gray-600">¡Comienza la transformación de tu carrera en un Lab intensivo de 10 semanas! </p>
                </div>
                <div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4">
                  <div className="flex justify-center my-2">
                    <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-black">Desarrollo profesional</h4>
                  <p className="mt-3 text-base font-medium text-gray-600">¡Preparate para transformarte en un profesional completo! Desarrolla tu perfil laboral y accede a coacheo para entrevistas.</p>
                </div>
                <div className="my-6 text-center mx-5 px-4 py-5 rounded-lg shadow-lg lg:w-1/4">
                  <div className="flex justify-center my-2">
                    <span className="h-10 w-10 bg-blue-500 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white">4</span>
                  </div>
                  <h4 className="text-lg font-semibold text-black">Contratación</h4>
                  <p className="mt-3 text-base font-medium text-gray-600">Presentarás tu reporte final a empresas Alkemy Partner de todo el mundo. ¡La oportunidad de tu primer empleo Tech está muy cerca! </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of steps */}
      </main>
      <footer className="py-16 px-8 lg:px-16 bg-gray-900 text-white">
        <div className="flex flex-col lg:flex-row mx-auto max-w-screen-xl justify-between">

          <div className="py-8 mx-4">
            <img className="h-7" src="/logo-footer.png" alt="logo" />
            <ul>
              <li className="mt-3"><a className="flex" href="mailto:contacto@alkemy.org"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>contacto@alkemy.org </a></li>
              <li className="mt-3"><a className="flex" href="tel:+541125936669"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg> +541125936669</a></li>
            </ul>
          </div>
          <div className="py-8 mx-4">
            <h4 className="text-lg font-semibold">Alkemy</h4>
            <ul><li className="mt-3"><a href="">Empresas</a></li></ul>

          </div>
          <div className="py-8 mx-4">
            <h4 className="text-lg font-semibold">Recursos</h4>
            <ul>
              <li className="mt-3"><a href="">Preguntas Frecuentes </a></li>
              <li className="mt-3"><a href="">Contacto</a></li>
            </ul>
          </div>
          <div className="py-8 mx-4">
            <h4 className="text-lg font-semibold">Seguinos</h4>
            <ul>
              <li className="mt-3"><a href="">Facebook</a></li>
              <li className="mt-3"><a href="">Linkedin</a></li>
              <li className="mt-3"><a href="">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
