import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Янв', ctr: 2.5, cr: 3 },
  { name: 'Фев', ctr: 3.8, cr: 4.1 },
  { name: 'Мар', ctr: 4.2, cr: 5.5 },
  { name: 'Апр', ctr: 5.5, cr: 6.2 },
  { name: 'Май', ctr: 6.6, cr: 7.1 },
];

function Analytics() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
        Аналитика
      </Typography>
      <Paper sx={{ p: 2, bgcolor: 'background.paper', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: '#222', border: '1px solid #555' }} />
            <Legend />
            <Line type="monotone" dataKey="ctr" stroke="#ff1a1a" strokeWidth={2} name="CTR %" />
            <Line type="monotone" dataKey="cr" stroke="#8884d8" strokeWidth={2} name="CR %" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}

export default Analytics;