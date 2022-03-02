
import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
        getAllHighfives(); // retrive all the highfives from the chain
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
        alert("Get MetaMask!");
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

    // check if there is a wallet extension active (MetaMask)
    // if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
    //   // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   const provider = window.ethereum;
    //   setProvider(provider);
    //   console.log("Provider found: ", provider);

    //   // update state with the active wallet address
    //   provider.request({ method: 'eth_requestAccounts' })
    //     .then(accounts => {
    //       setEthAddr(accounts[0]); // update state with our user's address
    //     });

    // } else {
    //   console.log("Make sure you have MetaMask installed and active");
    // }
  }, []);

  return (
    <div className={styles.container}>
      <h1>
        Root page / Home page
      </h1>
      <h3>
        <Link href="/ar">
          <a>Link to AR page</a>
        </Link>
      </h3>
      { // if there is no authorized wallet, then show connect button
        !currentAccount ? (
          <button onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (<p>Wallet connected!</p>)
      }
      <p>
        Current Account: {currentAccount}
      </p>
    </div>
  )
}
