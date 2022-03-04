import React, { useState, createRef, useEffect, useReducer } from 'react';
import Gun from 'gun';

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

export default function Chat({ userInfo }) {
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
    <div id="chat">
      <h3>Chat</h3>
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
      <textarea ref={messageRef}></textarea>
      <button onClick={sendMessage}>Send Chat</button>
    </div>
  );
}
