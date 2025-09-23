import { createTheme } from "@mui/material/styles";

// Меняем const theme на export const theme и убираем export default внизу
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f40a0a',
    },
    secondary: {
      main: '#410404',
    },
    background: {
      default: '#0a0a0a',
      paper: 'rgba(20, 20, 20, 0.7)',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#8e8e8e',
    },
    success: {
      main: '#00ff6a',
    },
    error: {
      main: '#ff4d4d',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontFamily: '"Orbitron", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Orbitron", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Orbitron", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Orbitron", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Orbitron", sans-serif', fontWeight: 700 },
    h6: { fontFamily: '"Orbitron", sans-serif', fontWeight: 700 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(244, 10, 10, 0.2)',
          backdropFilter: 'blur(12px)',
          borderRadius: '12px',
          backgroundImage: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px rgba(244, 10, 10, 0.05)',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          backgroundColor: '#f40a0a',
          color: '#fff',
          boxShadow: '0 0 20px rgba(244, 10, 10, 0.5)',
          '&:hover': {
            backgroundColor: '#ff4d4d',
            boxShadow: '0 0 30px rgba(255, 77, 77, 0.7)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: 'rgba(244, 10, 10, 0.5)',
          color: '#f40a0a',
          '&:hover': {
            borderColor: '#f40a0a',
            backgroundColor: 'rgba(244, 10, 10, 0.1)',
            boxShadow: '0 0 15px rgba(244, 10, 10, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 10, 0.5)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(244, 10, 10, 0.3)',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          borderTop: '1px solid rgba(244, 10, 10, 0.3)',
          background: 'rgba(10, 10, 10, 0.5)',
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: '#8e8e8e',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            color: '#e0e0e0',
          },
          '&.Mui-selected': {
            color: '#f40a0a',
            textShadow: '0 0 10px rgba(244, 10, 10, 0.7)',
          },
        },
      },
    },
  },
});