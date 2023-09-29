import React from "react";
import {
  Box,
  Grid,
  Link,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:992px)");

  return (
    <FooterWrapper>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={2}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={12}>
                <Link>Home</Link>
              </Grid>
              <Grid item xs={3} md={12}>
                <Link>About</Link>
              </Grid>
              <Grid item xs={3} md={12}>
                <Link>Properties</Link>
              </Grid>
              <Grid item xs={3} md={12}>
                <Link>FAQs</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={12}>
                <Link>Register</Link>
              </Grid>
              <Grid item xs={3} md={12}>
                <Link>Login</Link>
              </Grid>
              <Grid item xs={3} md={12}>
                <Link>Contact</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={12}>
                <Link>Privacy Policy</Link>
              </Grid>
              <Grid item xs={3} md={12}>
                <Link>Terms Of Use</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} ml={isMobile ? 0 : 20}>
            <Typography variant="h6" color="white">
              Newsletter
            </Typography>
            <Typography variant="subtitle1" color="white">
              Stay updated on new investment opportunities
            </Typography>
            <StyledInput />
          </Grid>
        </Grid>
      </Box>
      <DisclaimerWrapper>
        <Typography variant="h6" color="white">
          Disclaimer:
        </Typography>

        <Typography variant="subtitle2" color="white">
          All the information on this website www.yieldwisex.com is published in
          good faith and for general information purpose only. YieldWiseX does
          not make any warranties about the completeness, reliability and
          accuracy of this information. Any action you take upon the information
          you find on this website www.yieldwisex.com, is strictly at your own
          risk. YieldWiseX will not be liable for any losses and/or damages in
          connection with the use of this website.
        </Typography>
        <Typography variant="subtitle2" color="white">
          YieldWiseX’s research team, software, algorithms and analytical
          processes used have, to the best of its ability, taken into account
          various factors – both quantitative measures and qualitative
          assessments, in an unbiased manner, while designing a suitable
          investment model. However, such assessments carry inherent unknown
          risks and uncertainties linked to broad markets as well as analysts’
          expectations about future events.
        </Typography>
        <Typography variant="subtitle2" color="white">
          It is further clarified in explicit terms that nothing on this website
          shall be construed as Direct or Indirect Offer to Invest/Buy/Fund in
          any of Investment Schemes/Real Estate Schemes/Real Estate Properties/
          Financial Schemes, launched by YieldWiseX or it’s associate entities.
          That nothing on this website is for solicitation or invitation to any
          individual/firm/ company/Association Of Persons/ entity for any
          Investment schemes pertaining to Real Estate or otherwise, and it is
          further clarified that any scheme listed on the website involves
          standard market risks and is neither insured by YieldWiseX, nor we can
          be held liable for any monetary or other losses the investor may occur
          due to the same.
        </Typography>
        <Typography variant="subtitle2" color="white">
          The past performance of any opportunity listed on this website is not
          necessarily indicative of its future performance. YieldWiseX is not
          guaranteeing or assuring any return under any of the opportunities
          listed on this website. You are requested to exercise prudent
          discretion (including by obtaining expert professional advice with
          regard to specific legal, tax and financial implications) prior
          investing in any opportunity listed on this website.
        </Typography>
        <Typography variant="subtitle2" color="white">
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          of useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all or any of the content found on these sites.
          Site owners and content may change without notice and may occur before
          we have the opportunity to remove a link which may have gone ‘bad’.
        </Typography>
        <Typography variant="subtitle2" color="white">
          By using our website, you hereby consent to our disclaimer and agree
          to its
        </Typography>
      </DisclaimerWrapper>
      <LowerFooterWrapper>
        <Typography variant="body1" color="white">
          © 2023 YieldWiseX
        </Typography>
        <img src="/images/Logo-light.png" />
      </LowerFooterWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled("footer")(
  () => `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: #102348;
    padding: 90px 50px
    

`
);

const DisclaimerWrapper = styled(Box)(
  () => `
    display: flex;
    flex-direction: column;
    gap: 20px;
`
);

const LowerFooterWrapper = styled(Box)(
  () => `
    display: flex;
    align-items: center;
    justify-content: space-between;
`
);

const StyledInput = styled(TextField)(
  () => `
    height: 39px;
    background: #ffffff;
    width: 282px;
    @media (max-width: 768px) {
      width: 100%;
     }
`
);
