import ArrowBack from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CalculatePrice } from "../components/CalculatePrice";

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
          <Typography variant="h3" sx={{ mb: 3, mt: 3, fontWeight: "bold" }}>
            Basic
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, mt: 3, fontWeight: "bold" }}>
            R{basicPrice} pm
          </Typography>
        </Box>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}
        >
          ✅ Theft Protection
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}
        >
          ❌ Liquid Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}
        >
          ❌ Power Surge Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}
        >
          ❌ Accidental Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}
        >
          ❌ Hardware Malfunction
        </Typography>
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
          <Typography variant="h3" sx={{ mb: 3, mt: 3, fontWeight: "bold" }}>
            Standard
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, mt: 3, fontWeight: "bold" }}>
            R{stdPrice} pm
          </Typography>
        </Box>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>
            ✅ Theft Protection</Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>✅ Liquid Damage</Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>✅ Power Surge Damage</Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>❌ Accidental Damage</Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>❌ Hardware Malfunction</Typography>
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
          <Typography variant="h3" sx={{ mb: 3, mt: 3, fontWeight: "bold" }}>
            Premium
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, mt: 3, fontWeight: "bold" }}>
            R{premPrice} pm
          </Typography>
        </Box>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>✅ Theft Protection</Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>✅ Liquid Damage</Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>✅ Power Surge Damage</Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>✅ Accidental Damage</Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 20, mb: 3 }}>✅ Hardware Malfunction</Typography>
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
