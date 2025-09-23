import React from 'react';
import { Box, Typography, Paper, Button, List, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const transactions = [
  { id: 1, type: 'Пополнение', amount: '+2000$', date: '20.09.2025' },
  { id: 2, type: 'Оплата рекламы VK', amount: '-500$', date: '21.09.2025' },
  { id: 3, type: 'Оплата рекламы TG', amount: '-750$', date: '22.09.2025' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function Finance() {
  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={containerVariants}>
      <motion.div variants={itemVariants}>
        <Typography variant="h4" gutterBottom>Финансы</Typography>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Paper sx={{ p: 3, mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="subtitle1" color="text.secondary">Текущий баланс</Typography>
            <Typography variant="h4" fontWeight="bold">750 $</Typography>
          </Box>
          <Button variant="contained">Пополнить</Button>
        </Paper>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Typography variant="h5" gutterBottom>История транзакций</Typography>
        <Paper>
          <List>
            {transactions.map((t, index) => (
              <motion.div variants={itemVariants} key={t.id}>
                <ListItem>
                  <ListItemIcon>
                    {t.amount.startsWith('+') 
                      ? <ArrowUpwardIcon sx={{ color: 'success.main' }}/> 
                      : <ArrowDownwardIcon sx={{ color: 'error.main' }}/>}
                  </ListItemIcon>
                  <ListItemText primary={t.type} secondary={t.date} />
                  <Typography color={t.amount.startsWith('+') ? 'success.main' : 'error.main'} fontWeight="bold">
                    {t.amount}
                  </Typography>
                </ListItem>
                {index < transactions.length - 1 && <Divider component="li" sx={{ borderColor: 'rgba(244, 10, 10, 0.2)' }} />}
              </motion.div>
            ))}
          </List>
        </Paper>
      </motion.div>
    </motion.div>
  );
}

export default Finance;