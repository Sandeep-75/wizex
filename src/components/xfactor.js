import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

const Xfactor = () => {
  const isMatch = useMediaQuery("(max-width:992px)");
  const isMobile = useMediaQuery("(max-width:768px)");
  const headingSize = isMobile ? "h3" : "h2";

  return (
    <section>
      <XFactorWrapper>
        <Typography
          variant={headingSize}
          gutterBottom
          textAlign="center"
          m="auto"
          mb={3}
        >
          The
          <img src="/icons/x.svg" />
          <Typography variant="span" textAlign="center" color="textSecondary">
            Factor
          </Typography>
        </Typography>

        <Container maxWidth="lg">
          <Grid container spacing={isMatch ? 10 : 20}>
            <Grid item xs={12} lg={6}>
              <Stack spacing={5}>
                <Box>
                  <Typography variant="h4" gutterBottom color="textSecondary">
                    Asset Evaluation
                  </Typography>
                  <Typography variant="body2" textAlign="justify">
                    The underlying portfolio will comprise a diversified
                    selection of securities. More than 3,500 opportunities are
                    evaluated and only the top 30 are selected in the portfolio.
                    The curation process entails real time evaluation across
                    100+ data points and stringent selection criteria.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h4" gutterBottom color="textSecondary">
                    Investment Tracking & Decision Making
                  </Typography>
                  <Typography variant="body2" textAlign="justify">
                    Integration of technology and automation enables
                    optimisation of the portfolio on an ongoing basis. The
                    proprietary technology has demonstrated capability to
                    identify opportunistic entry and exit events.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h4" gutterBottom color="textSecondary">
                    Investment Tracking & Decision Making
                  </Typography>
                  <Typography variant="body2" textAlign="justify">
                    Integration of technology and automation enables
                    optimisation of the portfolio on an ongoing basis. The
                    proprietary technology has demonstrated capability to
                    identify opportunistic entry and exit events.
                  </Typography>
                </Box>

                <Button sx={{ maxWidth: 184 }} variant="contained" size="large">
                  Get Started
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className="imageContainer">
                <img className="mobileImg" src="/images/mobile.svg" />
              </Box>
              <Typography
                variant="body1"
                mt={isMatch ? 1 : -9}
                textAlign="center"
              >
                Proprietary Investor Dashboard
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </XFactorWrapper>
    </section>
  );
};

export default Xfactor;

const XFactorWrapper = styled(Box)(
  () => `
    background-color: #F5F5F5;
    height: 650px;
    width: 100%;
    padding: 40px 100px;
    @media (max-width: 1200px) {
      height: auto;
     }

    @media (max-width: 992px) {
      padding: 40px;

      .imageContainer{
        display:flex;
        justify-content:center;
      }
      .mobileImg {
        width: 300px;
      }
     }
`
);
