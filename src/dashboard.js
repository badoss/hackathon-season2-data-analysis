import React from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, Typography } from "@mui/material";


import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



import Linechart from "./components/Linechart";
import Barchart from "./components/Barchart";
// import Piechart from "./components/Piechart";
import Piechartdept from "./components/Piechartdept";
import Piechartregion from "./components/Piechartregion";
import Piechartposition from "./components/Piechartposition";
import Table from "./components/Table";
import Table2 from "./components/Table2";
import Mapgeo from "./components/map";

export default function Dashboard() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ p: 1, flexGrow: 1, width: "100%", backgroundColor: "#E7C2C2" }}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="data analysis" value="1" />
                        <Tab label="data clencing" value="2" />
                        <Tab label="data original" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ p: 1, backgroundColor: "#E7C2C2" }}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid xs={12} md={6} >
                                <Card sx={{ height: 440 }}>
                                    <Typography>
                                        Relationship between age and gender
                                    </Typography>
                                    <Linechart />
                                </Card>
                            </Grid>
                            <Grid xs={12} md={6} >
                                <Card sx={{ height: 440 }}>
                                    <Typography>
                                        Relationship between position and gender
                                    </Typography>
                                    <Barchart />
                                </Card>
                            </Grid>
                            <Grid xs={12} md={4} >
                                <Card sx={{ height: 400 }}>
                                    <Typography>REGION</Typography>
                                    <Piechartregion />
                                </Card>
                            </Grid>
                            <Grid xs={12} md={4} >
                                <Card sx={{ height: 400 }}>
                                    <Typography>DEPARTMENT</Typography>
                                    <Piechartdept />
                                </Card>
                            </Grid>
                            <Grid xs={12} md={4} >
                                <Card sx={{ height: 400 }}>
                                    <Typography>POSITION</Typography>
                                    <Piechartposition />
                                </Card>
                            </Grid>
                            <Grid xs={12} md={12} >
                                <Card sx={{ height: 900, p: 2 }}>
                                    <Typography> number of people in each NATIONALITY </Typography>
                                    <Mapgeo />
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value="2" sx={{ p: 3, backgroundColor: "#F1E2E2", borderRadius: 4 }}>

                    <Box sx={{ p: 3, height: 900 }}>
                        <Table />
                    </Box>
                </TabPanel>
                <TabPanel value="3" sx={{ p: 3, backgroundColor: "#F1E2E2", borderRadius: 4 }}>

                    <Box sx={{ p: 3, height: 900 }}>
                        <Table2 />
                    </Box>
                </TabPanel>
            </TabContext>

        </Box>
    );
}