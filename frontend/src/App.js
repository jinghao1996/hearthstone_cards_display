import React, {useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CardDisplay from "./CardDisplay";
import CardPage from "./CardPage";
import background from "./background.jpg"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';



export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundrepeat:"repeat-y",
    backgroundSize: 'cover' }}>
      <h1>Hearthstone Card </h1>
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }} >
          <Router>
            <Routes>
              <Route exact path="/" element={<CardDisplay/>} />
              <Route exact path="/card/:id" element={<CardPage/>} />
            </Routes>
          </Router>

        </Box>
      </Container>
      
    </div>
  );
}
