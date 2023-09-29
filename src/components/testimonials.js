import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

function Testimonials() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const headingSize = isMobile ? "h3" : "h2";

  return (
    <section>
      <TestimonialWrapper>
        <Typography variant={headingSize} textAlign="center">
          <Typography variant="span">From someone</Typography>{" "}
          <Typography variant="span" color="textSecondary">
            who has done it before
          </Typography>
        </Typography>

        <Container>
          <StyledCard>
            <CardContent>
              <Grid container>
                <Grid items xs={12} md={4}>
                  <CardMediaWrapper>
                    <CardMedia
                      component="img"
                      image="images/user.png"
                      sx={{ width: "359px", height: "329px" }}
                    />

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      textAlign="center"
                    >
                      Intergrow
                    </Typography>
                    <Typography variant="subtitle1" textAlign="center">
                      Asset Management
                    </Typography>
                  </CardMediaWrapper>
                </Grid>
                <Grid items xs={12} md={8}>
                  <Box>
                    <Typography gutterBottom variant="h3" color="textSecondary">
                      Integrow Asset Management
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={300}>
                      Integrow is a real estate focused Asset Management firm
                      focusing on transformation through shared insights,
                      effective processes and creating value enhancements for
                      its stakeholders. Integrow is a real estate focused Asset
                      Management firm focusing on transformation through shared
                      insights, effective processes and creating value
                      enhancements for its stakeholders.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        </Container>
      </TestimonialWrapper>
    </section>
  );
}

export default Testimonials;

const TestimonialWrapper = styled(Box)(
  () => `
    width: 100%;
    background-color: #FFFFFF;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between
  
  `
);

const StyledCard = styled(Card)(
  () => `
    background-color: #F6F6F6;
    height: 433px;
    width: 100%;
    border-radius: 21px

    @media screen and (max-width: 992px) {
     
    background-color: red;

     }
`
);

const CardMediaWrapper = styled(CardMedia)(
  () => `
    width: 359px;
    height: 359px;
`
);
