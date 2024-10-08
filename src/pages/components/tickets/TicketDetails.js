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
  TextField,
  Button,
} from '@mui/material';

const TicketDetailPage = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [userRole, setUserRole] = useState('');

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
            fetchUserRole(token);
          } else {
            setError('Ticket not found!');
          }
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch ticket details:', errorData);
          setError(`Failed to fetch ticket details: ${errorData.message}`);
          setTimeout(() => {
            window.location.href = 'https://support.natemarcellus.com';
          }, 10000);
        }
      } catch (err) {
        console.error('Error during ticket details fetch:', err);
        setError('An error occurred while fetching ticket details.');
      }
    };

    const fetchUserRole = async (token) => {
      try {
        const response = await fetch('https://api.natemarcellus.com/user/role', {
          method: 'GET',
          headers: {
            'x-api-key': process.env.REACT_APP_API_KEY,
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserRole(data.role);
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch user role:', errorData);
          setError(`Failed to fetch user role: ${errorData.message}`);
        }
      } catch (err) {
        console.error('Error during user role fetch:', err);
        setError('An error occurred while fetching user role.');
      }
    };

    fetchTicketDetails();
  }, [ticketId]);

  const handleSendMessage = async () => {
    if (!message) {
      setError('Message cannot be empty.');
      return;
    }

    const token = Cookies.get('token');
    try {
      const response = await fetch(`https://api.natemarcellus.com/tickets/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_API_KEY,
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          ticketID: ticketId,
          messageContent: message,
          role: userRole,
        }),
      });  
      if (response.ok) {
        const data = await response.json();  
        setSuccess('Message sent successfully!');
        setMessage('');
        setTicket((prevTicket) => ({
          ...prevTicket,
          messages: [
            ...prevTicket.messages,
            {
              ...data.ticket.messages[data.ticket.messages.length - 1],
              role: userRole
            }
          ],
        }));
      } else {
        const errorData = await response.json();
        console.error('Failed to send message:', errorData);
        setError(`Failed to send message: ${errorData.message}`);
      }
    } catch (err) {
      console.error('Error during message send:', err);
      setError('An error occurred while sending the message.');
    }
  };
  
  const handleCloseTicket = async () => {
    const token = Cookies.get('token');
    console.log(`Closing ticket with ID: ${ticketId}`);

    try {
      const response = await fetch(`https://api.natemarcellus.com/tickets/${ticketId}/close`, {
        method: 'POST',
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY,
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setSuccess('Ticket closed successfully! You will be redirected shortly.');
        setTicket((prevTicket) => ({ ...prevTicket, status: 'Closed' }));
        setTimeout(() => {
          window.location.href = 'https://support.natemarcellus.com/tickets';
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Failed to close ticket:', errorData);
        setError(`Failed to close ticket: ${errorData.message}`);
      }
    } catch (err) {
      console.error('Error during ticket close:', err);
      setError('An error occurred while closing the ticket.');
    }
  };

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!ticket) {
    return <Typography>Loading...</Typography>;
  }

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
          Created on: {new Date(ticket.createdAt).toLocaleString()}
        </Typography>

        {userRole === 'administrator' && ticket.status === 'Open' && (
          <Box mt={2}>
            <Button variant="contained" color="secondary" onClick={handleCloseTicket}>
              Close Ticket
            </Button>
          </Box>
        )}

        <Box mt={3}>
          <Typography variant="h6">Messages:</Typography>
          {ticket.messages && ticket.messages.length > 0 ? (
            ticket.messages.map((msg) => (
              <Box key={msg.messageId} sx={{ border: '1px solid #ccc', borderRadius: 1, padding: 2, marginBottom: 2 }}>
                <Box display="flex" alignItems="center">
                  <Typography variant="subtitle2" component="span" fontWeight="bold">
                    {msg.username}
                  </Typography>
                  <Chip
                    label={msg.role === 'administrator' ? 'Admin' : 'Member'}
                    color={msg.role === 'administrator' ? 'error' : 'success'}
                    sx={{ marginLeft: 1 }}
                  />
                </Box>
                <Typography variant="body2" component="span" sx={{ marginLeft: 1 }}>
                  {msg.messageContent}
                </Typography>
                <Typography variant="caption" color="textSecondary" display="block">
                  {new Date(msg.sentAt).toLocaleString()}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography>No messages yet.</Typography>
          )}
        </Box>

        <Box mt={3}>
          {ticket.status === 'Closed' ? (
            <Alert severity="info">This ticket is closed. You cannot add new messages.</Alert>
          ) : (
            <>
              <TextField
                label="Type your message here..."
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                  Send Message
                </Button>
              </Box>
            </>
          )}
          {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
        </Box>
      </Paper>
    </Container>
  );
};

export default TicketDetailPage;
