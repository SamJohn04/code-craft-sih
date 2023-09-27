import Topbar from "./components/topbar";
import React from "react";
export default function Login() {
  return (
    <div><div id="login">
      <Topbar />
    </div>


      <section className="mb-32">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/006.webp')] h-[500px]">
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
      </section>
    </div>
  )
}