import { Container, Typography, Button, Grid, List, ListItem, ListItemText } from '@mui/material';

const Skills = () => (
    <Container
        maxWidth="lg"
        sx={{
            textAlign: 'center',
            py: { xs: 5, sm: 6 },
            backgroundColor: '#DDDDDD',
            borderRadius: 3,
            mt: '60px',
            boxShadow: 2
        }}
    >
        {/* Section Title */}
        <Typography
            variant="h3"
            sx={{
                color: '#547792',
                fontWeight: 'bold',
                fontFamily: 'Work Sans, sans-serif',
                mb: 4
            }}
        >
            Skills
        </Typography>

        {/* Skills Grid */}
        <Grid container spacing={6} justifyContent="center">
            {/* Technical Skills */}
            <Grid item xs={12} md={6}>
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        paddingRight: 20,
                        color: '#547792',
                        fontWeight: 'bold',
                        fontFamily: 'Work Sans, sans-serif',
                    }}
                >
                    Technical Skills
                </Typography>
                <List>
                    {[
                        'Python (Basics, Data Analysis)',
                        'HTML & CSS',
                        'React (Hooks, Routing)',
                        'Wireframing',
                        'Prototyping',
                    ].map((skill) => (
                        <ListItem key={skill} sx={{ py: 1 }}>
                            <ListItemText
                                primary={`• ${skill}`}
                                primaryTypographyProps={{
                                    sx: {
                                        fontSize: '120%',
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
                    variant="h4"
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
                                        fontSize: '120%',
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

        {/* View Resume Button */}
        <Button
            variant="contained"
            color="error"
            sx={{
                mt: 6,
                fontFamily: 'Work Sans, sans-serif',
                textTransform: 'none',
                px: { xs: 3, sm: 5 },
                py: { xs: 1.2, sm: 1.8 },
                fontSize: { xs: '1.1rem', sm: '1.4rem' },
                fontWeight: 'bold',
            }}
            href="/images/Resume-Sridharan.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            View Resume
        </Button>
    </Container>
);

export default Skills;
