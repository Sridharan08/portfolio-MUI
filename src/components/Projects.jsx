import { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: `${fadeIn} 0.6s ease-in-out`,
  textAlign: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  width: 300,
  height: 350,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#DDDDDD',
  boxShadow: theme.shadows[5],
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
    title: 'E-Commerce Website | MERN Stack',
    description: 'This project includes a React.js frontend and a Node.js, Express, MongoDB backend with features like authentication, shopping cart, order history.',
    link: 'https://ecommerce-website-tan-rho.vercel.app/',
  },
  {
    title: 'Employee Management System | MERN Stack',
    description: 'Developed a full-stack web application using React, Node.js, and MongoDB. Includes employee CRUD, real-time location tracking, audit trail, and analytics dashboard using ChartJS.',
    link: 'https://emp-dashboard-frontend.vercel.app/',
  },
  {
    title: 'Coffee Menu | React.js',
    description: 'Displays a list of coffee products with filtering options, responsive card layout, and animated transitions. Built using functional components and useState for dynamic filtering.',
    link: 'https://coffee-listing-flax.vercel.app/',
  },
  {
    title: 'Registration Form | MERN Stack',
    description: 'Developed a front end using React.js and implemented CRUD Operation with MongoDB, form validation, JWT-based authentication, and responsive UI with Bootstrap components.',
    link: 'https://frontend-form-project.vercel.app/',
  }
];

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
        py: 5,
        fontFamily: 'Work Sans, sans-serif',
        backgroundColor: containerBackgroundColor,
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 6, color: '#547792', fontWeight: 'bold' }}>
        Projects
      </Typography>

      <Grid container spacing={8}>
        {projects.map((project, index) => {
          const isExpanded = expanded[index];
          const showDescription = isExpanded ? project.description : project.description.slice(0, 120) + (project.description.length > 120 ? '...' : '');

          return (
            <Grid item xs={12} sm={6} key={index}>
              <AnimatedCard>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'black', fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ flexGrow: 1, color: 'black', fontStyle: 'italic', fontSize: '1rem' }}>
                    {showDescription}
                  </Typography>

                  {project.description.length > 100 && (
                    <Button
                      size="small"
                      sx={{ mt: 1, textTransform: 'capitalize', color: customButtonColor }}
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                    </Button>
                  )}
                </CardContent>

                <Button
                  variant="contained"
                  sx={{
                    mb: 2,
                    backgroundColor: customButtonColor,
                    fontWeight: 'bolder',
                    width: '100%',
                    color: 'white',
                  }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
