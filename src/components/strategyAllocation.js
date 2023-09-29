import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  styled,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#102348",
    color: theme.palette.common.white,
    padding: 10,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f5f5",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "rgb(29, 164, 117, 0.2)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return <Typography variant="body1"></Typography>;
}

const rows = [
  {
    investment: "Listed Equity",
    features: "Growth Momentum",
    discretionary: "40%",
    nondiscretionary: "XX%",
  },
  {
    investment: "Listed REITS",
    features: "Growth Kicker + Regular Distribution",
    discretionary: "20%",
    nondiscretionary: "XX%",
  },
  {
    investment: "Listed Debt",
    features: "Credit Enhancement + Regular Distribution",
    discretionary: "20%",
    nondiscretionary: "XX%",
  },
  {
    investment: "Unlisted Debt*",
    features: "Managed + Regular Distribution",
    discretionary: "20%",
    nondiscretionary: "XX%",
  },
];

const StrategyAllocation = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const headingSize = isMobile ? "h3" : "h2";

  return (
    <section>
      <AllocationWrappper>
        <Typography variant={headingSize} textAlign="center">
          <Typography variant="span">Strategy &</Typography>{" "}
          <Typography variant="span" color="textSecondary">
            Allocation
          </Typography>
        </Typography>

        <Container maxWidth="lg">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Investments</StyledTableCell>
                  <StyledTableCell align="center">Features</StyledTableCell>
                  <StyledTableCell rowSpan={2} colspan={2} align="center">
                    <Typography variant="h4" color="white" gutterBottom>
                      Allocation
                    </Typography>
                    <TableContainer variant="outlined">
                      <Table sx={{ width: "100%" }}>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell
                              align="center"
                              sx={{
                                border: "1px solid rgba(224, 224, 224, 1);",
                              }}
                            >
                              Investments
                            </StyledTableCell>
                            <StyledTableCell
                              align="center"
                              sx={{
                                border: "1px solid rgba(224, 224, 224, 1);",
                              }}
                            >
                              Features
                            </StyledTableCell>
                          </TableRow>
                        </TableHead>
                      </Table>
                    </TableContainer>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        align="center"
                      >
                        {row.investment}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        align="center"
                      >
                        {row.features}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        align="center"
                      >
                        {row.discretionary}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        align="center"
                      >
                        {row.nondiscretionary}
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

        <Button variant="contained" size="large">
          Get Started
        </Button>
      </AllocationWrappper>
    </section>
  );
};

export default StrategyAllocation;

const AllocationWrappper = styled(Box)(
  () => `
    height: 630px;
    width: 100%;
    padding: 40px ;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: space-between

    @media (max-width: 992px) {
      padding: 40px !important;
     }
 
`
);
