import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Container,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        py: isMobile ? 6 : 10,
        px: isMobile ? 2 : 0,
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            fontFamily: 'Work Sans, sans-serif',
            color: 'black',
            width: '100%',
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* Left Side: Text Section */}
          <Box flex={1}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Work Sans, sans-serif',
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                color: 'black',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
              }}
            >
              Hi, I'm{' '}
              <Box
                component="span"
                sx={{
                  color: '#547792',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}
              >
                Sridharan P
              </Box>
            </Typography>

            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'React & Python Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: isMobile ? '1.4rem' : '1.8rem',
                display: 'inline-block',
                color: '#A62C2C',
                borderBottom: '2px solid #A62C2C',
                borderRadius: '4px',
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
              repeat={Infinity}
            />

            <Typography
              sx={{
                fontSize: '1.2rem',
                mt: 2,
                mb: 2,
                fontFamily: 'Work Sans, sans-serif',
                width: { xs: '100%', sm: '115%' },
              }}
            >
              I'm a recent graduate with a strong foundation in{' '}
              <strong>web development</strong> and a deep interest in creating
              user-friendly digital solutions.
            </Typography>

            <Typography
              sx={{
                fontSize: '1.2rem',
                mb: 2,
                width: { xs: '100%', sm: '115%' },
              }}
            >
              Skilled in <strong>Figma</strong>, <strong>React.js</strong>,{' '}
              <strong>HTML/CSS</strong>, and <strong>Python</strong> for
              scripting and data analysis. I enjoy solving real-world problems
              with clean, maintainable code and thoughtful UI/UX design.
            </Typography>

            <Typography
              sx={{
                fontSize: '1.2rem',
                mb: 3,
                width: { xs: '100%', sm: '115%' },
              }}
            >
              Currently looking for <strong>entry-level developer roles</strong>{' '}
              to grow and collaborate with experienced mentors.
            </Typography>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2.5}
              sx={{ alignItems: { xs: 'stretch', sm: 'start' } }}
            >
              <Button
                variant="contained"
                onClick={() => navigate('/contact')}
                sx={{
                  backgroundColor: '#DDDDDD',
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 'bold',
                  color: 'black',
                  textTransform: 'none',
                  px: 4,
                  py: 1.2,
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#153448', color: '#fff' },
                }}
              >
                Hire Me
              </Button>

              <Button
                variant="contained"
                onClick={() => navigate('/projects')}
                sx={{
                  backgroundColor: '#DDDDDD',
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 'bold',
                  color: 'black',
                  textTransform: 'none',
                  px: 4,
                  py: 1.2,
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#153448', color: '#fff' },
                }}
              >
                My Work
              </Button>
            </Stack>
          </Box>

          {/* Right Side: Avatar Image */}
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            mt={{ xs: 4, md: 0 }}
          >
            <Avatar
              src="/images/sridhar.jpg"
              alt="Sridharan"
              variant="rounded"
              sx={{
                width: { xs: 250, sm: 300, md: 350 },
                height: { xs: 280, sm: 320, md: 350 },
                borderRadius: '14px',
                boxShadow: 5,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 8,
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
