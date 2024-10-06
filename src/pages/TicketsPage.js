import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { 
  Container, Typography, Button, Box, Grid, Card, CardContent, AppBar, 
  Toolbar, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Alert, Tabs, Tab
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const TicketsPage = () => {
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [tickets, setTickets] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  const fetchTickets = async (token) => {
    try {
      const response = await fetch('https://api.natemarcellus.com/tickets/list', {
        method: 'GET',
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY,
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Fetched tickets:', data.tickets);
        setTickets(data.tickets);
      } else {
        const errorData = await response.json();
        setError(`Failed to fetch tickets: ${errorData.message}`);
      }
    } catch (err) {
      setError('An error occurred while fetching tickets.');
      console.error('Error fetching tickets:', err);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    const user = Cookies.get('username');

    if (token && user) {
      setUsername(user);
      setIsLoggedIn(true);
      fetchTickets(token);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSubject('');
    setMessage('');
    setError('');
    setSuccess('');
  };

  const handleCreateTicket = async () => {
    if (!subject || !message) {
      setError('Both title and description are required.');
      return;
    }

    try {
      const token = Cookies.get('token');

      const response = await fetch('https://api.natemarcellus.com/tickets/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_API_KEY,
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title: subject, description: message }),
      });

      if (response.ok) {
        setSuccess('Ticket created successfully!');
        fetchTickets(token); 
        handleClose();
      } else {
        const errorData = await response.json();
        setError(`Failed to create ticket: ${errorData.error || errorData.message}`);
      }
    } catch (err) {
      setError('An error occurred while creating the ticket.');
    }
  };

  const handleTicketClick = (ticketId) => {
    navigate(`/ticket/${ticketId}`);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!isLoggedIn) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>
          <Typography variant="h5" align="center" gutterBottom>
            You are not logged in. Please log in to access your tickets.
          </Typography>
          <Box display="flex" justifyContent="center" mb={2}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => window.location.href = 'https://www.natemarcellus.com/login'}
            >
              Log In
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

  const filteredTickets = tickets.filter((ticket) =>
    tabValue === 0 ? ticket.status === 'Open' : ticket.status === 'Closed'
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Ticket Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ marginTop: 8 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Tickets
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Welcome, {username}! Here you can manage your tickets.
        </Typography>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddCircleOutlineIcon />} 
            onClick={handleOpen}
          >
            Create New Ticket
          </Button>
        </Box>

        <Tabs value={tabValue} onChange={handleTabChange} aria-label="Ticket Status Tabs">
          <Tab label="Open Tickets" />
          <Tab label="Closed Tickets" />
        </Tabs>

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <Grid container spacing={4} mt={2}>
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <Grid item xs={12} sm={6} md={4} key={ticket._id}> {/* Changed ticket.id to ticket._id */}
                <Card onClick={() => handleTicketClick(ticket._id)} style={{ cursor: 'pointer' }}> {/* Changed ticket.id to ticket._id */}
                  <CardContent>
                    <Typography variant="h5">Ticket #{ticket.ticketNumber}</Typography>
                    <Typography variant="body2">Status: {ticket.status}</Typography>
                    <Typography variant="body2">Created on: {ticket.createdAt} EST</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ width: '100%' }}>
              {tabValue === 0 ? 'No open tickets available.' : 'No closed tickets available.'}
            </Typography>
          )}
        </Grid>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Create New Ticket</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="subject"
              label="Subject"
              type="text"
              fullWidth
              variant="outlined"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              helperText="Display the reason for your ticket"
            />
            <TextField
              margin="dense"
              id="message"
              label="Message"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              helperText="Explain the reason for your ticket and how to reproduce it"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleCreateTicket} color="primary">
              Create Ticket
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Box mt={5} py={3} textAlign="center" bgcolor="background.paper">
        <Typography variant="body2" color="textSecondary">
          © 2024 Nates Services. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default TicketsPage;
