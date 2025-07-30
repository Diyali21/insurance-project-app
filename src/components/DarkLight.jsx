import {
  Box,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Switch,
  ThemeProvider
} from "@mui/material";
import { useState } from "react";

export const DarkLight = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = createTheme({ palette: { mode: "light" } });
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{display: "flex", ml: 9, mt: 2}}>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
          label="Dark Mode"
        />
      </Box>
      {children}
    </ThemeProvider>
  );
};
