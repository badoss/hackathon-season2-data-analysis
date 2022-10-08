import React from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Card } from "@mui/material";


import Linechart from "./components/Linechart";
import Barchart from "./components/Barchart";
import Piechart from "./components/Piechart";


export default function Dashboard() {
    return (
      <Box sx={{ flexGrow: 1 , width: "90%"}}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} >
            <Card sx={{ height : 420 ,}}>
          
                <Linechart />

            </Card>
          </Grid>
          <Grid xs={12} md={6} >
            <Card sx={{ height : 420}}>
                <Barchart />
            </Card>
          </Grid>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>
                <Piechart />
            </Card>
          </Grid>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>card 4</Card>
          </Grid>
          <Grid xs={12} md={4} >
            <Card sx={{ height : 400}}>card 5</Card>
          </Grid>
          <Grid xs={12} md={12} >
            <Card sx={{ height : 400}}>card 6</Card>
          </Grid>
        </Grid>
      </Box>
    );
  }