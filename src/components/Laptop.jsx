import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import {Box, Typography} from "@mui/material";
import { Link } from "react-router";
import EditIcon from "@mui/icons-material/Edit";

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



  const [show, setShow] = useState(true);

  const detailsStyles={
    display: show ? "block" : "none"
  };

  return (
    <Box className="laptop-list-container">
      <Box className="laptop-container">
        <Box className="update-delete">
          {deleteBtn}
          <Link to={"/laptop/" + laptop.id + "/edit"}>
            <EditIcon></EditIcon>
          </Link>
        </Box>
        <img
          className="laptop-brand"
          src={laptop.brandImage}
          alt={laptop.model}
        />
        <Box className="laptop-content-container">
          <Box className="laptop-specs">
            <h2 className="laptop-model">{laptop.model}</h2>
            <p
              className="laptop-condition"
              style={conditionStyling(laptop.condition)}
            >
              {laptop.condition}
            </p>
          </Box>
          <h4>Type: {laptop.type}</h4>
          <h4>Processor: {laptop.processor}</h4>
          <Box style={detailsStyles}>
            <h4>Serial Number: {laptop.sNo}</h4>
            <h4>Purchase Date: {laptop.purchase_date}</h4>
            <h4>Current Value: R{laptop.current_value}</h4>
          </Box>
          <Box className="view-btn-container">
            <button className="view-btn" onClick={() => setShow(!show)}>{" "} {show ? "View Less" : "View More"}
            </button>
          </Box>
          <Link to={"/quotes/" + laptop.id}>
            <button className="quote-btn">Get A Quote ➡️</button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
