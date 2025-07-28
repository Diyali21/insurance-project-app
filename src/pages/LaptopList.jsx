import { useEffect, useState } from "react";
import { Laptop } from "../components/Laptop";
import { SearchModel } from "./SearchModel";

export function LaptopList() {

  const [model, setModel] = useState("");
  const [brandName, setBrandName] = useState("");
  const [laptop, setLaptop] = useState([]);

  const searchFilter = laptop.filter((laptop) => laptop.brandName.includes(brandName) && laptop.model.toLowerCase().includes(model.toLowerCase()));

  async function getLaptops() {
    const response = await fetch ("https://68871b7e071f195ca97f45fa.mockapi.io/laptops/");
    const laptops = await response.json();
    setLaptop(laptops);
  }

  useEffect(() => {
    getLaptops();
  }, []);

  return (
    <div>
      <div>
        <SearchModel
        model={model}
        setModel={setModel}
        brandName={brandName}
        setBrandName={setBrandName}
        laptop_details={laptop}
        />
      </div>
      <section className="laptop-list-container">
        {searchFilter.map((laptop, index) => (
          <Laptop key={index} laptop={laptop} />
        ))}
      </section>
    </div>
  );
}
