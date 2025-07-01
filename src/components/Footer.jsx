import React from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#153448',
        color: '#fff',
        py: isMobile ? 3 : 4,
        mt: isMobile ? 3 : 5,
        fontFamily: 'Work Sans, sans-serif',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: isMobile ? '1.1rem' : '1.4rem',
          }}
        >
          Thank you for visiting!
        </Typography>

        <Divider
          sx={{
            backgroundColor: '#ffffff33',
            my: isMobile ? 1.5 : 2,
            mx: 'auto',
            width: isMobile ? '80%' : '60%',
          }}
        />

        <Typography
          variant="caption"
          display="block"
          sx={{
            fontSize: isMobile ? '0.7rem' : '0.85rem',
            mt: 1,
            opacity: 0.8,
          }}
        >
          © {new Date().getFullYear()} Sridharan Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
