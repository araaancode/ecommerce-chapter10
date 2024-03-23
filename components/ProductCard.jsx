import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product);
  return (
    <div className={styles.card}>
      <Image src={product.image} height={300} width={220} />
      <Link href={`/products/${product.id}`}><h5 className={styles.category}>{product.title.slice(0,20)}</h5></Link>
      <p className={styles.price}>{product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
      >
        افزودن به کارت
      </button>
    </div>
  );
};

export default ProductCard;
