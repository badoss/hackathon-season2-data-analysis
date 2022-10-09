import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";
import Tooltip from '@mui/material/Tooltip';


// url to a valid topojson file
const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";



const markers = [
    { markerOffset: 15, name: "Mexico", coordinates: [-102.677478, 23.563239], count: 1 },
    { markerOffset: 15, name: "Philippines", coordinates: [122.886113, 12.450866], count: 1 },
    { markerOffset: 15, name: "Italy", coordinates: [12.332832, 42.884185], count: 2 },
    { markerOffset: 15, name: "France", coordinates: [2.201369, 46.374526], count: 1 },
    { markerOffset: 15, name: "Singapore", coordinates: [103.863811, 1.360531], count: 1 },
    { markerOffset: -30, name: "Peru", coordinates: [-74.724731, -10.643328], count: 1 },
    { markerOffset: -30, name: "Indonesia", coordinates: [122.346082, -4.4313], count: 1 },
    { markerOffset: 10, name: "Germany", coordinates: [10.352806, 50.85475], count: 1 },
    { markerOffset: -30, name: "Netherlands", coordinates: [5.295533, 52.01124], count: 1 },
    { markerOffset: -30, name: "Ukraine", coordinates: [31.483022, 48.7146], count: 1 },
    { markerOffset: -30, name: "Pakistan", coordinates: [69.207106, 29.69255], count: 1 },
];

const Mapgeo = () => {
    return (
        <ComposableMap
            width={600} height={250}
            projection="geoEqualEarth"
            projectionConfig={{
                scale: 90,
            }}>
            {/* <Graticule stroke="#999" /> */}
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#DDD"
                            stroke="#FFF"
                            style={{
                                default: { fill: "#DDD" },
                                hover: { fill: "#F1E2E2" },
                                pressed: { fill: "#DDD" },
                            }}
                        />
                    ))
                }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset, count }) => {
                const longText = name + ` ` +count + ` คน`
                return (
                    <Marker key={name} coordinates={coordinates}>
                        <Tooltip title={longText}>
                            <circle fill="#F53" stroke="#FFF" r={count * 2} />
                        </Tooltip>

                        {/* <text>
                        {name}
                    </text> */}
                    </Marker>
                )
            })}


        </ComposableMap>
    );
};

export default Mapgeo