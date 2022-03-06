import { Box, Button, Container, Typography } from '@mui/material';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { shortenHash } from '../src/utils/helpers';

const Home = () => {
  const { address, disconnect, connect, error } = useEthereum();

  useEffect(() => {
    if (error) {
      toast.warn(error.message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [error]);

  console.log(error);

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
        <Typography variant="h4" component="h4">
          Welcome to
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          ExperiAR
        </Typography>
        {!address && <Button onClick={connect}>Connect to wallet</Button>}
        {address && (
          <>
            Connected to account {address}
            <Button onClick={disconnect}>
              Disconnect {shortenHash(address, 5, 3)}
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
