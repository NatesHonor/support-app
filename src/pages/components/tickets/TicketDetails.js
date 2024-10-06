import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  Container,
  Typography,
  Alert,
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

  return (
    <Container component="main" maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Ticket #{ticket.ticketNumber} {}
      </Typography>
      <Typography variant="h6">Subject: {ticket.title}</Typography>
      <Typography variant="body1">Description: {ticket.description}</Typography>
      <Typography variant="body2">Status: {ticket.status}</Typography>
      <Typography variant="body2">Created on: {new Date(ticket.createdAt).toLocaleString()}</Typography> {}
    </Container>
  );
};

export default TicketDetailPage;
