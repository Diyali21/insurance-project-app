import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router";


export function Laptop({ laptop, deleteBtn }) {

  const conditionStyling = (condition) =>{
    if (condition == "New"){
        return{
          background: "linear-gradient(to right, #a8ff78, #78ffd6)",
          color: "#2C3E50",
        };}
        else if (condition == 'Used'){
          return{
            background: "linear-gradient(to right, #d9afd9, #97d9e1)",
            color: "#333333",
          };
        } else if (condition == "Refurbished"){
          return{
            background: "linear-gradient(to right, #fdcb82, #f7f7b6)",
            color: "#5c3d00",
          };
        }
    }

    const navigate = useNavigate();

  const [show, setShow] = useState(true);

  return (
    <Box className="laptop-list-container">
      <Box className="laptop-container">
        <Box className="update-delete">
          {deleteBtn}
          <EditIcon onClick={() => navigate("/laptop/" + laptop.id + "/edit")}>
            {" "}
          </EditIcon>
        </Box>
        <Box
          component="img"
          className="laptop-brand"
          src={laptop.brandImage}
          alt={laptop.model}
        />
        <Box className="laptop-content-container">
          <Box className="laptop-specs">
            <Typography
              variant="h4"
              className="laptop-model"
              sx={{ mb: 2, fontSize: 26, fontWeight: "bold" }}
            >
              {laptop.model}
            </Typography>
            <Button
              className="view-btn"
              onClick={() => setShow(!show)}
            >
              {" "}
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
            <Typography
              variant="p"
              className="laptop-condition"
              style={conditionStyling(laptop.condition)}
            >
              {laptop.condition}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Type: {laptop.type}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Processor: {laptop.processor}
          </Typography>
          {show ? (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Serial Number: {laptop.sNo}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Purchase Date: {laptop.purchase_date}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Current Value: R{laptop.current_value}
              </Typography>
            </Box>
          ) : (
            ""
          )}
          <Box>
            <Button
              variant="outlined"
              className="quote-btn"
              onClick={() => navigate("/quotes/" + laptop.id)}
              sx={{ fontSize: 18 }}
            >
              Get A Quote <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
