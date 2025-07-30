import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton, Typography } from "@mui/material";
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
              sx={{ mb: 2, fontSize: 22, fontWeight: "bold" }}
            >
              {laptop.model}
            </Typography>
            <IconButton className="view-btn" onClick={() => setShow(!show)}>
              {" "}
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Box className="specs-container">
            <Typography variant="h6" sx={{ mb: 2, fontSize: 17 }}>
              {laptop.type}
            </Typography>
            <Typography
              variant="p"
              className="laptop-condition"
              style={conditionStyling(laptop.condition)}
            >
              {laptop.condition}
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: 17 }}>
              {laptop.processor}
            </Typography>
          </Box>
          {show ? (
            <Box className="other-details">
              <Typography variant="h6" sx={{ fontSize: 15 }}>
                Serial Number:
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 15 }}>
                Purchase Date:
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 15 }}>
                Current Value:
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, fontSize: 15 }}>
                {laptop.sNo}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, fontSize: 15 }}>
                {laptop.purchase_date}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 15 }}>
                R{laptop.current_value}
              </Typography>
            </Box>
          ) : (
            ""
          )}
          <Box className="update-delete">
            {deleteBtn}
            <Button
              variant="contained"
              aria-label="update"
              color="secondary"
              onClick={() => navigate("/laptop/" + laptop.id + "/edit")}
              sx={{ minWidth: "90px" }}
            >
              <EditIcon /> Edit
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              className="quote-btn"
              onClick={() => navigate("/quotes/" + laptop.id)}
              sx={{ fontSize: 15}}
            >
              Get A Quote <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
