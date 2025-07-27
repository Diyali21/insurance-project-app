import { Laptop } from "../components/Laptop";
import { FilterBrand } from "./FilterBrand";
import { SearchModel } from "./SearchModel";

export function LaptopList({laptop_details}) {


  return (
    <div>
      <div>
        <SearchModel/>
      </div>
      <section className="laptop-list-container">
        <FilterBrand/>
        {laptop_details .map((laptop, index) => (
          <Laptop key={index} laptop={laptop} />
        ))}
      </section>
    </div>
  );
}
