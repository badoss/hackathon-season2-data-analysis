import React from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Card } from "@mui/material";


import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



import Linechart from "./components/Linechart";
import Barchart from "./components/Barchart";
import Piechart from "./components/Piechart";
import Table from "./components/Table";

export default function Dashboard() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ p: 1, flexGrow: 1, width: "100%" , backgroundColor : "#FFFF"}}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="data analysis" value="1" />
                        <Tab label="data table" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{  backgroundColor : "#FFFF"}}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid xs={12} md={6} >
                                <Card sx={{ height: 420, }}>

                                    <Linechart />

                                </Card>
                            </Grid>
                            <Grid xs={12} md={6} >
                                <Card sx={{ height: 420 }}>
                                    <Barchart />
                                </Card>
                            </Grid>
                            <Grid xs={12} md={4} >
                                <Card sx={{ height: 400 }}>
                                    <Piechart />
                                </Card>
                            </Grid>
                            <Grid xs={12} md={4} >
                                <Card sx={{ height: 400 }}>card 4</Card>
                            </Grid>
                            <Grid xs={12} md={4} >
                                <Card sx={{ height: 400 }}>card 5</Card>
                            </Grid>
                            <Grid xs={12} md={12} >
                                <Card sx={{ height: 400 }}>card 6</Card>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value="2"  sx={{  backgroundColor : "#FFFF"}}>
                    <Box sx={{ height : "600"}}>
                        <Table />
                    </Box>
                </TabPanel>
            </TabContext>

        </Box>
    );
}