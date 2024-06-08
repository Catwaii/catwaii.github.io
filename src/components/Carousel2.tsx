/// <reference types="vite-plugin-svgr/client" />
import ScrollArrowSvg from "../assets/icons/scroll_arrow.svg?react";
import data from "../assets/data/devlogs.json";
import { useState, useRef, useEffect } from "react";

type CardProps = {
  index: number;
  link: string;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
};

function Card({ index, link, imageUrl, title, date, description }: CardProps) {
  function getDayName(dateStr: string | number | Date, locale: Intl.LocalesArgument) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  return (
    // <div className={`relative p-1 mx-2 border-2 border-white rounded-md max-h-full min-h-full min-w-56 flex-1 shrink-0 scroll-smooth snap-${index==0 ? '' : ''}`}>
    <div className={`relative p-1 mx-2 border-2 border-white rounded-md min-w-56 w-56 min-h-80 h-80 max-h-full carousel-item shrink-0 snap-start scroll-smooth hover:scale-105 ease-in-out duration-500`}>
      <a
        href={link}
        className="z-0 block bg-gray-200 bg-left-top bg-no-repeat bg-cover rounded-md gamePicture h-44 bg-origin-padding"
        style={{ backgroundImage: `url(${imageUrl || ""})` }}
      >
        <img
          src={imageUrl || ""}
          alt={title}
          className="hidden w-full aspect-square"
        />
      </a>
      <a
        href={link}
        className="absolute top-0 left-0 block w-full h-full transition-opacity duration-300 opacity-0 aspect-square hover:opacity-100 bg-ascent-green/50"
      ></a>
      <div className="flex flex-col mt-2">
        <span className="text-sm text-center text-white font-next_art">
          {title} {index}
        </span>
        <span className="justify-end items-end text-white font-next_art text-[.5rem] text-right mt-1 font-thin">
          {getDayName(date,"es-ES")}, {date}
        </span>
        <p className="text-white text-[.6rem] font-next_art mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

function CardContainer() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    maxScrollWidth.current = scrollContainerRef.current
      ? scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.offsetWidth
      : 0;
  }, []);

  const scrollPrev = () => {
    if (scrollContainerRef.current !== null) {
      setCurrentIndex((prevState) => prevState - 1);

      // if (
      //   scrollContainerRef.current.scrollLeft ==
      // Math.floor(
      //   (maxScrollWidth.current + scrollContainerRef.current.offsetWidth) / 2
      //   )
      // ) {
      //   setCurrentIndex(0);
      // }
      // let step = scrollContainerRef.current.children[0].clientWidth;
      // let lastIndex = Math.ceil(maxScrollWidth.current / step);
      // setCurrentIndex(lastIndex);
      // console.log(
      //   `Reversus scrollus! currentIndex: ${currentIndex} lastIndex: ${lastIndex} step: ${step} maxScrollWidth: ${maxScrollWidth.current}`
      // );
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current !== null) {
      setCurrentIndex((prevState) => prevState + 1);
      if (
        scrollContainerRef.current.scrollLeft >=
        Math.floor(maxScrollWidth.current / 2)
      ) {
        setCurrentIndex(0);
      }
      console.log(
        `Nexus scrollus! currentIndex: ${currentIndex} maxScrollWidth: ${maxScrollWidth.current} scrollLeft: ${scrollContainerRef.current.scrollLeft}`
      );
    }
  };

  // sideScroll
  useEffect(() => {
    if (scrollContainerRef !== null && scrollContainerRef.current !== null) {
      // let scrollAmount = 0;
      let step =
        (scrollContainerRef.current.children[0].clientWidth * currentIndex);
      // scrollContainerRef.current.scrollLeft = step;
      scrollContainerRef.current.scrollTo({
        left: step,
        behavior: "smooth",
      });
      if (currentIndex < 0) {
        let newIndex = Math.ceil(
          (maxScrollWidth.current +
            scrollContainerRef.current.children[0].clientWidth) /
            2 /
            scrollContainerRef.current.children[0].clientWidth
        );
        console.log(
          `Reversus scrollus! currentIndex: ${currentIndex} newIndex: ${newIndex} maxScrollWidth: ${maxScrollWidth.current} clientWidth: ${scrollContainerRef.current.children[0].clientWidth}`
        );
        setCurrentIndex(newIndex);
      }
      // if (step >= maxScrollWidth.current) {
      //   // scrollContainerRef.current.scrollLeft = maxScrollWidth.current;
      //   setCurrentIndex(0);
      // }
      // let stepIndex =
      // scrollContainerRef.current.children[0].clientWidth;
      // let lastIndex = Math.ceil(maxScrollWidth.current / stepIndex);
      // let newIndex = Math.ceil((maxScrollWidth.current / 2) / stepIndex)+1;
      // setCurrentIndex(newIndex);

      // else {
      //   scrollContainerRef.current.scrollLeft = step;
      // }
      // if (direction == "left") {
      //   scrollContainerRef.current.scrollLeft -= step;
      // } else {
      //   scrollContainerRef.current.scrollLeft += step;
      // }
      // scrollAmount += step;
      // if (scrollAmount >= distance) {
      //   window.clearInterval(slideTimer);
      // }
    }
  }, [currentIndex]);

  // const [disableScroll, setDisableScroll] = useState(false);
  // const [scrollWidth, setScrollWidth] = useState(0);
  // const [scrollPos, setScrollPos] = useState(1);
  // const [clonesWidth, setClonesWidth] = useState(0);
  // const mounted = useRef(false);

  // useEffect(() => {
  //   maxScrollWidth.current = scrollContainerRef.current
  //     ? scrollContainerRef.current.scrollWidth -
  //       scrollContainerRef.current.offsetWidth
  //     : 0;
  // }, []);

  // const getClonesWidth = () => {
  //   const clones = document.getElementsByClassName("card");
  //   let clonesWidth = 0;
  //   for (let i = 0; i < clones.length; i++) {
  //     clonesWidth = clonesWidth + clones[i].clientWidth;
  //   }
  //   return clonesWidth;
  // };

  // const reCalc = () => {
  //   if (scrollContainerRef.current !== null) {
  //     let reCalcScrollPos = scrollPos;
  //     let reCalcScrollWidth = scrollContainerRef.current.clientWidth;
  //     let reCalcClonesWidth = getClonesWidth();

  //     if (scrollPos <= 0) {
  //       setScrollPos(1);
  //     }

  //     setScrollPos(reCalcScrollPos);
  //     setScrollWidth(reCalcScrollWidth);
  //     setClonesWidth(reCalcClonesWidth);
  //   }
  // };

  // const setScroll = (element: { scrollLeft: any }, pos: any) => {
  //   element.scrollLeft = pos;
  // };

  // const handleScroll = (e: { currentTarget: HTMLDivElement }) => {
  //   const container = e.currentTarget;
  //   const scrollWidth = container.scrollWidth;
  //   const clonesWidth = maxScrollWidth.current;
  //   let scrollPos = container.scrollLeft;
  //   let scrollPosAdd;
  //   container.clientWidth > clonesWidth
  //     ? (scrollPosAdd = container.clientWidth)
  //     : (scrollPosAdd = clonesWidth);

  //   if (true) {
  //     if (scrollPos + scrollPosAdd >= scrollWidth) {
  //       setScroll(
  //         // The math floor value helps smooth out the scroll jump,
  //         // I don't know why that particular value works, but it does
  //         // Same goes for the other setScroll call below
  //         container,
  //         1 + Math.floor(scrollPosAdd / 12.09)
  //       );
  //     } else if (scrollPos <= 0) {
  //       setScroll(
  //         container,
  //         scrollWidth - clonesWidth - Math.floor(scrollPosAdd / 12.09)
  //       );
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (!mounted.current) {
  //     window.addEventListener("resize", reCalc);
  //     mounted.current = true;
  //   } else {
  //     if (disableScroll) {
  //       window.setTimeout(function () {
  //         setDisableScroll(false);
  //       }, 40);
  //     }
  //   }

  //   return () => {
  //     window.removeEventListener("resize", reCalc);
  //   };
  // });

  // const scrollNext = (e: { currentTarget: { previousSibling: any } }) => {
  //   const container = e.currentTarget.previousSibling;
  //   sideScroll(container, "right", 10, 272, 10);
  // };

  // const scrollPrev = (e: { currentTarget: { nextSibling: any } }) => {
  //   const container = e.currentTarget.nextSibling;
  //   sideScroll(container, "left", 10, 272, 10);
  // };

  // function sideScroll(
  //   element: HTMLDivElement,
  //   direction: string,
  //   speed: number,
  //   distance: number,
  //   step: number
  // ) {
  //   let scrollAmount = 0;
  //   var slideTimer = setInterval(() => {
  //     if (direction == "left") {
  //       element.scrollLeft -= step;
  //     } else {
  //       element.scrollLeft += step;
  //     }
  //     scrollAmount += step;
  //     if (scrollAmount >= distance) {
  //       window.clearInterval(slideTimer);
  //     }
  //   }, speed);
  // }

  // const maxScrollWidth = useRef(0);
  // scrollNext
  // scrollPrev
  // setScroll
  // getClonesWidth
  // reCacl

  // useEffect(() => {
  //   if(disableScroll)
  //     {
  //       window.setTimeout(function () {
  //         setDisableScroll(false);
  //       }, 40);
  //     }
  // })

  return (
    <div className="relative flex items-center justify-between w-full h-full min-h-full max-h-full scroll-smooth transition">
    {/* <div> */}
      <div
        onClick={scrollPrev}
        className="absolute left-0 z-10 flex items-center w-9 h-full transition-all duration-300 ease-in-out opacity-75 basis-0 hover:bg-gradient-to-r hover:from-ascent-green hover:from-50% hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed hover:cursor-pointer fill-white/50 hover:fill-white"
      >
        <ScrollArrowSvg className="absolute left-0 z-10 w-5 rotate-90" />
        <span className="sr-only">Previous</span>
      </div>

      <div className="min-h-full h-full mx-3 z-0 flex items-center align-center justify-center content-center place-content-center object-center overflow-x-scroll overflow-y-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_16px,_black_calc(100%-16px),transparent_100%)] scrollbar-none scroll-smooth touch-pan-x snap-mandatory snap-x">
        <div
          ref={scrollContainerRef}
          // onScroll={handleScroll}
          className="mx-2 z-0 flex items-center overflow-x-scroll overflow-y-auto h-full whitespace-nowrap scrollbar-none scroll-smooth touch-pan-x snap-mandatory snap-x"
        >
          {data.devlogs.map((devlog, index) => {
            return (
              <Card
                key={index}
                index={index}
                link={devlog.link}
                imageUrl={devlog.imageUrl}
                title={devlog.title}
                date={devlog.date}
                description={devlog.description}
              />
            );
          })}
          {data.devlogs.map((devlog, index) => {
            return (
              <Card
                key={index}
                index={index}
                link={devlog.link}
                imageUrl={devlog.imageUrl}
                title={devlog.title}
                date={devlog.date}
                description={devlog.description}
              />
            );
          })}
        </div>
      </div>
      <div
        onClick={scrollNext}
        className="absolute right-0 z-10 flex items-center w-8 h-full transition-all duration-300 ease-in-out opacity-75 basis-0 hover:bg-gradient-to-l hover:from-ascent-green hover:from-50% hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed hover:cursor-pointer fill-white/50 hover:fill-white"
      >
        <ScrollArrowSvg className="absolute right-0 w-5 -rotate-90" />
        <span className="sr-only">Next</span>
      </div>
    </div>
  );
}

export default function Carousel() {
  return (
    <>
      <CardContainer />
    </>
  );
}
