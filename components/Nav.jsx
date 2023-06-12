import Link from "next/link";
import styles from "../stylesheets/Nav.module.css";

function Nav() {
  return (
    <ul className={styles.Nav}>
      <li className={styles.NavSection}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.NavSection}>
        <Link href="/users">Users</Link>
      </li>
    </ul>
  );
}

export default Nav;
