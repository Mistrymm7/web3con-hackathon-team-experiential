import { Typography, Button, Card, CardMedia, CardContent, CardActionArea, CardActions, IconButton, Icon } from "@mui/material";
import ChatOutlined from "@mui/icons-material/ChatOutlined"
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import placeholder from "../static/default-placeholder.png";





function ProfilePreview({ walletAddress, username, image, onClickMessage }) {

    return (
        <Box sx={{ display: 'flex', maxWidth: '400px' }}>
            <Box sx={{ margin: 1, display: "flex", alignItems: "center" }}>
                <Image src={placeholder} height="100" width="100" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography>
                        {username ? username.slice(0, 7) + "..." : "Username"}
                    </Typography>
                    <Typography>
                        {walletAddress ? walletAddress.slice(0, 7) + "..." : "0x123abc..."}
                    </Typography>
                </CardContent>
            </Box>

            <CardActions>
                <IconButton size="medium" onClick={onClickMessage}>
                    <ChatOutlined fontSize="medium" color="primary" />
                </IconButton>
            </CardActions>

        </Box>
    );

}

export default ProfilePreview;