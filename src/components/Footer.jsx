import { Box, Typography, Container, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#153448',
        color: '#fff',
        py: 4,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Work Sans, sans-serif' }}>
          Thank you for visiting!
        </Typography>

        <Divider sx={{ backgroundColor: '#ffffff33', my: 2 }} />

        <Typography variant="caption" display="block" align="center" sx={{ fontFamily: 'Work Sans, sans-serif' }}>
          © {new Date().getFullYear()} Sridharan Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
