import { useState } from "react";
import { Laptop } from "../components/Laptop";
import { SearchModel } from "./SearchModel";

export function LaptopList({laptop_details}) {

  const [model, setModel] = useState("");
  const [brandName, setBrandName] = useState("");

  const searchFilter = laptop_details .filter((laptop) => {
    const filterBrand = laptop.brandName.includes(brandName);
    const searchModel = laptop.model.toLowerCase().includes(model.toLowerCase());
    return filterBrand && searchModel;
  });

  return (
    <div>
      <div>
        <SearchModel
        model={model}
        setModel={setModel}
        brandName={brandName}
        setBrandName={setBrandName}
        laptop_details={laptop_details}
        />
      </div>
      <section className="laptop-list-container">
        {searchFilter .map((laptop, index) => (
          <Laptop key={index} laptop={laptop} />
        ))}
      </section>
    </div>
  );
}
