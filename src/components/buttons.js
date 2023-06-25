import React from 'react';
import { Button } from '@mui/material';
import {Link}  from 'react-router-dom';

function Buttons() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
  );
}

export default Buttons;
