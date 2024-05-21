import { Outlet, Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Sticker } from "../components/Sticker";
import Landing  from "./Landing";
import About from "./About";
import GamesShowcase from "./GamesShowcase";

export default function Root() {
  return (
    <>
    <body>
      <Sticker />
      <Landing />
      <About />
      <GamesShowcase />
      </body>
      {/* <div className="bg-slate-900 text-white">
      <div className="centered rounded-l-3xl bg-slate-800 text-right text-3xl text-white">
      <Breadcrumbs></Breadcrumbs>
      </div>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link to={`contacts/2`}>Your Friend</Link>
              </li>
              <li>
                <Link to={`about`}>About us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"><Outlet /></div>
        </div>*/}
    </>
  );
}
