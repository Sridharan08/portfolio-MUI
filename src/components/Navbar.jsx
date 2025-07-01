import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#153448' }}>
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Brand Title */}
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 'bold',
                fontSize: isMobile ? '1.2rem' : '1.5rem',
                color: '#fff',
                letterSpacing: '0.05rem',
                '&:hover': {
                  color: '#cfd8dc',
                },
              }}
            >
              Portfolio
            </Typography>

            {/* Navigation Links or Hamburger */}
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleDrawerToggle}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navLinks.map((nav) => (
                  <Button
                    key={nav.label}
                    component={Link}
                    to={nav.path}
                    sx={navButtonStyle}
                  >
                    {nav.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: 'block', md: 'none' } }}
      >
        <Box
          sx={{
            width: 200,
            backgroundColor: '#153448',
            height: '100%',
            color: '#fff',
            fontFamily: 'Work Sans, sans-serif',
          }}
        >
          <List>
            {navLinks.map((nav) => (
              <ListItem key={nav.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={nav.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#1e3a5f',
                    },
                  }}
                >
                  <ListItemText
                    primary={nav.label}
                    primaryTypographyProps={{ fontSize: '1rem', pl: 1 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const navButtonStyle = {
  color: '#fff',
  fontFamily: 'Work Sans, sans-serif',
  fontSize: '0.9 rem',
  '&:hover': {
    backgroundColor: '#1e3a5f',
  },
};

export default Navbar;
