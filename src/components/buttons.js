import React from 'react';
import { Button, IconButton } from '@mui/material';
import {Link}  from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';




function Buttons() {
  const [mode, setMode] = React.useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <IconButton sx={{ ml: 10, color: 'inherit', }} onClick={() => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }}>
        {darkTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        {darkTheme.palette.mode === 'dark' ? ' Toggle Light Mode' : 'Toggle Dark Mode'}
      </IconButton>
        <h1>Welcome to My Website!</h1>
        <p>Thank you for visiting. Enjoy your stay!</p>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Link to="/search">
          <Button variant="contained" size="large" color="primary">
          City weather Search
          </Button>
        </Link>
        <Link to="/weather">
          <Button variant="contained" size="large" color="secondary">
            Current Location Weather
          </Button>
        </Link>
      </div>
    </ThemeProvider>
  );
}

export default Buttons;
