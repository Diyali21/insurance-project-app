import { LaptopList } from "./pages/LaptopList";
import "./styles.css";
import { Routes, Route, Link, Navigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop } from "@fortawesome/free-solid-svg-icons";

export default function App() {


  return (
      <div className="App">

        <header>
          <nav>
            <ul className="nav-link-container">
              <li className="spacing-words">
                <Link className="nav-link" to="/dashboard"><FontAwesomeIcon icon={faHouse} size="0.5x" /></Link>
              </li>
              <li className="spacing-words">
                <Link className="nav-link" to="/laptop/new"><FontAwesomeIcon icon={faLaptop} size="0.5x" /></Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
        <Route path="" element={<Navigate to="/dashboard" replace />} />
        <Route path="home" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<LaptopList />} />

        {/* <Route path="/laptop/new" element={}></Route> */}
        </Routes>
       </div>
  );
}
