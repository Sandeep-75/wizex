import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

const GrowthStory = () => {
  const match = useMediaQuery("(max-width:1200px)");
  const isMatch = useMediaQuery("(max-width:992px)");
  const isMobile = useMediaQuery("(max-width:768px)");
  const headingSize = isMatch ? "h3" : "h1";
  const headerFontSize = isMobile ? "h6" : "h5";
  const tieleFontSize = isMobile ? "h3" : "h2";

  return (
    <GrowthWrapper>
      <Card
        maxWidth="lg"
        sx={{
          position: match ? "initial" : "absolute",
          top: -60,
          boxShadow: "none",
          backgroundColor: "#F5F5F5",
        }}
      >
        <TopWrapper>
          <Grid container gap={3} m={isMobile && 3}>
            <Grid item xs={12} sm={6} md={4}>
              <ItemWrapper variant={headerFontSize}>
                <img src="/icons/rupees.svg" alt="rupees" />
                50 Lacs Minimum Investment
              </ItemWrapper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <ItemWrapper variant={headerFontSize}>
                <img src="/icons/verified.svg" alt="verified" />
                SEBI Regulated
              </ItemWrapper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ItemWrapper variant={headerFontSize}>
                <img src="/icons/circle.svg" alt="circle" />
                Instant Liquidity
              </ItemWrapper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <ItemWrapper variant={headerFontSize}>
                <img src="/icons/graph.svg" alt="graph" />
                22%* IRR
              </ItemWrapper>
            </Grid>
          </Grid>
        </TopWrapper>
        <Heading>
          <Typography variant={headingSize}>
            <Typography variant="span">The Indian</Typography>
            <Typography variant="span" color="textSecondary">
              Real Estate Growth Story
            </Typography>
          </Typography>
        </Heading>
        <Grid container spacing={isMobile ? 5 : 1} textAlign={"center"}>
          <Grid item xs={12} lg={6}>
            <img className="graph" src="/images/real-estate-growth.png" />
            <Typography variant="subtitle2">
              Market size of Real Estate in India (US$ Billion)
            </Typography>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Grid container mb={2} justifyContent={isMobile && "center"}>
              <Grid item xs={3}>
                <img src="/icons/money.svg" />
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant={tieleFontSize}
                  textAlign="left"
                  color="textSecondary"
                  gutterBottom
                >
                  US$ 1 Trillion
                </Typography>
                <Typography variant="h6" textAlign="left">
                  market size by 2030 & 13% Contribution to India’s GDP
                </Typography>
              </Grid>
            </Grid>

            <Grid container mb={2} justifyContent={isMobile && "center"}>
              <Grid item xs={3}>
                <img src="/icons/tringle.svg" />
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant={tieleFontSize}
                  textAlign="left"
                  color="textSecondary"
                  gutterBottom
                >
                  18.4% CAGR
                </Typography>
                <Typography variant="h6" textAlign="left">
                  over the last 10 years outperforming other asset classes{" "}
                </Typography>
              </Grid>
            </Grid>

            <Grid container mb={2} justifyContent={isMobile && "center"}>
              <Grid item xs={3}>
                <img src="/icons/rocket.svg" />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant={tieleFontSize}
                  textAlign="left"
                  color="textSecondary"
                  gutterBottom
                >
                  19.5% CAGR{" "}
                </Typography>
                <Typography variant="h6" textAlign="left">
                  expected to grow steadily with strong underlying macro
                  fundamentals
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" size="large">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Card>
    </GrowthWrapper>
  );
};

export default GrowthStory;

const GrowthWrapper = styled(Box)(
  () => `
    background-color: #F5F5F5;
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;

    @media (max-width: 1200px) {
      height: auto;
     }
     
    @media (max-width: 992px) {
      .graph{
        width: 300px;
      }
     }
`
);

const TopWrapper = styled(Box)(
  () => `
    background-color: #F5F5F5;
   padding: 15px;
   width:100%;
`
);

const ItemWrapper = styled(Typography)(
  () => `
    display: flex;
    align-items: center;
    gap: 10px;
`
);

const Heading = styled(Box)(
  () => `
   text-align: center;
   margin: 40px 0;
`
);
