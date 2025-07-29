import { Box } from "@mui/material";

export function NotFound(){
    return (
        <Box className="not-found-container">
        <Box
        component="img"
        src="https://www.shutterstock.com/image-vector/404-page-not-found-error-600nw-685240003.jpg"
        alt="not found"
        className="not-found">
        </Box>
        </Box>
    )
}
