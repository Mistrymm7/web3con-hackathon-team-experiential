import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Chat from '../../src/components/Chat';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const DirectMessages = () => {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Chat targetAddress={uid} />
      </Box>
    </Container>
  );
};

export default DirectMessages;
