import { Typography, Button, Container, Chip } from '@mui/material';
import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Home() {

  const [provider, setProvider] = useState();
  const [currentAccount, setCurrentAccount] = useState("");



  const checkIfWalletIsConnected = async () => {

    try {
      // First make sure we have access to window.ethereum
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
      } else {
        console.log("We have the ethereum object ", ethereum);
      }

      // check if we're authorized to access the user's wallet
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Activate MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Container>

      { // Show chip with address if user has connected their wallet
        currentAccount && (<Chip icon={<AccountBalanceWalletIcon />} label={currentAccount.slice(0, 7) + "..."} variant="outlined" />)
      }
      {!currentAccount && (<Button variant="contained" onClick={connectWallet}>Connect Wallet</Button>)}

    </Container>
  )
}
