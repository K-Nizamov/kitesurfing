import styles from '../styles/NavBar.module.scss'
import Link from "next/link";

function Navbar({pageInfo}) {

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navHomeBtn}>
                <Link href="/">
                    <a><img src="/personpin.png" height="30" alt="kitSurfing"  /></a>
                </Link>
            </div>
            <div className={styles.navPageLocation}>
                {pageInfo}
            </div>
        </div>
    );
}

export default Navbar;
