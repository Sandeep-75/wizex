import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Hero() {
  const isMobile = useMediaQuery("(max-width:992px)");
  const headingSize = isMobile ? "h3" : "h1";

  return (
    <section>
      <HeadingWrapper>
        <Box width={isMobile ? "100%" : "45%"}>
          <Typography variant={headingSize} fontWeight="700" color="white">
            CREAM PMS - 
            <Typography variant="span" color="textSecondary" fontWeight={500}>
              Composite Real Estate Enhanced Active Multi-Asset
            </Typography>
          </Typography>

          <Typography variant="h3" color="white" mt={2}>
            India’s 1st Sector Specific Real Estate PMS
          </Typography>

          <Button
            sx={{ mt: 8 }}
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            color="secondary"
          >
            Get Started
          </Button>
        </Box>
      </HeadingWrapper>
    </section>
  );
}

export default Hero;

const HeadingWrapper = styled(Box)(
  () => `
     position: relative;
     margin-top: 60px;
     height: 569px;
     width: 100%;
     background-color: #003482;
     background-image: url("/images/hero.png");
     background-size: cover;
     background-repeat: no-repeat;
     background-position: right;
     padding: 50px;
     display: flex;
     align-items: center
    `
);
