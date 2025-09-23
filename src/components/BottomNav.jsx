import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaidIcon from '@mui/icons-material/Paid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const pathToValue = {
  '/': 0,
  '/projects': 1,
  '/analytics': 2,
  '/finance': 3,
  '/support': 4,
};

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(pathToValue[location.pathname] ?? 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/projects');
        break;
      case 2:
        navigate('/analytics');
        break;
      case 3:
        navigate('/finance');
        break;
      case 4:
        navigate('/support');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{ bgcolor: 'background.paper' }}
      >
        <BottomNavigationAction label="Главная" icon={<DashboardIcon />} />
        <BottomNavigationAction label="Проекты" icon={<AccountTreeIcon />} />
        <BottomNavigationAction label="Аналитика" icon={<BarChartIcon />} />
        <BottomNavigationAction label="Финансы" icon={<PaidIcon />} />
        <BottomNavigationAction label="Поддержка" icon={<SupportAgentIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNav;