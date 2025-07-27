import { LaptopList } from "./pages/LaptopList";
import "./dashboard.css";
import "./styles.css";
import { Routes, Route, Link, Navigate, useParams, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { NewLaptop } from "./NewLaptop";
import { useState } from "react";
import { INITIAL_LAPTOPS } from "./assets/components/INITIAL_LAPTOPS";
import { Quotes } from "./pages/Quotes";


export default function App() {

  const [laptop_details, setLaptops] = useState(INITIAL_LAPTOPS );
  const [quoteDetails, setQuote] = useState();
  const selectedQuote = (quoteDetails) => {
    setQuote(quoteDetails);
  }

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
        <Route path="/dashboard" element={<LaptopList laptop_details={laptop_details}/>} />
        <Route path="/laptop/new" element={<NewLaptop laptop_details={laptop_details} setLaptops={setLaptops}/>} />
        <Route path="quotes/:id" element={<Quotes laptop_details={laptop_details} selectedQuote={selectedQuote}/>}/>
        <Route path="/confirm" element= {<Confirm selectedQuote={quoteDetails}/>}/>

        {/* <Route path="/laptop/new" element={}></Route> */}
        </Routes>
       </div>
  );
}


function Confirm({selectedQuote}){
  const {
    quoteType,
    conditionPrice,
    brandPrice,
    processorPrice,
    yearPrice,
    optionPrice,
    totalPrice
  } = selectedQuote;
  return(
    <div>
      <h1>{quoteType}: {conditionPrice}</h1>
    </div>
  )
}
