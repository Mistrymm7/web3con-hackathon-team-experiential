import { Typography, Button, Card, CardActions, CardContent, IconButton, Avatar } from "@mui/material";
import ChatOutlined from "@mui/icons-material/ChatOutlined"
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import placeholder from "../static/default-placeholder.png";




// pass onClick function from parent to control the function of the message button
function ProfilePreview({ walletAddress, username, image, onClick }) {

    const [copied, setCopied] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(walletAddress);
        setCopied(true);
    }

    return (
        <Box sx={{ display: 'flex', maxWidth: '400px' }}>
            <Box sx={{ margin: 1, display: "flex", alignItems: "center" }}>
                <Avatar src={!image ? placeholder : image} sx={{ width: 64, height: 64 }} />
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

            <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {/* {<IconButton size="medium" onClick={onClick}>
                    <ChatOutlined fontSize="medium" color="primary" />
                </IconButton>} */}
                {copied ? "Copied Address!" :
                    <IconButton size="medium" onClick={handleCopy}>
                        <ContentCopyIcon fontSize="medium" color="grey" />
                    </IconButton>
                }
            </CardActions>

        </Box>
    );

}

export default ProfilePreview;