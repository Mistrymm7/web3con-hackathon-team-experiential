// Map page / Map View

import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import dynamic from 'next/dynamic';

// tell next.js to render the map client-side
const Map = dynamic(() => import("./components/Map"), {
    loading: () => <LinearProgress />,
    ssr: false
});

// Map page
export default function MapView() {

    return (
        <Box sx={{ position: "relative", height: "100%", background: 'linear-gradient(201.99deg, #FFEDF8 8.02%, #D7E7FF 90.87%)' }}>
            <Map>

            </Map>
        </Box>
    );
}
