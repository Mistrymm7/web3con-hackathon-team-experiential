import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Chat from '../src/components/Chat';
import WalletConnectButton from '../src/components/WalletConnectButton';

export default function Home() {
  /**
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const currentAccount = 'foo';
  return (
    <div className={styles.container}>
      <h1>Root page / Home page</h1>
      <h3>
        <Link href="/ar">
          <a>Link to AR page</a>
        </Link>
      </h3>

      <WalletConnectButton />
      <p>Current Account: {currentAccount}</p>
      <Chat userInfo={{ name: currentAccount }} />
    </div>
  );
}
