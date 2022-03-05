import React, { useEffect, useState } from 'react';
import styles from "../styles/ARview.module.css";
import Link from "next/link";

// Calling it ARview for now, this is going to be the main page of our app.
export default function ARview() {

    return (
        <div className={styles.container}>
            <h1>
                AR View
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
