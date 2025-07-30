import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import LaptopChromebookSharpIcon from "@mui/icons-material/LaptopChromebookSharp";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button, List, ListItem, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate
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

export default function App() {
  const [quoteDetails, setQuote] = useState();
  const selectedQuote = (quoteDetails) => {
    setQuote(quoteDetails);
  };

  const [theme, setTheme] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const navigate = useNavigate();


  return (
    <Box className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper sx={{ minHeight: "100vh" }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
            color="default"
            sx={{background:"transparent", boxShadow:"none"}}>
              <Toolbar className="spacing">
                <Button className="logo" color="inherit">
                  <Box
                    component="img"
                    src={logo}
                    alt="GuardIT logo"
                    className="logo"
                    sx={{ ml: 15 }}
                  ></Box>
                </Button>
                <Button onClick={() => navigate("/dashboard")} color="inherit">
                  <HomeSharpIcon
                    sx={{
                      fontSize: 22,
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  Dashboard
                </Button>

                <Button onClick={() => navigate("/laptop/new")} color="inherit">
                  <LaptopChromebookSharpIcon
                    sx={{
                      fontSize: 22,
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  Register Laptop
                </Button>

                <Button
                  sx={{ marginLeft: "auto" }}
                  color="inherit"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  startIcon={
                    theme === "light" ? <DarkModeIcon /> : <LightModeIcon />
                  }
                >
                  {theme === "light" ? "dark" : "light"}
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <List className="nav-link-container">
            <ListItem></ListItem>
            <Box className="nav-link-description">
              <ListItem className="spacing-words">
                <Link className="nav-link" to="/dashboard">
                  {" "}
                </Link>
              </ListItem>
              <ListItem className="spacing-words">
                <Link className="nav-link" to="/laptop/new">
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontSize: 20 }}
                  ></Typography>
                </Link>
              </ListItem>
            </Box>
          </List>

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
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
