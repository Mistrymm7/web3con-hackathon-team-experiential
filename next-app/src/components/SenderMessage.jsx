import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState, createRef, useEffect, useReducer } from 'react';
import { formatUnixTimestamp } from '../utils/helpers';

export default function SenderMessage({ message, created }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 2,
        alignItems: 'flex-end',
      }}
    >
      <Paper
        square="false"
        sx={{
          bgcolor: 'primary.light',
          borderRadius: 2,
          color: 'primary.contrastText',
          padding: 2,
        }}
      >
        {message}
      </Paper>
      <Typography variant="caption" sx={{ justifyContent: 'end' }}>
        {formatUnixTimestamp(created)}
      </Typography>
    </Box>
  );
}
