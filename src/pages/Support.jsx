import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

function Support() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
        Поддержка
      </Typography>
      <Paper sx={{ p: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom>Связаться с менеджером</Typography>
        <Typography color="text.secondary" mb={2}>
          Опишите ваш вопрос, и мы свяжемся с вами в ближайшее время.
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Ваше сообщение"
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" sx={{ mt: 2 }}>Отправить</Button>
      </Paper>
    </Box>
  );
}

export default Support;