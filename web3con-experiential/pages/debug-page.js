import React, { useEffect, useState } from 'react';
import styles from "../styles/debug-page.module.css";
import Link from "next/link";

// Calling it ARview for now, this is going to be the main page of our app.
export default function ARview() {

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


    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);


    return (
        <div className={styles.container}>
            <h1>
                Debug Page (for testing components)
            </h1>
            <p>Current Account: {currentAccount}</p>
            <h3>
                <Link href="/">
                    <a>back to home</a>
                </Link>
            </h3>
        </div>
    );


}