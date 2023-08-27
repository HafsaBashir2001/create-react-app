import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Typography, Box } from '@mui/material';

import giff from './moving.gif'

function FeedbackAnalytics() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const fetchFeedbackData = async () => {
    try {
      const response = await fetch('/api/feedback');
      if (response.ok) {
        const data = await response.json();
        setFeedbackData(data.feedback);
      } else {
        console.error('Error fetching feedback data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${giff})`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Set the minimum height to cover the entire viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
          Feedback Analytics
        </Typography>
        <TableContainer component={Paper} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Review</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbackData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{item.review}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
}

export default FeedbackAnalytics; 