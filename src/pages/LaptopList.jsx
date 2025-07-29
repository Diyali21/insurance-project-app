import { useEffect, useState } from "react";
import { Laptop } from "../components/Laptop";
import { SearchModel } from "./SearchModel";
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton";

export function LaptopList() {

  const [model, setModel] = useState("");
  const [brandName, setBrandName] = useState("");
  const [laptop, setLaptop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const searchFilter = laptop.filter((laptop) => laptop.brandName.includes(brandName) && laptop.model.toLowerCase().includes(model.toLowerCase()));

  async function getLaptops() {
     setIsLoading(true);
    const response = await fetch ("https://68871b7e071f195ca97f45fa.mockapi.io/laptops/");
    const laptops = await response.json();
    setIsLoading(false);
    setLaptop(laptops);
  }

  useEffect(() => {
    getLaptops();
  }, []);

   if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const deleteLaptop = async (id) =>{
    console.log("Deleting...", id);
    const response = await fetch(`https://68871b7e071f195ca97f45fa.mockapi.io/laptops/${id}`, {method: "DELETE"});
    const laptop = await response.json();
    console.log("Deleted", laptop);
    getLaptops(id);
  }
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
      <section className="laptop-list-container" >
        {searchFilter.map((laptop, index) => (
          <Laptop key={index} laptop={laptop}
          deleteBtn={
            <IconButton aria-label="delete" onClick={() => deleteLaptop(laptop.id)}><DeleteIcon/></IconButton>
            }/>
        ))}
      </section>
    </div>
  );
}
