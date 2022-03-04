// Map page / Map View

import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ProfilePreview from './components/ProfilePreview';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import dynamic from 'next/dynamic';
import { useControl } from 'react-map-gl';
import MyMap from './components/Map';

const Map = dynamic(() => import("./components/Map"), {
    loading: () => <LinearProgress />,
    ssr: false
});

export default function MapView() {

    // useEffect(() => {
    //     // const fetchLocations = async () => {
    //     //     await fetch(url).then((response) =>
    //     //         response.text()).then((res) => JSON.parse(res))
    //     //         .then((json) => {
    //     //             setLocations(json.features);
    //     //         }).catch((err) => console.log({ err }));
    //     // };
    //     // fetchLocations();
    // }, []);

    return (
        <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
            <Map>

            </Map>
        </Box>
    );
}
 //            <ProfilePreview sx={{ position: "absolute", zIndex: 1 }} />


/* map.current.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
); */
