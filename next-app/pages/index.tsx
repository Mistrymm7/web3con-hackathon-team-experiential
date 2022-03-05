import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Chat from '../src/components/Chat';
import { WalletConnectButton } from '../src/components/WalletConnectButton';

const Home: NextPage = () => {
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
        <Typography variant="h4" component="h1" gutterBottom>
          Home Page
        </Typography>
        <Link href="/ar" color="secondary">
          Link to AR page
        </Link>
        <WalletConnectButton />
        <Chat userInfo={undefined} />
      </Box>
    </Container>
  );
};

export default Home;
