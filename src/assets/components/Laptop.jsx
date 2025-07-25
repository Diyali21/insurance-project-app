import { useState } from "react";

export function Laptop({ laptop }) {

  const conditionStyling = (condition) =>{
    switch (condition){
      case "New":
        return{
          background: "linear-gradient(to right, #a8ff78, #78ffd6)",
          color: "#2C3E50",
        };

        case "Used":
          return{
            background: "linear-gradient(to right, #d9afd9, #97d9e1)",
            color: "#333333",
          };

          case "Refurb":
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
    <div className="laptop-list-container">
      <div className="laptop-container">
        {/* Laptop 1 */}
        <img className="laptop-brand" src={laptop.brand} alt={laptop.model} />
        <div className="laptop-content-container">
          <div className="laptop-specs">
            <h2 className="laptop-model">{laptop.model}</h2>
            <p className="laptop-condition" style={conditionStyling(laptop.condition)}>{laptop.condition}</p>
          </div>
          <div style={detailsStyles}>
          <h4>Type: {laptop.type}</h4>
          <h4>Processor: {laptop.processor}</h4>
          <h4>Serial Number: {laptop.sNo}</h4>
          <h4>Purchase Date: {laptop.purchase_date}</h4>
          <h4>Current Value: R{laptop.current_value}</h4>
          </div>
           <button onClick={() => setShow((!show))}> {show ? "View Less": "View More"}</button>
        </div>
      </div>
    </div>
  );
}
