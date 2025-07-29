import {useParams, useNavigate } from "react-router";
import { CalculatePrice } from "../components/CalculatePrice";
import {Box, Button} from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";

export function Quotes({selectedQuote}){

  const {id} = useParams();
  const navigate = useNavigate();

  const [laptop, setLaptop] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  async function getQuoteById(id) {
    setIsLoading(true);
    const response = await fetch(`https://68871b7e071f195ca97f45fa.mockapi.io/laptops/${id}`);
    const laptop = await response.json();
    setIsLoading(false);
    setLaptop(laptop);
  }

  useEffect(() => {
    getQuoteById(id);
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
return (
  <Box>
    <ArrowBack className="back-btn" onClick={() => navigate(-1)}></ArrowBack>
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
        <Box className="get-cover-btn">
          <Button
          color="white"
            className="get-cover-btn"
            onClick={() => generateQuote("Premium", premPrice)}
          >
            Get Cover
          </Button>
        </Box>
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
        <Box className="get-cover-btn">
          <Button
            color="white"
            className="get-cover-btn"
            onClick={() => generateQuote("Premium", premPrice)}
          >
            Get Cover
          </Button>
        </Box>
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
        <Box className="get-cover-btn">
          <Button
            color="white"
            className="get-cover-btn"
            onClick={() => generateQuote("Premium", premPrice)}
          >
            Get Cover
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);
}
