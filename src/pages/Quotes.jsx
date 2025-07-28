import {useParams, useNavigate } from "react-router";
import { CalculatePrice } from "../components/CalculatePrice";
import {Box} from "@mui/material";
import { useEffect, useState } from "react";

export function Quotes({selectedQuote}){

  const {id} = useParams();
  const navigate = useNavigate();

  const [laptop, setLaptop] = useState(null);

  async function getQuoteById(id) {
    const response = await fetch(`https://68871b7e071f195ca97f45fa.mockapi.io/laptops/${id}`);
    const laptop = await response.json();
    console.log(laptop);
    setLaptop(laptop);
  }

  useEffect(() => {
    getQuoteById(id);
  }, [id]);

    const basicPrice = laptop ? CalculatePrice(laptop, "Basic").totalPrice : 0;
  const stdPrice = laptop ? CalculatePrice(laptop, "Standard").totalPrice : 0;
  const premPrice = laptop ? CalculatePrice(laptop, "Premium").totalPrice : 0;
  console.log(id);

  const generateQuote = (quoteType) => {
    const priceBreakdown = CalculatePrice(laptop, quoteType);
    const quoteDetails = {
        quoteType,
        brandName: laptop.brandName,
        model: laptop.model,
        type: laptop.type,
        processor: laptop.processor,
        condition: laptop.condition,
        sNo: laptop.sNo,
        purchaseDate: laptop.purchase_date,
        currentValue: laptop.current_value,
        ...priceBreakdown
    }
    selectedQuote(quoteDetails);
    navigate("/confirm");
  }
return(
    <Box>
      <Box className="quotes-card-container">
      <Box className="basic-card">
        <Box className="quotes-content">
        <h1>Basic</h1>
        <h2>R{basicPrice} pm</h2>
        </Box>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">❌ Liquid Damage</p>
      <p className="quotes-coverage">❌ Power Surge Damage</p>
      <p className="quotes-coverage">❌ Accidental Damage</p>
      <p className="quotes-coverage">❌ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Basic", basicPrice)}>Get Cover</button>
      </Box>
       <Box className="std-card">
        <Box className="quotes-content">
      <h1>Standard</h1>
      <h2>R{stdPrice} pm</h2>
      </Box>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">✅ Liquid Damage</p>
      <p className="quotes-coverage">✅ Power Surge Damage</p>
      <p className="quotes-coverage">❌ Accidental Damage</p>
      <p className="quotes-coverage">❌ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Standard", stdPrice)}>Get Cover</button>
      </Box>
      <Box className="premium-card">
        <Box className="quotes-content">
      <h1>Premium</h1>
      <h2>R{premPrice} pm</h2>
      </Box>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">✅ Liquid Damage</p>
      <p className="quotes-coverage">✅ Power Surge Damage</p>
      <p className="quotes-coverage">✅ Accidental Damage</p>
      <p className="quotes-coverage">✅ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Premium", premPrice)}>Get Cover</button>
      </Box>
      </Box>
    </Box>
  )
}
