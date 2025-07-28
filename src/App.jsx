import { LaptopList } from "./pages/LaptopList";
import "./css/dashboard.css";
import "./css/navBar.css";
import "./css/new-laptop.css";
import "./css/quotes.css";
import "./css/confirm.css";
import "./css/not-found.css";
import "./styles.css";
import { Routes, Route, Link, Navigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { NewLaptop } from "./pages/NewLaptop";
import { useState } from "react";
import { Quotes } from "./pages/Quotes";
import { NotFound } from "./pages/NotFound";
import logo from './images/GuardIT_logo.png';
import {Confirm} from "./pages/Confirm";

export default function App() {

  const [quoteDetails, setQuote] = useState();
  const selectedQuote = (quoteDetails) => {
    setQuote(quoteDetails);
  }

  return (
      <div className="App">
        <header>
          <nav>
            <ul className="nav-link-container">
              <li>
                <img className="logo" src={logo} alt="" />
                </li>
                <div className="nav-link-description">
              <li className="spacing-words">
                <Link className="nav-link" to="/dashboard"><FontAwesomeIcon icon={faHouse} size="0.5x" /> Dashboard</Link>
              </li>
              <li className="spacing-words">
                <Link className="nav-link" to="/laptop/new"><FontAwesomeIcon icon={faLaptop} size="0.5x" /> Register Laptop</Link>
              </li>
              </div>
            </ul>
          </nav>
        </header>
        <Routes>
        <Route path="" element={<Navigate to="/dashboard" replace />} />
        <Route path="home" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<LaptopList/>} />
        <Route path="/laptop/new" element={<NewLaptop/>} />
        <Route path="quotes/:id" element={<Quotes selectedQuote={selectedQuote}/>}/>
        <Route path="/confirm" element= {<Confirm selectedQuote={quoteDetails}/>}/>
         <Route path="*" element={<NotFound />} />

        {/* <Route path="/laptop/new" element={}></Route> */}
        </Routes>
       </div>
  );
}
