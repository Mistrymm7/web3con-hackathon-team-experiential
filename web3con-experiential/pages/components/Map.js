
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { Box } from '@mui/material';
import Map from "react-map-gl";
import {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';

// .env file with mapbox API key not in use right now
mapboxgl.accessToken = 'pk.eyJ1IjoibW1pc3RyeTIiLCJhIjoiY2trZnJzMjZhMDZncDJ3cGR3M3p0bXc1aSJ9.CdLRZiNADT91-W-HAhC5QQ';


export default function MyMap({ locations }) {
    //const [pageIsMounted, setPageIsMounted] = useState(false)

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // // The latitude and longitude of the center of London
        // latitude: 51.5074,
        // longitude: -0.1278,
        // zoom: 10
    });

    // useEffect(() => {
    //     
    // }, [])

    return (
        <>
            <Map
                initialViewState={{
                    latitude: 40,
                    longitude: -100,
                    zoom: 3.5,
                    bearing: 0,
                    pitch: 0
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={process.env.MAPBOX_KEY}
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />
            </Map>

        </>
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
