
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ProfilePreview from './components/ProfilePreview';
import { Container } from '@mui/material';

mapboxgl.accessToken = 'pk.eyJ1IjoibW1pc3RyeTIiLCJhIjoiY2trZnJzMjZhMDZncDJ3cGR3M3p0bXc1aSJ9.CdLRZiNADT91-W-HAhC5QQ';

export default function MapView() {
    const [pageIsMounted, setPageIsMounted] = useState(false)

    useEffect(() => {
        setPageIsMounted(true)
        const map = new mapboxgl.Map({
            container: "my-map",
            style: "mapbox://styles/mapbox/streets-v11",
        });

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
                showUserHeading: true
            })
        );

    }, [])

    return (
        <div>
            <ProfilePreview style={{ position: "absolute", zIndex: 1, top: "0", bottom: "0", left: "0", right: "0" }} />
            <div id="my-map" style={{ position: "absolute", zIndex: 0, top: "0", bottom: "0", left: "0", right: "0" }} />

        </div>
    );
}



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
