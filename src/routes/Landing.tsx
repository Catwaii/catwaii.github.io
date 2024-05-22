// import { Outlet, Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="home">
    <div className="flex flex-col min-h-screen bg-no-repeat bg-img-landing bg-cover bg-center container min-w-full">
      <div className="flex flex-col bg-black/10 m-0 p-0 min-h-screen">
        <div className="flex flex-col content-center mt-20 p-0">
          <div className="backdrop-blur-sm bg-black/50 content-center justify-center mt-20">
            <h2 className="font-mint_sans py-2 text-5xl leading-relaxed text-white text-center">
              We are compromised to providing a satisfying playtime
            </h2>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#282827] text-white hover:bg-gray-700 font-bold py-2 px-11 mt-8 rounded-lg items-center">
              About Us
            </button>
          </div>
        </div>
        <div className="flex-1 flex-grow"> </div>
        <div className="flex flex-col h-0 m-0 p-0 animate-pulse">
          <div className="animate-bounce mb-0 flex flex-col content-center items-center justify-center">
            <svg
              className="h-4 w-6 mb-0"
              width="48"
              height="30"
              viewBox="0 0 48 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 5.99998L42.36 0.359985L24 18.68L5.64 0.359985L0 5.99998L24 30L48 5.99998Z"
                fill="#0F0F0F"
                fill-opacity="0.8"
              />
            </svg>
            <svg
              className="h-4 w-6 mt-0"
              width="48"
              height="30"
              viewBox="0 0 48 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 5.99998L42.36 0.359985L24 18.68L5.64 0.359985L0 5.99998L24 30L48 5.99998Z"
                fill="#0F0F0F"
                fill-opacity="0.8"
              />
            </svg>
          </div>
        </div>
        <footer className="top-[100vh] mt-auto flex flex-col min-h-full">
          <div className="flex justify-end w-full mx-auto max-w-screen-xl p-4">
            <span className="mr-8 text-xs mb-0 flex flex-wrap items-end mt-3">
              &#169;ASCENT STUDIOS 2024
            </span>
          </div>
        </footer>
      </div>
    </div>
    </section>
  );
}
