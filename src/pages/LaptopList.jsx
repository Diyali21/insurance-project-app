import { Laptop } from "../assets/components/Laptop";
import { laptops } from "../assets/components/laptops";

export function LaptopList() {

  return (
    <div>
      <div>
      </div>
      <section className="laptop-list-container">
        {laptops.map((laptop, index) => (
          <Laptop key={index} laptop={laptop} />
        ))}
      </section>
    </div>
  );
}
