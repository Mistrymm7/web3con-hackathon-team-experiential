import { AccountCircle } from '@mui/icons-material';
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

export default function RecipientMessage({ name, message, created }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ padding: 2 }}>
        <AccountCircle fontSize="large" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 2,
          alignItems: 'flex-start',
        }}
      >
        {name}{' '}
        <Paper
          square="false"
          sx={{
            bgcolor: 'secondary.light',
            borderRadius: 2,
            color: 'secondary.contrastText',
            padding: 2,
          }}
        >
          {message}
        </Paper>
        <Typography variant="caption" sx={{ justifyContent: 'end' }}>
          {formatUnixTimestamp(created)}
        </Typography>
      </Box>
    </Box>
  );
}
