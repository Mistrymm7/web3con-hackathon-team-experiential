
import styles from "../styles/ARview.module.css";
import Link from "next/link";

// Calling it ARview for now, this is going to be the main page of our app.
export default function ARview() {

    const [provider, setProvider] = useState();
    const [ethAddr, setEthAddr] = useState("");


    useEffect(() => {
        // check if there is a wallet extension active (MetaMask)
        if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
            // const provider = new ethers.providers.Web3Provider(window.ethereum);
            const provider = window.ethereum;
            setProvider(provider);
            console.log("Provider found: ", provider);

            // update state with the active wallet address
            provider.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    setEthAddr(accounts[0]); // update state with our user's address
                });

        } else {
            console.log("Make sure you have MetaMask installed and active");
        }
    }, []);


    return (
        <div className={styles.container}>
            <h1>
                AR View
            </h1>
            <h3>
                <Link href="/">
                    <a>back to home</a>
                </Link>
            </h3>
        </div>
    );


}