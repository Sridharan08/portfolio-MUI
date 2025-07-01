import React from 'react';
import {
  Container,
  Typography,
  Link,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const contactItems = [
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: 'black' }} />,
    label: 'Email',
    href: 'mailto:sridhar872004@gmail.com',
    text: 'sridhar872004@gmail.com',
    bgColor: '#DDDDDD',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: 'black' }} />,
    label: 'Phone',
    href: 'tel:+917448326644',
    text: '+91 74483 26644',
    bgColor: '#DDDDDD',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 40, color: 'black' }} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sridharan-p/',
    text: 'linkedin.com/in/sridharan-p',
    bgColor: '#DDDDDD',
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 40, color: 'black' }} />,
    label: 'GitHub',
    href: 'https://github.com/Sridharan08',
    text: 'github.com/Sridharan08',
    bgColor: '#DDDDDD',
  },
];

const handleClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: isMobile ? 4 : 6 }}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        align="center"
        gutterBottom
        sx={{
          mb: isMobile ? 4 : 9,
          color: '#547792',
          fontWeight: 'bold',
          fontFamily: 'Work Sans, sans-serif',
        }}
      >
        Contact
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={isMobile ? 3 : 6}
      >
        {contactItems.map((item, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: item.bgColor,
              fontWeight: 'bold',
              fontFamily: 'Work Sans, sans-serif',
              padding: isMobile ? 1.5 : 2,
              borderRadius: 2,
              boxShadow: 3,
              transition: '0.3s ease-in-out',
              width: { xs: '100%', sm: '45%', md: '30%' },
              height: isMobile ? 'auto' : 60,
              minWidth: 250,
              cursor: 'pointer',
              '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.03)',
              },
            }}
            onClick={() => handleClick(item.href)}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              {item.icon}
              <Box sx={{ ml: 3 }}>
                <Typography
                  variant={isMobile ? 'subtitle1' : 'h6'}
                  sx={{ color: 'black', fontWeight: 'bold' }}
                >
                  {item.label}
                </Typography>
                <Link
                  href={item.href}
                  underline="none"
                  sx={{
                    color: 'black',
                    fontSize: isMobile ? '0.85rem' : '1rem',
                    wordBreak: 'break-word',
                  }}
                >
                  {item.text}
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Contact;
