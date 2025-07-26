import { useState } from "react";
import { Laptop } from "../assets/components/Laptop";
import { laptops } from "../assets/components/laptops";

export function SearchModel() {
  const [model, setModel] = useState("");

  const searchLaptop = laptops.filter((laptop) => laptop.model.toLowerCase().includes(model.toLowerCase()));

  return (
    <div>
      <div className="search-model-container">
      <input className="search-model" type="text" value={model} onChange={(event) => setModel(event.target.value)} placeholder="Laptop Model"></input>
      </div>
      <section className="laptop-list-container">
        {searchLaptop.map((laptop, index) => (
          <Laptop key={index} laptop={laptop} />
        ))}
      </section>
    </div>
  );
}
