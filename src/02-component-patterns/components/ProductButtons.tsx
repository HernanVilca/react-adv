import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../style/styles.module.css'

export const ProductButtons = () => {

    const { increaseBy, counter } = useContext(ProductContext)
    // const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >-</button>

            <div className={styles.countLabel}>{counter}</div>
            <button
                className={styles.buttonAdd}
                onClick={() => increaseBy(+ 1)}
            >+</button>
        </div>
    );
}