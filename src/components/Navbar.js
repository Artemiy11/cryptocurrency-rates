import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
      <nav className={styles.navbar}>
        <Link className={styles.links} href="/">
          Home
        </Link>
        <Link className={styles.links} href="/profile">
          Profile
        </Link>
        <Link className={styles.links} href="/coins">
          Coins
        </Link>
      </nav>
  );
};

export default Navbar;
