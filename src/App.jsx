import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import LaptopChromebookSharpIcon from "@mui/icons-material/LaptopChromebookSharp";
import { Box, List, ListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes
} from "react-router";
import "./css/confirm.css";
import "./css/dashboard.css";
import "./css/navBar.css";
import "./css/new-laptop.css";
import "./css/not-found.css";
import "./css/quotes.css";
import logo from "./images/GuardIT_logo.png";
import { Confirm } from "./pages/Confirm";
import { EditLaptop } from "./pages/EditLaptop";
import { LaptopList } from "./pages/LaptopList";
import { NewLaptop } from "./pages/NewLaptop";
import { NotFound } from "./pages/NotFound";
import { Quotes } from "./pages/Quotes";
import "./styles.css";
import {DarkLight} from "./components/DarkLight";


export default function App() {
  const [quoteDetails, setQuote] = useState();
  const selectedQuote = (quoteDetails) => {
    setQuote(quoteDetails);
  };

  return (
          <Box className="App">
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <List className="nav-link-container">
          <ListItem>
            <Box
              component="img"
              src={logo}
              alt="GuardIT logo"
              className="logo"
              sx={{ ml: 15 }}
            ></Box>
          </ListItem>
          <Box className="nav-link-description">
            <ListItem className="spacing-words">
              <Link className="nav-link" to="/dashboard">
                <HomeSharpIcon sx={{ fontSize: 25, verticalAlign: "middle" }} />{" "}
                Dashboard
              </Link>
            </ListItem>
            <ListItem className="spacing-words">
              <Link className="nav-link" to="/laptop/new">
                <LaptopChromebookSharpIcon
                  sx={{ fontSize: 25, verticalAlign: "middle" }}
                />{" "}
                Register Laptop
              </Link>
            </ListItem>
          </Box>
        </List>
      </AppBar>
      <Routes>
        <Route path="" element={<Navigate to="/dashboard" replace />} />
        <Route path="home" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<LaptopList />} />
        <Route path="/laptop/new" element={<NewLaptop />} />
        <Route
          path="quotes/:id"
          element={<Quotes selectedQuote={selectedQuote} />}
        />
        <Route
          path="/confirm"
          element={<Confirm selectedQuote={quoteDetails} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/laptop/:id/edit" element={<EditLaptop />} />
      </Routes>
    </Box>
  );
}
