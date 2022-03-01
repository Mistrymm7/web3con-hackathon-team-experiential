
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
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
    </div>
  )
}
