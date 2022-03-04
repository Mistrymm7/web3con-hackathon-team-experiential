import { Typography, Button, Card, CardMedia, CardContent, CardActionArea, CardActions, IconButton, Icon } from "@mui/material";
import ChatOutlined from "@mui/icons-material/ChatOutlined"
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import placeholder from "../static/default-placeholder.png";
function ProfilePreview(props) {

    function messageButtonHandler() {

    }

    function closeButtonHandler() {

    }

    return (
        <Card sx={{ display: 'flex', maxWidth: '400px' }}>
            <Box sx={{ margin: 1, display: "flex", alignItems: "center" }}>
                <Image src={placeholder} height="100" width="100" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography>
                        Username Placeholder
                    </Typography>
                    <Typography>
                        0x123as...
                    </Typography>
                </CardContent>
            </Box>

            <CardActions>
                <IconButton size="medium" onClick={messageButtonHandler}>
                    <ChatOutlined fontSize="medium" color="primary" />
                </IconButton>
                <IconButton size="medium" onClick={closeButtonHandler}>
                    <CloseIcon fontSize="medium" />
                </IconButton>
            </CardActions>

        </Card>
    );

}

export default ProfilePreview;