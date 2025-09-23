// src/App.jsx

import React, { useCallback } from 'react'; // <--- ИЗМЕНЕНИЕ: Импортировали useCallback
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Analytics from './pages/Analytics';
import Finance from './pages/Finance';
import Support from './pages/Support';

const particlesOptions = {
  background: { color: { value: '#0d0d0d' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: '#b30000' },
    links: { color: '#660000', distance: 150, enable: true, opacity: 0.5, width: 1 },
    collisions: { enable: true },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 80 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};


function App() {
  const location = useLocation();

  // ИЗМЕНЕНИЕ: Обернули функцию в useCallback. Это исправляет ошибку.
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} style={{ position: 'fixed', zIndex: -1 }} />

      <Header />

      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3, mb: '56px' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </AnimatePresence>
      </Box>

      <BottomNav />
    </Box>
  );
}

export default App;