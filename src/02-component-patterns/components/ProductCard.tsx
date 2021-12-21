
import { createContext, ReactElement, useContext } from 'react';

import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct'

import styles from '../style/styles.module.css'
import noImage from '../assets/no-image.jpg'




export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;



export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product

        }}>
            <div className={styles.productCard}>

                {children}


            </div>
        </Provider>
    )
}


