import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const TicketsPage = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = Cookies.get('username');
    if (!user) {
      window.location.href = 'https://www.natemarcellus.com/login'; // Redirect to login page
    } else {
      setUsername(user);
    }
  }, []);

  if (!username) {
    return null;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="lg" sx={{ marginTop: 8 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Tickets
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Welcome, {username}! Here you can manage your tickets.
        </Typography>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button variant="contained" color="primary" onClick={() => alert('Create New Ticket Logic Here!')}>
            Create New Ticket
          </Button>
        </Box>
        <Grid container spacing={4}>
          {[1, 2, 3].map((ticket) => (
            <Grid item xs={12} sm={6} md={4} key={ticket}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Ticket #{ticket}</Typography>
                  <Typography variant="body2">Status: Open</Typography>
                  <Typography variant="body2">Created on: MM/DD/YYYY</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default TicketsPage;
