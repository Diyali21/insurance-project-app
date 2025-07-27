import { LaptopList } from "./pages/LaptopList";
import "./dashboard.css";
import "./styles.css";
import { Routes, Route, Link, Navigate, useParams, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { NewLaptop } from "./NewLaptop";
import { useState } from "react";
import { INITIAL_LAPTOPS } from "./assets/components/INITIAL_LAPTOPS";
import { Quotes } from "./pages/Quotes";
import {Box, Typography, Grid, TableContainer, TableCell, Paper, TableBody, Table, TableRow, List, ListItem, ListItemText} from "@mui/material";

export default function App() {

  const [laptop_details, setLaptops] = useState(INITIAL_LAPTOPS );
  const [quoteDetails, setQuote] = useState();
  const selectedQuote = (quoteDetails) => {
    setQuote(quoteDetails);
  }

  return (
      <div className="App">
        <header>
          <nav>
            <ul className="nav-link-container">
              <li className="spacing-words">
                <Link className="nav-link" to="/dashboard"><FontAwesomeIcon icon={faHouse} size="0.5x" /></Link>
              </li>
              <li className="spacing-words">
                <Link className="nav-link" to="/laptop/new"><FontAwesomeIcon icon={faLaptop} size="0.5x" /></Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
        <Route path="" element={<Navigate to="/dashboard" replace />} />
        <Route path="home" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<LaptopList laptop_details={laptop_details}/>} />
        <Route path="/laptop/new" element={<NewLaptop laptop_details={laptop_details} setLaptops={setLaptops}/>} />
        <Route path="quotes/:id" element={<Quotes laptop_details={laptop_details} selectedQuote={selectedQuote}/>}/>
        <Route path="/confirm" element= {<Confirm selectedQuote={quoteDetails}/>}/>

        {/* <Route path="/laptop/new" element={}></Route> */}
        </Routes>
       </div>
  );
}

function createData(name, value){
  return {name, value};
}

function Confirm({selectedQuote}){
  const {
    quoteType,
    brandName,
    model,
    type,
    processor,
    condition,
    sNo,
    purchaseDate,
    currentValue,
    conditionPrice,
    brandPrice,
    processorPrice,
    yearPrice,
    optionPrice,
    totalPrice,
  } = selectedQuote;

  const rows = [
    createData('Brand', brandPrice),
    createData('Processor', processorPrice),
    createData('Condition', conditionPrice),
    createData('Year', yearPrice),
    createData('Tier', optionPrice),
    createData('Current value', Math.round((currentValue * 0.5))),
    createData('Total', totalPrice * 12),
    createData("Total Per Month", totalPrice)
  ]

  const rowsLaptop = [
    createData('Brand', brandName),
    createData('Type', type),
    createData('Processor', processor),
    createData('Condition', condition),
    createData('Serial Number', sNo),
    createData('Purchase Date', purchaseDate),
    createData('Current Value (halfed)', "R" + currentValue),
  ]

  return(
    <div>
      <Box className="headings">
        <Typography variant="h3" sx={{mb: 5}}>Locked, loaded, and laptop-secured! 🔐</Typography>
        <Typography variant="h5" sx={{mb: 5}}>{quoteType} coverage active for your {model} - R{totalPrice} pm</Typography>
        <Typography variant="h6" sx={{mb: 3}}>Device Specs & Quote Breakdown:</Typography>
      </Box>
      <Box className="laptop-details">
        <Box>
          <Table>
            <Typography  variant="h5" gutterBottom>💻 Laptop Details</Typography>
            <Box className="content">
            <TableBody>
            {rowsLaptop.map((row) => (
           <TableRow
             key={row.name}
            sx={{ '& td, & th': { border: 0, py: 1, px: 2, boxShadow: 1 } }}
           >
             <TableCell component="th" scope="row" sx={{ fontSize: "1.2rem", width: 400 }}>
              <strong>{row.name}:</strong>
           </TableCell>
            <TableCell align="left">
            <Typography
             sx={{
              fontSize: "1.2rem"
           }}
            >
            {row.value}
           </Typography>
        </TableCell>
        </TableRow>
         ))}
          </TableBody>

          </Box>
          </Table>
          </Box>

          <Box>
          <Table>
            <Typography variant="h5" gutterBottom>🧮 Quote Breakdown</Typography>
            <Box className="content">
            <TableBody>
            {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '& td, & th': { border: 0, py: 1, px: 2, boxShadow: 1 } }}
            >
              <TableCell component="th" scope="row" sx={{fontSize: "1.2rem", width: 400}}>
                <strong>{row.name}:</strong>
              </TableCell>
               <TableCell align="left" sx={{fontSize: "1.2rem", fontWeight: row.name =="Total Per Month"? 800 : 100}}>R{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Box>
          </Table>
          </Box>
        </Box>
    </div>
  )
}
