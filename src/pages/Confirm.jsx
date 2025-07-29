import LaptopIcon from "@mui/icons-material/Laptop";
import LockIcon from "@mui/icons-material/Lock";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

function createData(name, value){
  return {name, value};
}

export function Confirm({selectedQuote}){
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
    createData('Current value (halfed)', Math.round((currentValue * 0.5))),
    createData('Total', totalPrice * 12),
    createData('Total Per Month', totalPrice)
  ]

  const rowsLaptop = [
    createData('Brand', brandName),
    createData('Type', type),
    createData('Processor', processor),
    createData('Condition', condition),
    createData('Serial Number', sNo),
    createData('Purchase Date', purchaseDate),
    createData('Current Value', "R" + currentValue),
  ]

  return (
    <Box>
      <Box className="headings">
        <Typography variant="h3" sx={{ mb: 5 }}>
          Locked, loaded, and laptop-secured! <LockIcon sx={{fontSize: 35}}/>
        </Typography>
        <Typography variant="h5" sx={{ mb: 5 }}>
          {quoteType} coverage active for your {model} - R{totalPrice} pm
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Device Specs & Quote Breakdown:
        </Typography>
      </Box>
      <Box className="details-container">
        <Box>
          <Typography variant="h5">
            <LaptopIcon sx={{ fontSize: 25, verticalAlign: "middle" }} /> Laptop
            Details:
          </Typography>
          <Box className="content">
            <TableContainer>
              <Table className="table">
                <TableBody>
                  {rowsLaptop.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "& td, & th": { border: 0, py: 1, px: 2, boxShadow: 1 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontSize: "1.2rem",
                          width: 400,
                          fontWeight: "bold",
                        }}
                      >
                        {row.name}:
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          sx={{
                            fontSize: "1.2rem",
                          }}
                        >
                          {row.value}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <Box>
          <Typography variant="h5">
            <RequestQuoteIcon sx={{ fontSize: 25, verticalAlign: "middle" }} /> Quote Breakdown:
          </Typography>
          <Box className="content">
            <TableContainer>
              <Table>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "& td, & th": { border: 0, py: 1, px: 2, boxShadow: 1 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontSize: "1.2rem",
                          width: 400,
                          fontWeight: "bold",
                        }}
                      >
                        {row.name}:
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight:
                            row.name == "Total Per Month" ? "bold" : "normal",
                        }}
                      >
                        R{row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
