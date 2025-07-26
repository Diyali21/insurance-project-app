import { LaptopList } from "./pages/LaptopList";
import "./dashboard.css";
import "./styles.css";
import { Routes, Route, Link, Navigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { NewLaptop } from "./NewLaptop";
import { useState } from "react";
import { INITIAL_LAPTOPS } from "./assets/components/INITIAL_LAPTOPS";


export default function App() {

  const [laptop_details, setLaptops] = useState(INITIAL_LAPTOPS );

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
        <Route path="laptops/:id" element={<LaptopDetails laptop_details={laptop_details}/>}/>

        {/* <Route path="/laptop/new" element={}></Route> */}
        </Routes>
       </div>
  );
}

function LaptopDetails({laptop_details}){
  const {id} = useParams();
  const laptop = laptop_details[id];

 const conditionMultiply = laptop.condition == "New" ? 1 : laptop.condition == "Used" ? 0.75 : laptop.condition == "Refurbished" ? 0.5 : 0.2;
 const brandMultiply = laptop.brandName == "Apple" ? 0.9 : laptop.brandName == "Lenovo" ? 0.8 : laptop.brandName == "Dell" ? 0.6 : 0.7;

 const processorMultiply = laptop.processor in ['Intel Core i3', 'AMD Ryzen 3', 'Apple M2'] ? 0.4 :
 laptop.processor in ['Intel Core i5', 'Intel Core i7', 'AMD Ryzen 5', 'Apple M3'] ? 0.75 : 0.9;

 const now = new Date();
 const purchase = new Date(laptop.purchase_date);
 const numYears = now.getFullYear() - purchase.getFullYear();
 const yearMultiply = numYears >= 10 ? 0.4 : numYears > 0 && numYears < 10? 0.6 : 0.85;

  const basicPrice = Math.round(laptop.current_value * 0.7 * conditionMultiply * brandMultiply * processorMultiply * yearMultiply, 2);
  const stdPrice = Math.round(laptop.current_value * conditionMultiply * brandMultiply * processorMultiply * yearMultiply, 2);
  const premPrice = Math.round(laptop.current_value * 1.25 * conditionMultiply * brandMultiply * processorMultiply * yearMultiply, 2);

  return(
    <div>
      <h1>Quotes for {laptop.brandName}, {laptop.model}</h1>
      <h1>Basic: {basicPrice}</h1>
      <h1>Standard: {stdPrice}</h1>
      <h1>Premium: {premPrice}</h1>
    </div>
  )
}
