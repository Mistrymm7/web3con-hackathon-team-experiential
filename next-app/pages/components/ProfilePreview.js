import { Typography, Button, Card, CardActions, CardContent, IconButton, Avatar } from "@mui/material";
import ChatOutlined from "@mui/icons-material/ChatOutlined"
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import placeholder from "../static/default-placeholder.png";




// pass onClick function from parent to control the function of the message button
function ProfilePreview({ walletAddress, username, image, onClick }) {

    return (
        <Box sx={{ display: 'flex', maxWidth: '400px' }}>
            <Box sx={{ margin: 1, display: "flex", alignItems: "center" }}>
                <Avatar src={!image ? placeholder : image} sx={{ width: '100%', height: '100%' }} />
                {/* {<Image src={!image ? placeholder : image} height="100" width="100" />} */}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography>
                        {username}
                    </Typography>
                    <Typography>
                        {walletAddress ? walletAddress.slice(0, 7) + "..." : "0x123abc..."}
                    </Typography>
                </CardContent>
            </Box>

            <CardActions>
                <IconButton size="medium" onClick={onClick}>
                    <ChatOutlined fontSize="medium" color="primary" />
                </IconButton>
            </CardActions>

        </Box>
    );

}

export default ProfilePreview;