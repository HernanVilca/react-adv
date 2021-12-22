
import { createContext, ReactElement, useContext, CSSProperties } from 'react';

import { Product, ProductContextProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct'

import styles from '../style/styles.module.css'
import noImage from '../assets/no-image.jpg'




export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}


export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product

        }}>
            <div className={`${styles.productCard} ${className}`}
            style={ style }
            >

                {children}


            </div>
        </Provider>
    )
}


