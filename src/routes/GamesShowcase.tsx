import {} from "react-router-dom";

export default function GamesShowcase() {
  return (
    <section className="games">
      <div className="flex flex-col min-h-screen container min-w-full bg-[#0F0F0F]">
        <div className="flex flex-col items-end justify-end mr-8 mt-8 text-xl">
          <span className="font-next_art text-white mr-11">
            ASCENT&#40;&#41;&#123;
          </span>
          <span className="font-next_art text-white">DEVLOGS.&#125;&#59;</span>
        </div>
        <div className="cardCarousel mt-2 flex flex-row p-2">
          <div className="card h-80 w-48 border-white border-2 mx-2 p-1 rounded-md">
            <div className="gamePicture bg-gray-200 rounded-md h-44"></div>
            <div className="cardsCarousel flex flex-col mt-2">
              <span className="text-sm text-center text-white font-next_art">
                GAME TITLE
              </span>
              <span className="justify-end items-end text-white font-next_art text-[8px] text-right mt-1 font-thin">
                DÍA, 00-00-0000
              </span>
              <p className="text-white text-[9px] font-next_art mt-2">
                PREVIEW TEXT
              </p>
            </div>
          </div>
          <div className="card h-80 w-48 border-white border-2 mx-2 p-1 rounded-md">
            <div className="gamePicture bg-gray-200 rounded-md h-44"></div>
            <div className="cardsCarousel flex flex-col mt-2">
              <span className="text-sm text-center text-white font-next_art">
                GAME TITLE
              </span>
              <span className="justify-end items-end text-white font-next_art text-[8px] text-right mt-1 font-thin">
                DÍA, 00-00-0000
              </span>
              <p className="text-white text-[9px] font-next_art mt-2">
                PREVIEW TEXT
              </p>
            </div>
          </div>
          <div className="card h-80 w-48 border-white border-2 mx-2 p-1 rounded-md">
            <div className="gamePicture bg-gray-200 rounded-md h-44"></div>
            <div className="cardsCarousel flex flex-col mt-2">
              <span className="text-sm text-center text-white font-next_art">
                GAME TITLE
              </span>
              <span className="justify-end items-end text-white font-next_art text-[8px] text-right mt-1 font-thin">
                DÍA, 00-00-0000
              </span>
              <p className="text-white text-[9px] font-next_art mt-2">
                PREVIEW TEXT
              </p>
            </div>
          </div>
          <div className="card h-80 w-48 border-white border-2 mx-2 p-1 rounded-md">
            <div className="gamePicture bg-gray-200 rounded-md h-44"></div>
            <div className="cardsCarousel flex flex-col mt-2">
              <span className="text-sm text-center text-white font-next_art">
                GAME TITLE
              </span>
              <span className="justify-end items-end text-white font-next_art text-[8px] text-right mt-1 font-thin">
                DÍA, 00-00-0000
              </span>
              <p className="text-white text-[9px] font-next_art mt-2">
                PREVIEW TEXT
              </p>
            </div>
          </div>
          <div className="card h-80 w-48 border-white border-2 mx-2 p-1 rounded-md">
            <div className="gamePicture bg-gray-200 rounded-md h-44"></div>
            <div className="cardsCarousel flex flex-col mt-2">
              <span className="text-sm text-center text-white font-next_art">
                GAME TITLE
              </span>
              <span className="justify-end items-end text-white font-next_art text-[8px] text-right mt-1 font-thin">
                DÍA, 00-00-0000
              </span>
              <p className="text-white text-[9px] font-next_art mt-2">
                PREVIEW TEXT
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end text-xs">
          <span className="text-white text-[8px] font-thin mr-4">&copy;ASCENT STUDIOS 2024</span>
        </div>
        <div className="flex-1 flex-grow"> </div>
        <div className="flex flex-col items-center justify-center my-4">
          <svg
            className="h-16 w-6"
            width="30"
            height="147"
            viewBox="0 0 30 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 3C17.5 1.61929 16.3807 0.5 15 0.5C13.6193 0.5 12.5 1.61929 12.5 3L17.5 3ZM15 146.434L29.4338 132L15 117.566L0.566249 132L15 146.434ZM12.5 3L12.5 132L17.5 132L17.5 3L12.5 3Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
