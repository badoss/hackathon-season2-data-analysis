import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";


// url to a valid topojson file
const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Mapgeo = () => {
    return (
        <ComposableMap projection="geoMercator">
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
                                hover: { fill: "#04D" },
                                pressed: { fill: "#02A" },
                            }}
                        />
                    ))
                }
            </Geographies>
            <Marker coordinates={[-74.006, 40.7128]}>
                {/* <circle r={8} fill="#F53" /> */}

                {/* <text textAnchor="middle" fill="#F53">
                    4
                </text> */}
            </Marker>
            <Marker coordinates={[-101, 53]} fill="#777">
                {/* <text textAnchor="middle" fill="#F53">
                    Canada 4 คน
                </text> */}
            </Marker>
        </ComposableMap>
    );
};

export default Mapgeo