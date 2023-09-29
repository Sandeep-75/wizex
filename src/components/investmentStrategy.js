import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

const InvestmentStrategy = () => {
  const isMobile = useMediaQuery("(max-width:992px)");
  const headingSize = isMobile ? "h3" : "h2";

  return (
    <section>
      <InvestmentWrapper>
        <Box>
          <Typography variant={headingSize} textAlign="center" m="auto">
            Cream of the Crop:
          </Typography>

          <Typography variant={headingSize} textAlign="center">
            <Typography variant="span">The</Typography>{" "}
            <Typography variant="span" color="textSecondary">
              CREAM
            </Typography>
            <Typography variant="span">Investment Strategy</Typography>
          </Typography>
        </Box>

        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <img src="/icons/access.svg" />
              </Box>
              <Typography
                variant="h4"
                gutterBottom
                fontWeight="700"
                color="textSecondary"
                textAlign={isMobile ? "center" : "left"}
              >
                Unprecedented Access
              </Typography>
              <Typography
                variant="subtitle1"
                color="#000000"
                textAlign={isMobile ? "justify" : "left"}
              >
                The first-of-its-kind real estate centric PMS in India. A joint
                collaboration between Integrow AMC and WiseX.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <img src="/icons/proction.svg" />
              </Box>

              <Typography
                variant="h4"
                fontWeight="700"
                gutterBottom
                color="textSecondary"
                textAlign={isMobile ? "center" : "left"}
              >
                Downside Protection & Upside Participation
              </Typography>
              <Typography
                variant="subtitle1"
                color="#000000"
                textAlign={isMobile ? "justify" : "left"}
              >
                The CREAM Strategy offers access to a diversified Real Estate
                portfolio that aims to capture long-term growth through
                exploiting short-term opportunities. This investment approach
                combines income generation with the potential for significant
                gains, specifically tailored for the current volatile market
                conditions.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <img src="/icons/notes.svg" />
              </Box>
              <Typography
                variant="h4"
                gutterBottom
                fontWeight="700"
                color="textSecondary"
                textAlign={isMobile ? "center" : "left"}
              >
                Actively Managed Multi-Asset Allocation{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                color="#000000"
                textAlign={isMobile ? "justify" : "left"}
              >
                Strategic diversification across listed equities, listed debt,
                and unlisted debt. The portfolio is actively managed to identify
                optimal exit and entry scenarios to establish an alpha and
                outperform the broader market index.
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Button variant="contained" size="large">
          Get Started
        </Button>
      </InvestmentWrapper>
    </section>
  );
};

export default InvestmentStrategy;

const InvestmentWrapper = styled(Box)(
  () => `
    background-color: #F5F5F5;
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
    padding: 40px 100px;
    @media (max-width: 1200px) {
      height: auto;
      padding-top: 40px;
     }

    @media (max-width: 992px) {
      padding: 40px;
     }
`
);
