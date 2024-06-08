import { Sticker } from "../components/Sticker";
import ScrollToTop from "../components/ScrollToTop";
import Landing from "./Landing";
import About from "./About";
import Devlogs from "./Devlogs";

export default function Root() {
  return (
    <>
      <Sticker />
      <ScrollToTop />
      <Landing />
      <About />
      <Devlogs />
    </>
  );
}
