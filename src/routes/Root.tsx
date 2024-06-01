import { Sticker } from "../components/Sticker";
import Landing from "./Landing";
import About from "./About";
import Devlogs from "./Devlogs";

export default function Root() {
  return (
    <>
      <Sticker />
      <Landing />
      <About />
      <Devlogs />
    </>
  );
}
