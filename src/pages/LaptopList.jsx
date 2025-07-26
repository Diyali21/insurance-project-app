import { Laptop } from "../assets/components/Laptop";
import { laptops } from "../assets/components/laptops";
import { FilterBrand } from "./FilterBrand";
import { SearchModel } from "./SearchModel";

export function LaptopList() {

  return (
    <div>
      <div>
        <SearchModel/>
      </div>
      <section className="laptop-list-container">
        <FilterBrand/>
        {laptops.map((laptop, index) => (
          <Laptop key={index} laptop={laptop} />
        ))}
      </section>
    </div>
  );
}
