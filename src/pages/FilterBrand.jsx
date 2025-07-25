import { useState } from "react";
import { Laptop } from "../assets/components/Laptop";
import { laptops } from "../assets/components/laptops";

export function FilterBrand() {

  const [brandName, setBrandName] = useState("");

  const filteredBrand = laptops.filter((laptop) => laptop.brandName.includes(brandName));

  return (
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
