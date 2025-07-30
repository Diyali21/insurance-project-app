import ArrowBack from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CalculatePrice } from "../components/CalculatePrice";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";

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


  const QuoteDisplay = [
    <Box className="basic-card">
      <Box className="quotes-content">
        <Typography
          variant="h5"
          sx={{ mt: 1, fontWeight: "bold", fontSize: 24 }}
        >
          Basic
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          R{basicPrice} pm
        </Typography>
      </Box>
      <Box className="coverage">
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ✅ Theft Protection
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ❌ Liquid Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ❌ Power Surge Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ❌ Accidental Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 1, ml: 4 }}
        >
          ❌ Hardware Malfunction
        </Typography>
      </Box>
      <Box className="get-cover-btn">
        <Button
          color="white"
          className="get-cover-btn"
          onClick={() => generateQuote("Basic", basicPrice)}
        >
          Get Cover
        </Button>
      </Box>
    </Box>,
    <Box className="std-card">
      <Box className="quotes-content">
        <Typography
          variant="h5"
          sx={{ mt: 1, fontWeight: "bold", fontSize: 24 }}
        >
          Standard
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          R{stdPrice} pm
        </Typography>
      </Box>
      <Box className="coverage">
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ✅ Theft Protection
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ✅ Liquid Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ✅ Power Surge Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ❌ Accidental Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 1, ml: 4 }}
        >
          ❌ Hardware Malfunction
        </Typography>
      </Box>
      <Box className="get-cover-btn">
        <Button
          color="white"
          className="get-cover-btn"
          onClick={() => generateQuote("Standard", stdPrice)}
        >
          Get Cover
        </Button>
      </Box>
    </Box>,
    <Box className="premium-card">
      <Box className="quotes-content">
        <Typography
          variant="h5"
          sx={{ mt: 1, fontWeight: "bold", fontSize: 24 }}
        >
          Premium
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          R{premPrice} pm
        </Typography>
      </Box>
      <Box className="coverage">
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ✅ Theft Protection
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ✅ Liquid Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ✅ Power Surge Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 2, ml: 4 }}
        >
          ✅ Accidental Damage
        </Typography>
        <Typography
          variant="body1"
          className="quotes-coverage"
          sx={{ fontSize: 14, mb: 1, ml: 4 }}
        >
          ✅ Hardware Malfunction
        </Typography>
      </Box>
      <Box className="get-cover-btn">
        <Button
          color="white"
          className="get-cover-btn"
          onClick={() => generateQuote("Premium", premPrice)}
        >
          Get Cover
        </Button>
      </Box>
    </Box>,
  ];

return (
  <Box>
    <ArrowBack className="back-btn" onClick={() => navigate(-1)}></ArrowBack>
    <Box className="quotes-card-container">
      <Carousel
        items={QuoteDisplay}
        startIndex={0}
        onChange={(i) => console.log(i)}
      ></Carousel>
    </Box>
  </Box>
);
}
