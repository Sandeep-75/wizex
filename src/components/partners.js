import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";

const PartnerWrapper = styled(Box)(
  () => `
    background-color: #F5F5F5;
    padding: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
`
);

const Image = styled("img")(
  () => `
    margin-top: 40px
`
);

const LIST_PARTNERS = [
  {
    name: "Custodian & Demat",
    logo: "/images/icici.png",
  },
  {
    name: "Fund Account",
    logo: "/images/icici-sec.png",
  },
  {
    name: "Digital Onboarding",
    logo: "/images/kfintech.png",
  },
  {
    name: "Brokerage",
    logo: "/images/sharekhan.png",
  },
  {
    name: "Legal",
    logo: "/images/icul.png",
  },
];

function Partners() {
  return (
    <section>
      <PartnerWrapper>
        <Typography variant="h2" textAlign="center">
          <Typography variant="span">PMS</Typography>{" "}
          <Typography variant="span" color="textSecondary">
            Partners
          </Typography>
        </Typography>

        <Grid container spacing={5} justifyContent={"space-evenly"}>
          {LIST_PARTNERS.map((item, index) => (
            <Grid item xs={12} lg={2} key={index} textAlign="center">
              <Typography variant="body1">{item.name}</Typography>
              <Image src={item.logo} />
            </Grid>
          ))}
        </Grid>
      </PartnerWrapper>
    </section>
  );
}

export default Partners;
