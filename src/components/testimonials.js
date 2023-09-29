import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";

function Testimonials() {
  return (
    <section>
      <TestimonialWrapper>
        <Typography variant="h2" textAlign="center">
          <Typography variant="span">From someone</Typography>{" "}
          <Typography variant="span" color="textSecondary">
            who has done it before
          </Typography>
        </Typography>

        <Container>
          <StyledCard>
            <CardContent>
              <Stack direction={"row"} alignItems={"center"} spacing={5}>
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

                <Box>
                  <Typography gutterBottom variant="h3" color="textSecondary">
                    Integrow Asset Management
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={300}>
                    Integrow is a real estate focused Asset Management firm
                    focusing on transformation through shared insights,
                    effective processes and creating value enhancements for its
                    stakeholders. Integrow is a real estate focused Asset
                    Management firm focusing on transformation through shared
                    insights, effective processes and creating value
                    enhancements for its stakeholders.
                  </Typography>
                </Box>
              </Stack>
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
    height: 600px;
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
`
);

const CardMediaWrapper = styled(CardMedia)(
  () => `
    width: 359px;
    height: 359px;
`
);
