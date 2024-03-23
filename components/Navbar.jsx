import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

import { userService } from '../services/index';

function logout() {
  userService.logout();
}


const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <a onClick={logout}>خروج</a>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">سبد خرید ({getItemsCount()})</Link>
        </li>

        <li className={styles.navlink}>
          <Link href="/about">درباره</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/contact">تماس</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">محصولات</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/">خانه</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
