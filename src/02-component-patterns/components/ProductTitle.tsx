import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../style/styles.module.css'

export interface Props {
    className?: string;
    title?: string;
    activeClass?: string;
    style?: CSSProperties;
}


export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext(ProductContext);


    return (
        <span
            style={style}
            className={`${styles.productDescription} ${className}`}>
            {title ? title : product.title}
        </span>
    );
}