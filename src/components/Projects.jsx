import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';


// Animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Card
const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: `${fadeIn} 0.6s ease-in-out`,
  textAlign: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  width: 300,
  height: 350,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#DDDDDD',
  boxShadow: theme.shadows[5],
  borderRadius: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const customButtonColor = '#153448';
const containerBackgroundColor = '#ffffff';

const projects = [
  {
    title: 'Bank Transactions Analyzer | Flask & Pandas',
    description:
      'Built a web-based financial analyzer using Flask and Pandas to process CSV bank data, perform data cleaning, flag suspicious transactions, and visualize monthly and category-wise spending with Chart.js in a responsive browser UI.',
    link: 'https://bank-transactions-analyzer-1.onrender.com/',
    
  },
  {
    title: 'E-Commerce Website | MERN Stack',
    description:
      'This project includes a React.js frontend and a Node.js, Express, MongoDB backend with features like authentication, shopping cart, order history.',
    link: 'https://ecommerce-website-tan-rho.vercel.app/',
    
  },
  {
    title: 'Employee Management System | MERN Stack',
    description:
      'Developed a full-stack web application using React, Node.js, and MongoDB. Includes employee CRUD, real-time location tracking, audit trail, and analytics dashboard using ChartJS.',
    link: 'https://emp-dashboard-frontend.vercel.app/',
   
  },
  {
    title: 'Coffee Menu | React.js',
    description:
      'Displays a list of coffee products with filtering options, responsive card layout, and animated transitions. Built using functional components and useState for dynamic filtering.',
    link: 'https://coffee-listing-flax.vercel.app/',
   
  },
  {
    title: 'Registration Form | MERN Stack',
    description:
      'Developed a front end using React.js and implemented CRUD Operation with MongoDB, form validation, JWT-based authentication, and responsive UI with Bootstrap components.',
    link: 'https://frontend-form-project.vercel.app/',
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
        py: isMobile ? 5 : 6,
        px: isMobile ? 2 : 4,
        fontFamily: 'Work Sans, sans-serif',
        backgroundColor: containerBackgroundColor,
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        gutterBottom
        sx={{
          mb: isMobile ? 4 : 6,
          color: '#547792',
          fontWeight: 'bold',
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {projects.map((project, index) => {
          const isExpanded = expanded[index];
          const showDescription = isExpanded
            ? project.description
            : project.description.slice(0, 120) +
              (project.description.length > 120 ? '...' : '');

          return (
            <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
              <AnimatedCard>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant={isMobile ? 'h6' : 'h5'}
                    gutterBottom
                    sx={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {project.icon}
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      flexGrow: 1,
                      color: 'black',
                      fontStyle: 'italic',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      mt: 1,
                    }}
                  >
                    {showDescription}
                  </Typography>

                  {project.description.length > 100 && (
                    <Button
                      size="small"
                      onClick={() => toggleExpand(index)}
                      sx={{
                        mt: 1,
                        textTransform: 'capitalize',
                        color: customButtonColor,
                        fontSize: isMobile ? '0.85rem' : '1rem',
                        fontWeight: 500,
                      }}
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                    </Button>
                  )}
                </CardContent>

                <Button
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mb: 2,
                    backgroundColor: customButtonColor,
                    color: 'white',
                    fontWeight: 'bold',
                    width: '100%',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    '&:hover': {
                      backgroundColor: '#1e3a5f',
                    },
                  }}
                >
                  View Project
                </Button>
              </AnimatedCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
