import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  Container,
  Typography,
  Alert,
  Box,
  Paper,
  Chip,
} from '@mui/material';

const TicketDetailPage = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTicketDetails = async () => {
      const token = Cookies.get('token');
      try {
        const response = await fetch(`https://api.natemarcellus.com/tickets/${ticketId}`, {
          method: 'GET',
          headers: {
            'x-api-key': process.env.REACT_APP_API_KEY,
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.ticket) {
            setTicket(data.ticket);
          } else {
            setError('Ticket not found!');
          }
        } else {
          const errorData = await response.json();
          setError(`Failed to fetch ticket details: ${errorData.message}`);
        }
      } catch (err) {
        setError('An error occurred while fetching ticket details.');
      }
    };

    fetchTicketDetails();
  }, [ticketId]);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!ticket) {
    return <Typography>Loading...</Typography>;
  }

  const statusColor = {
    Open: 'success.main', 
    Closed: 'error.main', 
    Pending: 'warning.main',
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Ticket #{ticket.ticketNumber}
        </Typography>

        <Chip
          label={ticket.status}
          color={ticket.status === 'Open' ? 'success' : ticket.status === 'Closed' ? 'error' : 'warning'}
          sx={{ marginBottom: 2 }}
        />

        <Typography variant="h6" gutterBottom>
          Subject: {ticket.title}
        </Typography>
        
        <Typography variant="body1" gutterBottom>
          Description: {ticket.description}
        </Typography>
        
        <Typography variant="body2" gutterBottom>
          Created by: {ticket.username}
        </Typography>

        <Typography variant="body2" gutterBottom>
          Status: 
          <span style={{ color: ticket.status === 'Open' ? 'green' : ticket.status === 'Closed' ? 'red' : 'orange' }}>
            {` ${ticket.status}`}
          </span>
        </Typography>

        <Typography variant="body2" gutterBottom>
          Created on: {new Date(ticket.createdAt).toLocaleString()}
        </Typography>

        <Box mt={3}>
          <Typography variant="h6">Messages:</Typography>
          {ticket.messages.length > 0 ? (
            ticket.messages.map((msg) => (
              <Box key={msg.messageId} sx={{ border: '1px solid #ccc', borderRadius: 1, padding: 2, marginBottom: 2 }}>
                <Typography variant="subtitle2">{msg.username}:</Typography>
                <Typography variant="body2">{msg.messageContent}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {new Date(msg.sentAt).toLocaleString()}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography>No messages yet.</Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default TicketDetailPage;
