import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Logo from './Logo';

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'transparent',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'secondary.main'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Logo />
          <Typography variant="h5" sx={{ color: 'primary.main' }}>
            EVILS
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;