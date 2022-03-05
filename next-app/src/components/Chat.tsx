import { Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useState, createRef, useEffect, useReducer } from 'react';
import Gun from 'gun';
import { ChatBubbleOutline } from '@mui/icons-material';

const gun = Gun();

const initialChatState = {
  messages: [],
};

function chatReducer(state, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        messages: [...state.messages, action.payload],
      };
    case 'CHANGE_ROOM':
      return {
        messages: [],
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

export default function Chat({ userInfo }: any) {
  const [currentRoom, setCurrentRoom] = useState();

  const messageRef = createRef();
  const [state, dispatch] = useReducer(chatReducer, initialChatState);

  useEffect(() => {
    if (!currentRoom) {
      return;
    }
    gun
      .get(currentRoom)
      .map()
      .on((msg) => {
        dispatch({
          type: 'SEND_MESSAGE',
          payload: {
            name: msg.name,
            message: msg.message,
            created: msg.created,
          },
        });
      });
  }, [currentRoom]);

  const sendMessage = () => {
    if (!currentRoom) {
      alert('No room selected');
    }
    gun.get(currentRoom).set({
      name: userInfo.name ?? 'not logged in',
      message: messageRef.current.value,
      created: Date.now(),
    });
    messageRef.current.value = '';
  };

  const changeRoom = (e) => {
    setCurrentRoom(e.target.value);
    console.log(e.target.value);
    dispatch({ type: 'CHANGE_ROOM' });
  };

  return (
    <>
      <Typography variant="h5">Messages</Typography>
      <select onChange={changeRoom}>
        <option>None</option>
        <option>Room 1</option>
        <option>Room 2</option>
        <option>Room 3</option>
      </select>
      <div id="messages">
        {state.messages.map((msg) => (
          <p>
            {msg.name} - {msg.message} - {msg.created}
          </p>
        ))}
      </div>
      <TextField
        id="outlined-textarea"
        label="Send message"
        placeholder="Start typing a message"
        multiline
        inputRef={messageRef}
      />
      <IconButton color="secondary" onClick={sendMessage}>
        <ChatBubbleOutline />
      </IconButton>
    </>
  );
}
