import { Button } from '@mui/material';
import { useEffect } from 'react';
import { hooks, walletConnect } from '../connectors/walletConnect';
import Address  from './Address';

const {
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export function WalletConnectButton() {
  const isActive = useIsActive();
  const isActivating = useIsActivating();
  const error = useError();

  const accounts = useAccounts();
  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  useEffect(() => {
    void walletConnect.connectEagerly();
  }, []);

  if (error) {
    console.error(error);
  }
  if (isActive) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }} />
        <Address accounts={accounts} ENSNames={ENSNames} />
        <Button variant="contained" onClick={() => walletConnect.deactivate()}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }} />
      <Button
        variant="contained"
        onClick={isActivating ? undefined : () => walletConnect.activate()}
        disabled={isActivating}
      >
        Connect with WalletConnect
      </Button>
    </div>
  );
}
