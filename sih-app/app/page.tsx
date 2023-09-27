import Topbar from "./components/topbar";
import React from "react";
export default function Login() {
  return (
    <div><div id="login">
      <Topbar />
    </div>

      {/* <section className="mb-32">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://www.evereducating.com/wp-content/uploads/2019/01/College-Group-Project-Students-Enjoy-676x442.jpeg')] h-[500px]">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">
                  Are you ready <br /><span>to be inspired?</span>
                </h2>
                <button type="button"
                  className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init data-te-ripple-color="light">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container my-24 mx-auto md:px-6">
        <section className="background-radial-gradient mb-32 card">
          

          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="flex items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mb-10 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                    Are you ready to be <br /><span className="text-[hsl(218,81%,75%)]">Inspired?</span>
                  </h1>
                  <a className="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-neutral-200 shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Login</a>
                  <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Sign Up</a>
                </div>
                <div className="mb-12 pl-28 lg:mb-0">
                  <img src="\Idea Rocket.png"
                    className="w-72 " alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-1">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl">Features</h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" />
              </div>
              <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">View Inspiring Projects</h2>
              <p className="text-base leading-relaxed mt-2">Discover inspiring student projects that showcase innovation and creativity from universities and colleges nationwide.Explore fresh ideas and groundbreaking work.</p>

            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://www.livemint.com/lm-img/img/2023/06/26/1600x900/LSpic_1687802786057_1687802791445.jpeg" />
              </div>
              <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">Showcase your talent</h2>
              <p className="text-base leading-relaxed mt-2">Explore innovative student projects from universities nationwide, gaining insights into groundbreaking creativity that shapes the future.</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://mycare.co.in/wp-content/uploads/2020/12/Connect.jpeg" />
              </div>
              <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">Connect with people</h2>
              <p className="text-base leading-relaxed mt-2">Connect with like-minded individuals, fostering collaborations, and building a network of passionate innovators, all eager to make a difference.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://fltmag.com/wp-content/uploads/2020/06/unnamed.png" />
              </div>
              <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">Fostering Community  </h2>
              <p className="text-base leading-relaxed mt-2">Fostering community through shared knowledge, collaboration, and support, creating a vibrant space for innovation and growth among students and mentors.</p>

            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://www.float.com/static/e1b7532ec089da4b5db9c999be069254/da697266-5b6a-4b9c-a5b4-6b814a458fd8_project-status-report.png" />
              </div>
              <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">Status of projects</h2>
              <p className="text-base leading-relaxed mt-2">Track the progress and achievements of student projects, from inception to completion, and witness their transformative journey in real time.</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://nepsprint.com/cdn/shop/articles/copyright-symbol-P74A2YB_1024x1024.jpg?v=1632720359" />
              </div>
              <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">Copyright assurance</h2>
              <p className="text-base leading-relaxed mt-2">We do not permit projects that have been previously posted by others, ensuring the uniqueness and integrity of every submission.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-5 mt-14 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/3 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
              <p className="leading-relaxed text-xl">Users</p>
            </div>
            <div className="p-4 sm:w-1/3 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">10.8K</h2>
              <p className="leading-relaxed text-xl">Projects</p>
            </div>
            <div className="p-4 sm:w-1/3 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">145</h2>
              <p className="leading-relaxed text-xl">Institutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}