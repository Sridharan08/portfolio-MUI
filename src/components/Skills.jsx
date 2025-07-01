import { Container, Typography, Button, Grid, List, ListItem, ListItemText } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const Skills = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Container
            maxWidth="lg"
            sx={{
                textAlign: 'center',
                py: { xs: 5, sm: 6 },
                backgroundColor: '#DDDDDD',
                borderRadius: 3,
                mt: '60px',
                boxShadow: 2,
                px: isMobile ? 2 : isTablet ? 4 : 6, // Example padding change
            }}
        >
            <Typography
                variant={isMobile ? 'h4' : 'h3'}
                sx={{
                    color: '#547792',
                    fontWeight: 'bold',
                    fontFamily: 'Work Sans, sans-serif',
                    mb: 4,
                }}
            >
                Skills
            </Typography>

            <Grid container spacing={isMobile ? 4 : 6} justifyContent="center">
                {/* Technical Skills */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant={isMobile ? 'h5' : 'h4'}
                        sx={{
                            mb: 3,
                            paddingRight: isDesktop ? 20 : 0,
                            color: '#547792',
                            fontWeight: 'bold',
                            fontFamily: 'Work Sans, sans-serif',
                        }}
                    >
                        Technical Skills
                    </Typography>
                    <List>
                        {['Python (Intermediate, Data Analysis)',
                        'HTML & CSS',
                        'React (Hooks, Routing)',
                        'Wireframing',
                        'Prototyping',].map((skill) => (
                            <ListItem key={skill} sx={{ py: 1 }}>
                                <ListItemText
                                    primary={`• ${skill}`}
                                    primaryTypographyProps={{
                                        sx: {
                                            fontSize: isMobile ? '1rem' : '1.2rem',
                                            fontFamily: 'Work Sans, sans-serif',
                                            color: 'black',
                                        },
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                {/* Non-Technical Skills */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant={isMobile ? 'h5' : 'h4'}
                        sx={{
                            mb: 3,
                            color: '#547792',
                            fontWeight: 'bold',
                            fontFamily: 'Work Sans, sans-serif',
                        }}
                    >
                        Non-Technical Skills
                    </Typography>
                    <List>
                        {['Decision Making','Leadership','Team Management'].map((skill) => (
                            <ListItem key={skill} sx={{ py: 1 }}>
                                <ListItemText
                                    primary={`• ${skill}`}
                                    primaryTypographyProps={{
                                        sx: {
                                            fontSize: isMobile ? '1rem' : '1.2rem',
                                            fontFamily: 'Work Sans, sans-serif',
                                            color: 'black',
                                        },
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>

            {/* Resume Button */}
            <Button
                variant="contained"
                color="error"
                sx={{
                    mt: 6,
                    fontFamily: 'Work Sans, sans-serif',
                    textTransform: 'none',
                    px: isMobile ? 3 : 5,
                    py: isMobile ? 1.2 : 1.8,
                    fontSize: isMobile ? '1rem' : '1.3rem',
                    fontWeight: 'bold',
                }}
                href="/images/Resume-Sridharan P (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Resume
            </Button>
        </Container>
    );
};


export default Skills;
