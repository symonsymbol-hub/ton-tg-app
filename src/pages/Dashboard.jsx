import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BarChartIcon from '@mui/icons-material/BarChart';

const kpiData = [
  { title: "Общий CTR", value: "4.2%", change: "+0.5%", status: "success", icon: <ShowChartIcon sx={{ color: '#f40a0a' }} /> },
  { title: "Общий ROI", value: "+72%", change: "+5%", status: "success", icon: <BarChartIcon sx={{ color: '#f40a0a' }} /> },
  { title: "Бюджет", value: "1500$", change: "-150$", status: "error", icon: <AccountBalanceWalletIcon sx={{ color: '#f40a0a' }} /> },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1, scale: 1,
    transition: { staggerChildren: 0.15, duration: 0.4 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function Dashboard() {
  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={containerVariants}>
      <motion.div variants={itemVariants}>
        <Typography variant="h4" gutterBottom>Сводка</Typography>
      </motion.div>
      
      <Grid container spacing={3} mb={4}>
        {kpiData.map((item) => (
          // Убираем пропс "item" и передаем xs/md напрямую
          <Grid xs={12} md={4} key={item.title}>
            <motion.div variants={itemVariants}>
              <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body1" color="text.secondary">{item.title}</Typography>
                  {item.icon}
                </Box>
                <Typography variant="h4" fontWeight="bold">{item.value}</Typography>
                <Typography variant="body2" color={item.status === 'success' ? 'success.main' : 'error.main'} sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowUpwardIcon fontSize="small" sx={{ mr: 0.5, transform: item.status === 'success' ? 'none' : 'rotate(180deg)' }}/>
                  {item.change} за месяц
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div variants={itemVariants}>
        <Typography variant="h5" gutterBottom>Лента обновлений</Typography>
        <Paper sx={{ p: 3 }}>
          <Typography sx={{ borderLeft: '2px solid', borderColor: 'primary.main', pl: 2, mb: 2 }}>
            Запущена РК "Новый продукт" (2 часа назад)
          </Typography>
          <Typography sx={{ borderLeft: '2px solid', borderColor: 'primary.main', pl: 2 }}>
            Отчет за неделю добавлен в проект "Альфа" (Вчера)
          </Typography>
        </Paper>
      </motion.div>

       <motion.div variants={itemVariants} style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
         <Button variant="contained">Создать бриф</Button>
         <Button variant="outlined">Связаться с менеджером</Button>
       </motion.div>
    </motion.div>
  );
}

export default Dashboard;