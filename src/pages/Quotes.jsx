import {useParams, useNavigate } from "react-router";
import { CalculatePrice } from "./CalculatePrice";
import {Box} from "@mui/material";

export function Quotes({laptop_details, selectedQuote}){

  const {id} = useParams();
  const laptop = laptop_details[id];
  const navigate = useNavigate();
  const basicPrice = CalculatePrice(laptop, "Basic").totalPrice;
  const stdPrice = CalculatePrice(laptop, "Standard").totalPrice;
  const premPrice = CalculatePrice(laptop, "Premium").totalPrice;

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
