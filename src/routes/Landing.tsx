// import { Outlet, Link } from "react-router-dom";

export default function Landing() {
  return (
    // <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="flex flex-col min-h-screen bg-no-repeat bg-img-landing bg-cover bg-center container min-w-full">
      <div className="flex flex-col bg-black/10 m-0 p-0 min-h-screen">
        <div className="flex flex-col content-center m-0 p-0">
          <div className="backdrop-blur-sm bg-black/50 content-center justify-center mt-20">
            <h2 className="font-mint_sans py-2 text-5xl leading-relaxed text-white text-center">
              We are compromised to providing a satisfying playtime
            </h2>
          </div>

          <br />
          <div className="flex justify-center">
            <button className="bg-[#282827] text-white hover:bg-gray-700 font-bold py-2 px-11 mt-8 rounded-lg items-center">
              About Us
            </button>
          </div>
          <div className="flex flex-col h-10 m-0 p-0">
            <div className="mb-0 flex justify-center">
              <svg
                className="mt-2 h-5 w-5"
                fill="#000000"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </div>
            <div className="mt-0 flex justify-center">
              <br />
              <svg
                className="mt-0 pt-0 h-5 w-5"
                fill="#000000"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 grow"> </div>
        <footer className="top-[100vh] mt-auto flex flex-col min-h-full">
          <div className="flex justify-end w-full mx-auto max-w-screen-xl p-4">
            <span className="mr-8 text-xs mb-0 flex flex-wrap items-end mt-3">
              &#169;ASCENT STUDIOS 2024
            </span>
          </div>
        </footer>
      </div>
    </div>
    // </div>
  );
}
