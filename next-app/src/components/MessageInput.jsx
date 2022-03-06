import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useState, createRef, useEffect, useReducer } from 'react';
import { Send } from '@mui/icons-material';

export default function MessageInput({ inputRef, sendMessage }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <TextField
        id="outlined-textarea"
        label="Send message"
        placeholder="Start typing a message"
        multiline
        inputRef={inputRef}
        onChange={onChange}
        sx={{
          flexGrow: 1,
        }}
      />
      <IconButton
        onClick={sendMessage}
        size="large"
        color="primary"
        disabled={text === ''}
      >
        <Send />
      </IconButton>
    </Box>
  );
}
