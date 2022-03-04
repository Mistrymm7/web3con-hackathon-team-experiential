import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useEffect, useState } from "react";
import { Router, useRouter } from 'next/router';

// String currentPage 
export default function MobileNav({ currentPage }) {

    const router = useRouter();
    const [value, setValue] = useState();

    useEffect((currentPage) => {

        // check which page is active so that it's highlighted on the nav
        if (currentPage === "/ARview") {
            setValue(0)
        } else if (currentPage === "/MapView") {
            setValue(1)
        }
    }, []);


    return (
        <BottomNavigation sx={{ bottom: 0, position: "fixed", width: "100%" }}
            showLabels
            value={value}
        >
            <BottomNavigationAction label="AR View" icon={<ViewInArIcon />} onClick={() => { router.push('/ar') }} />
            <BottomNavigationAction label="Map View" icon={<LocationOnIcon />} onClick={() => { router.push('/map') }} />
        </BottomNavigation >
    );
}