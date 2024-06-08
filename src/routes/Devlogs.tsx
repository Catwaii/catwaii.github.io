import {} from "react-router-dom";
import Carousel from "../components/Carousel2";
import ScrollLineSvg from "../assets/icons/scroll_line.svg?react";

export default function Devlogs() {
  const date = new Date();
  return (
    <section className="devlogs">
      <div className="flex flex-col min-h-screen container min-w-full bg-[#0F0F0F]">
        <div className="flex flex-col items-end justify-end mr-8 mt-8 text-2xl 2xl:text-4xl">
          <span className="font-next_art text-white mr-11">
            ASCENT&#40;&#41;&#123;
          </span>
          <span className="font-next_art text-white">DEVLOGS.&#125;&#59;</span>
        </div>
        <div className="flex-1 flex-grow"> </div>
        <div className="flex overflow-x-hidden flex-col my-auto mt-7 h-96">
          <div className="scroll-smooth flex items-center p-0 m-0 h-full my-auto">
            <Carousel />
          </div>
        </div>
        <div className="flex flex-col items-end justify-end text-xs mt-2">
          <span className="text-white text-[.5rem] font-thin mr-4 text-bold font-next_art">&copy;ASCENT STUDIOS {date.getFullYear()}</span>
        </div>
        <div className="flex-1 flex-grow"> </div>
        <div className="flex flex-col items-center justify-center my-2">
          <ScrollLineSvg className="h-16 w-6"/>
        </div>
      </div>
    </section>
  );
}
