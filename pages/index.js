import Head from 'next/head'
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Alkemy</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main >

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

        <div className="mx-auto max-w-screen-xl">


          <div className="pt-16 pb-5 px-8  flex flex-col lg:flex-row justify-center">
            <div className="px-8 w-5/12 hidden lg:flex">
              <img src="/nosotros-personas.jpg" alt="nosotros" />
            </div>
            <div className="pt-6">
              <h2 className="text-sm sm:text-base text-blue-500 font-semibold tracking-wide uppercase">Alkemy Labs </h2>
              <h3 className="text-2xl font-bold leading-7 text-gray-900 mt-3 sm:text-3xl sm:truncate">Nuestra metodología 100% online:</h3>
              <ul>
                <div className="flex pt-4 lg:pt-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                  <li>Capacitaciones en proyectos de uso real</li></div>
                <div className="flex pt-4 lg:pt-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg><li>Coaching y mentoreo 1:1 con expertos</li></div>

                <div className="flex pt-4 lg:pt-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg><li>Conexión con empresas de todo el mundo</li></div>
                <div className="flex pt-4 lg:pt-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg><li>¡Te acercamos a tu primer empleo Tech!</li></div>
              </ul>
            </div>
          </div>

          <div className="pt-16 pb-5 mx-auto px-8">

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
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 ">
          <div className="mx-auto max-w-screen-xl py-16 text-center">
            <h3 className="text-3xl font-bold leading-7 py-4 mb-8 text-white sm:text-4xl">Conoce a nuestros mentores</h3>

            <div className="flex flex-col lg:flex-row">

              <div className="bg-white my-6 text-center mx-5 px-4 pt-4 pb-8 rounded-lg shadow-lg lg:w-1/3">
                <img className="w-24 h-24 mb-4  rounded-full mx-auto" src="/lucho.png" alt="lucho" />
                <h2 className="text-lg font-semibold text-blue-500">Luciano Allegro </h2>
                <h4 className="mt-3 text-base font-medium text-gray-600">CTO | DrApp</h4>
                <img className="w-6 h-6 my-4 mx-auto" src="/linkedin.png" alt="" />
              </div>

              <div className="bg-white my-6 text-center mx-5 px-4 pt-4 pb-8 rounded-lg shadow-lg lg:w-1/3">
                <img className="w-24 h-24  mb-4  rounded-full mx-auto" src="/alan.png" alt="alan" />
                <h2 className="text-lg font-semibold text-blue-500">Alan Algamis</h2>
                <h4 className="mt-3 text-base font-medium text-gray-600">Full stack developer | Roby.ai</h4>
                <img className="w-6 h-6 my-4 mx-auto" src="/linkedin.png" alt="" />
              </div>

              <div className="bg-white my-6 text-center mx-5 px-2 pt-4 pb-8 rounded-lg shadow-lg lg:w-1/3">
                <img className="w-24 h-24 mb-4 rounded-full mx-auto" src="/jpaillet.png" alt="jpaillet" />
                <h2 className="text-lg font-semibold text-blue-500">Juan Pablo Paillet</h2>
                <h4 className="mt-3 text-base font-medium text-gray-600">Full stack developer | Appstract</h4>
                <img className="w-6 h-6 my-4 mx-auto" src="/linkedin.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mx-auto max-w-screen-xl py-24 text-center">
            <h3 className="text-3xl font-bold leading-7 py-4 text-black sm:text-4xl">ALKEMY PARTNERS </h3>
            <p className="my-4 mx-2">Estas son algunas de las empresas que trabajan con nosotros </p>

            <div className="mx-auto max-w-screen-lg">
              <ul className="flex flex-wrap justify-center items-center">

                <li className="px-4 py-3"><img className="h-16" src="/s21.png" alt="" /></li>
                <li className="px-4 py-3"><img className="h-24" src="/logo-reversed.svg" alt="" /></li>
                <li className="px-4 py-3"><img className="h-16" src="/apptitude.png" alt="" /></li>
                <li className="px-4 py-3"><img className="h-24" src="/diwa.png" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
