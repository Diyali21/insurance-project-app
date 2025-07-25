import { useState } from "react";
import { Laptop } from "../assets/components/Laptop";
import { laptops } from "../assets/components/laptops";

export function SearchModel() {
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
