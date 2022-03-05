
import React, { useRef, useEffect, useState, useMemo } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { Box, Chip } from '@mui/material';
import Map from "react-map-gl";
import PersonMarker from "./PersonMarker";

import ProfilePreview from './ProfilePreview';


import {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';

// test location data
import * as testData from '../static/test-userdata.json';

/* Test Data JSON formating
{
        "username": "NewYork123",
        "walletAddress": "0x5cfe5352F9dB1F06b5E9A6796654A992D2d8b0e8",
        "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
        "latitude": 40.6643,
        "longitude": -73.9385
    }
*/




// .env file with mapbox API key not in use right now
mapboxgl.accessToken = 'pk.eyJ1IjoibW1pc3RyeTIiLCJhIjoiY2trZnJzMjZhMDZncDJ3cGR3M3p0bXc1aSJ9.CdLRZiNADT91-W-HAhC5QQ';


export default function MyMap({ locations }) {
    //const [pageIsMounted, setPageIsMounted] = useState(false)

    // controling what data is showing in the popup when you click a marker
    const [popupInfo, setPopupInfo] = useState(null);


    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // // The latitude and longitude of the center of London
        // latitude: 51.5074,
        // longitude: -0.1278,
        // zoom: 10
    });

    // creating our pin components to be populated on the map
    const pins = useMemo(
        () =>
            testData.map((user, index) => (
                <Marker
                    style={{ width: "15px" }}
                    key={`marker-${index}`}
                    longitude={user.longitude}
                    latitude={user.latitude}
                    anchor="bottom"
                >
                    <PersonMarker onClick={() => setPopupInfo(user)} />
                </Marker>
            )),
        []
    );

    // useEffect(() => {

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

                {pins}

                {popupInfo && (
                    <Popup
                        style={{ minWidth: "300px" }}
                        anchor="top"
                        longitude={Number(popupInfo.longitude)}
                        latitude={Number(popupInfo.latitude)}
                        closeOnClick={false}
                        onClose={() => setPopupInfo(null)}
                    >
                        <ProfilePreview image={popupInfo.image} username={popupInfo.username} walletAddress={popupInfo.walletAddress} />

                    </Popup>
                )}

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
