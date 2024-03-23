import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1 style={{'marginBottom':'50%'}}>سبد خرید شما است</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>تصویر</div>
            <div>نام محصول</div>
            <div>قیمت</div>
            <div>تعداد</div>
            <div>حذف/ویرایش</div>
            <div>قیمت کل</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <h2>جمع کل: {getTotalPrice().toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
