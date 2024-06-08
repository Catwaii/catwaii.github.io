import { useEffect, useState } from "react";
import ScrollArrowRoundedSvg from "../assets/icons/scroll_arrow_rounded.svg?react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (visualViewport !== null) {
                if (window.scrollY > visualViewport.height) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-5 right-5 z-20 transition-all duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* <div className="h-2 w-12 bg-[#053d05] -translate-y-4"></div> */}
            <button className={`shadow-[0px_6px_0px_0px_#053d05] hover:shadow-[0px_6px_0px_0px_#176517] hover:bg-[#0da00d] active:translate-y-2 active:shadow-[0px_0px_20px_#198d19] active:bg-[#053d05] fixed bottom-5 right-5 z-20 bg-ascent-green p-3 rounded-full h-12 w-12 flex items-center ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`} onClick={scrollToTop}>
                <ScrollArrowRoundedSvg className="fill-white h-2.5 mx-auto" />
            </button>
        </div>
        // <div className={`fixed bottom-5 right-5 z-20 transition-all duration-1000 ease-in-out ${isVisible ? "!opacity-100" : "opacity-0"}`}>
        //     {isVisible && (
        //         <button className={`fixed bottom-5 right-5 z-20 bg-ascent-green p-3 rounded-full h-12 w-12 flex items-center`} onClick={scrollToTop}>
        //             <ScrollArrowRoundedSvg className="fill-white h-2.5 mx-auto"/>
        //         </button>
        //     )}
        // </div>
        // <div>
        //     {isVisible && (
        //         <div onClick={scrollToTop}>
        //             <button className="h-10 p-5 fixed bottom-5">
        //                 <ScrollArrowRoundedSvg className="p-10 h-6 fixed overflow-hidden bottom-5 z-10 right-5 hover:animate-pulse bg-ascent-green rounded-lg fill-white"/>
        //             </button>
        //             {/* <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <rect width="60" height="60" rx="30" fill="#006401" />
        //                 <path d="M20.4933 35.2556C20.1644 34.9268 20 34.5082 20 34C20 33.4918 20.1644 33.0732 20.4933 32.7444L28.7444 24.4933C28.9238 24.3139 29.1181 24.1865 29.3274 24.1112C29.5366 24.0371 29.7608 24 30 24C30.2392 24 30.4711 24.0448 30.696 24.1345C30.9196 24.2242 31.1061 24.3438 31.2556 24.4933L39.5067 32.7444C39.8356 33.0732 40 33.4918 40 34C40 34.5082 39.8356 34.9268 39.5067 35.2556C39.1779 35.5845 38.7593 35.7489 38.2511 35.7489C37.7429 35.7489 37.3244 35.5845 36.9955 35.2556L30 28.2601L23.0045 35.2556C22.6756 35.5845 22.2571 35.7489 21.7489 35.7489C21.2407 35.7489 20.8221 35.5845 20.4933 35.2556Z" fill="#F3F3F3" />
        //             </svg> */}
        //         </div>
        //     )}
        // </div>
    );
}
