
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/NavBar'
export default function Home() {

  return (
    <>
      <Navbar pageInfo = "Home"/>
      <div className={styles.container}>
        <p className={styles.topTextPosition}>Learn kitesurfing <br />
          where, when & how you want, <br />
          <span className={styles.spanTop}>your choice. your freedom.</span>
        </p>
        <p className={styles.lowerTextPosition}>Find your Instructor</p>
        <p className={styles.galleryBtn}><Link href='/gallery'>TO GALLERY</Link></p>
      </div>
    </>
  )
}
