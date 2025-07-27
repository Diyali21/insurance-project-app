import { LaptopList } from "./pages/LaptopList";
import "./dashboard.css";
import "./styles.css";
import { Routes, Route, Link, Navigate, useParams, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { NewLaptop } from "./NewLaptop";
import { useState } from "react";
import { INITIAL_LAPTOPS } from "./assets/components/INITIAL_LAPTOPS";


export default function App() {

  const [laptop_details, setLaptops] = useState(INITIAL_LAPTOPS );
  const [quoteDetails, setQuote] = useState();
  const selectedQuote = (quoteType, price) => {
    setQuote({quoteType, price});
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

function Quotes({laptop_details, selectedQuote}){
  const {id} = useParams();
  const laptop = laptop_details[id];
  const navigate = useNavigate();

 const conditionMultiply = laptop.condition == "New" ? 1 : laptop.condition == "Used" ? 0.75 : laptop.condition == "Refurbished" ? 0.5 : 0.2;
 const brandMultiply = laptop.brandName == "Apple" ? 0.9 : laptop.brandName == "Lenovo" ? 0.8 : laptop.brandName == "Dell" ? 0.6 : 0.7;

 const processorMultiply = laptop.processor in ['Intel Core i3', 'AMD Ryzen 3', 'Apple M2'] ? 0.4 :
 laptop.processor in ['Intel Core i5', 'Intel Core i7', 'AMD Ryzen 5', 'Apple M3'] ? 0.75 : 0.9;

 const now = new Date();
 const purchase = new Date(laptop.purchase_date);
 const numYears = now.getFullYear() - purchase.getFullYear();
 const yearMultiply = numYears >= 10 ? 0.4 : numYears > 0 && numYears < 10? 0.6 : 0.85;

  const basicPrice = Math.round((laptop.current_value * 0.7 * conditionMultiply * brandMultiply * processorMultiply * yearMultiply) / 12, 2);
  const stdPrice = Math.round((laptop.current_value * conditionMultiply * brandMultiply * processorMultiply * yearMultiply) / 12, 2);
  const premPrice = Math.round((laptop.current_value * 1.25 * conditionMultiply * brandMultiply * processorMultiply * yearMultiply) / 12, 2);

  const generateQuote = (quoteType, price) => {
    selectedQuote(quoteType, price);
    navigate("/confirm");
  }

  return(
    <div>
      <div className="quotes-card-container">
      <div className="basic-card">
        <div className="quotes-content">
          <h2 className="tier-emoji">🧩</h2>
        <h1>Basic</h1>
        <h2>R{basicPrice} pm</h2>
        </div>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">❌ Liquid Damage</p>
      <p className="quotes-coverage">❌ Power Surge Damage</p>
      <p className="quotes-coverage">❌ Accidental Damage</p>
      <p className="quotes-coverage">❌ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Basic", basicPrice)}>Get Cover</button>
      </div>
       <div className="std-card">
        <div className="quotes-content">
          <h2>⚙️</h2>
      <h1>Standard</h1>
      <h2>R{stdPrice} pm</h2>
      </div>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">✅ Liquid Damage</p>
      <p className="quotes-coverage">✅ Power Surge Damage</p>
      <p className="quotes-coverage">❌ Accidental Damage</p>
      <p className="quotes-coverage">❌ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Standard", stdPrice)}>Get Cover</button>
      </div>
      <div className="premium-card">
        <div className="quotes-content">
          <h2>💎</h2>
      <h1>Premium</h1>
      <h2>R{premPrice} pm</h2>
      </div>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">✅ Liquid Damage</p>
      <p className="quotes-coverage">✅ Power Surge Damage</p>
      <p className="quotes-coverage">✅ Accidental Damage</p>
      <p className="quotes-coverage">✅ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Premium", premPrice)}>Get Cover</button>
      </div>
      </div>
    </div>
  )
}


function Confirm({selectedQuote}){
  return(
    <div>
      <h1>{selectedQuote.quoteType}: {selectedQuote.price}</h1>
    </div>
  )
}
