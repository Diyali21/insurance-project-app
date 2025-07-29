import { useEffect, useState } from "react";
import { Laptop } from "../components/Laptop";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Box, Select, TextField, MenuItem, Button } from "@mui/material";

export function LaptopList() {
  const [laptop, setLaptop] = useState([]);
  const laptopBrands = ["HP", "Lenovo", "Dell", "Asus", "Apple"];
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBrand, setSearchBrand] = useState("");

  async function getLaptops(searchTerm = "", searchBrand = "") {
    const url = new URL("https://68871b7e071f195ca97f45fa.mockapi.io/laptops");

    if (searchTerm) {
      url.searchParams.append("search", searchTerm);
    }

    if (searchBrand) {
      url.searchParams.append("search", searchBrand);
    }
    const response = await fetch(url, { method: "GET" });
    const laptops = await response.json();
    console.log(laptops);
    setLaptop(laptops);
  }

  useEffect(() => {
    getLaptops();
  }, []);

  const deleteLaptop = async (id) => {
    console.log("Deleting...", id);
    const response = await fetch(
      `https://68871b7e071f195ca97f45fa.mockapi.io/laptops/${id}`,
      { method: "DELETE" }
    );
    const laptop = await response.json();
    console.log("Deleted", laptop);
    getLaptops(searchTerm, searchBrand);
  };

  const searchLaptops = (event) => {
    event.preventDefault();
    getLaptops(searchTerm, searchBrand);
  };
  return (
    <Box>
      <Box className="search-model-container">
        <Box
          className="search-filter"
          component="form"
          onSubmit={searchLaptops}
        >
          <Box>
            <TextField
              size="small"
              sx={{ width: 400 }}
              id="outlined-basic"
              label="Laptop Model"
              variant="outlined"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            ></TextField>
            <Button
              variant="contained"
              type="submit"
              sx={{ ml: 3, height: 40 }}
            >
              Search
            </Button>
          </Box>
          <Box>
            <Select
            size="small"
              value={searchBrand}
              onChange={(event) => setSearchBrand(event.target.value)}
            >
              <MenuItem value="">Select brand</MenuItem>
              {laptopBrands.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              type="submit"
              sx={{ ml: 3, height: 40 }}
            >
              Filter
            </Button>
          </Box>
        </Box>
      </Box>
      <Box component="section" className="laptop-list-container">
        {laptop.map((laptop, index) => (
          <Laptop
            key={index}
            laptop={laptop}
            deleteBtn={
              <IconButton
                aria-label="delete"
                onClick={() => deleteLaptop(laptop.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </Box>
    </Box>
  );
}
