import React from 'react';
import { AppBar, Toolbar, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="sticky" sx={{ backgroundColor: '#153448' }}>
    <Container>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#fff',
            letterSpacing: '0.05rem',
            '&:hover': {
              color: '#cfd8dc',
            },
          }}
        >
          Portfolio
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" sx={navButtonStyle}>Home</Button>
          <Button component={Link} to="/skills" sx={navButtonStyle}>Skills</Button>
          <Button component={Link} to="/projects" sx={navButtonStyle}>Projects</Button>
          <Button component={Link} to="/contact" sx={navButtonStyle}>Contact</Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

const navButtonStyle = {
  color: '#fff',
  fontFamily: 'Work Sans, sans-serif',
  '&:hover': {
    backgroundColor: '#1e3a5f',
  },
};

export default Navbar;
