import { LaptopList } from "./pages/LaptopList";
import "./styles.css";
import { Routes, Route, Link, Navigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Laptop } from "./assets/components/Laptop";

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
        {/* <SearchModel/> */}
        <FilterBrand/>
        <Routes>
        <Route path="" element={<Navigate to="/dashboard" replace />} />
        <Route path="home" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<LaptopList />} />

        {/* <Route path="/laptop/new" element={}></Route> */}
        </Routes>
       </div>
  );
}

function SearchModel(){

  const laptops = [
    {
      brand: "https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Logo.png",
      brandName: "Lenovo",
      model: "ThinkPad X1 Carbon Gen 11",
      condition: "New",
      type: "Ultrabook",
      processor: "Intel Core i7-1355U",
      sNo: "PF3Y9HQF",
      purchase_date: "2023-11-02",
      current_value: 17950,
    },
    {
      brand: "https://tse2.mm.bing.net/th/id/OIP.7IEX1sqp0oZ7C8Y9wByESgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      brandName: "Lenovo",
      model: "HP Spectre x360 14",
      condition: "Used",
      type: "Convertible",
      processor: "Intel Core i7-1255U",
      sNo: "5CD3456XYZ",
      purchase_date: "2023-11-02",
      current_value: 14000,
    }
  ];

  const [model, setModel] = useState("");

  const searchLaptop = laptops.filter((laptop) => laptop.model.toLowerCase().includes(model.toLowerCase()));

  return (
    <div>
      <input type="text" value={model} onChange={(event) => setModel(event.target.value)}></input>
      <section className="laptop-list-container">
              {searchLaptop.map((laptop, index) => (
                <Laptop key={index} laptop={laptop} />
              ))}
            </section>
    </div>
  );
}


function FilterBrand(){

  const laptops = [
    {
      brand: "https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Logo.png",
      brandName: "Lenovo",
      model: "ThinkPad X1 Carbon Gen 11",
      condition: "New",
      type: "Ultrabook",
      processor: "Intel Core i7-1355U",
      sNo: "PF3Y9HQF",
      purchase_date: "2023-11-02",
      current_value: 17950,
    },
    {
      brand: "https://tse2.mm.bing.net/th/id/OIP.7IEX1sqp0oZ7C8Y9wByESgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      brandName: "HP",
      model: "HP Spectre x360 14",
      condition: "Used",
      type: "Convertible",
      processor: "Intel Core i7-1255U",
      sNo: "5CD3456XYZ",
      purchase_date: "2023-11-02",
      current_value: 14000,
    }
  ];

  const [brandName, setBrandName] = useState("");

  const filteredBrand = laptops.filter((laptop) => laptop.brandName.includes(brandName));

  return(
    <div>
      <label htmlFor="brandSelect">Choose a Brand:</label>
      <select
        value={brandName}
        onChange={(event) => setBrandName(event.target.value)}
      >
        <option value="">Select brand</option>
        <option value="Lenovo">Lenovo</option>
        <option value="HP">HP</option>
        <option value="Dell">Dell</option>
      </select>
       <section className="laptop-list-container">
              {filteredBrand.map((laptop, index) => (
                <Laptop key={index} laptop={laptop} />
              ))}
            </section>
    </div>
  );
}
