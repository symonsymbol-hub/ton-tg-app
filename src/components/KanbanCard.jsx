import React from 'react';
import { Paper, Typography } from '@mui/material';

// Добавляем пропс onClick
function KanbanCard({ content, onClick, ...props }) {
  return (
    <Paper
      {...props}
      onClick={onClick} // Применяем обработчик
      elevation={0}
      sx={{
        p: 2,
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        cursor: 'pointer', // Меняем курсор на pointer
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 0 10px rgba(244, 10, 10, 0.3)',
          transform: 'translateY(-2px)'
        }
      }}
    >
      <Typography>{content}</Typography>
    </Paper>
  );
}

export default KanbanCard;