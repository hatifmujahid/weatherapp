import './App.css';
import React from 'react';
import {Stack} from '@mui/material';


function App() {
  return (
    <div className="App">
      <Stack spacing={2} flexDirection={'row'}>
        <TextField 
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined" 
          startAdornment={<InputAdornment position="start">Enter Location</InputAdornment>}
        />
        
      </Stack>
    </div>
  );
}

export default App;
