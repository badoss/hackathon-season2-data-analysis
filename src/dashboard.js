import React from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Card } from "@mui/material";


export default function Dashboard() {
    return (
      <Box sx={{ flexGrow: 1 , width: "90%"}}>
        <Grid container spacing={2}>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>card 1</Card>
          </Grid>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>card 2</Card>
          </Grid>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>card 3</Card>
          </Grid>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>card 4</Card>
          </Grid>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>card 5</Card>
          </Grid>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>card 6</Card>
          </Grid>
          <Grid xs={12} md={12} >
            <Card sx={{ height : 400}}>card 6</Card>
          </Grid>
          
        </Grid>
      </Box>
    );
  }