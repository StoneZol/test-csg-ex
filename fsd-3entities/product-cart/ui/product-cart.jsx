import IconStar from '@/fsd-4shared/icons/icon-star/icon-star'
import React from 'react'
import styles from './product-cart.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCart({width, height, data}) {
    return (
        <article className={styles.article}>
            <figure className={styles.figure}>
                <Link href={`/product/${data.sku}`}>
                  <Image
                    width={width}
                    height={height}
                    src={data.imageUrl}
                    alt={data.name}
                    quality={100}/></Link>
            </figure>
            <div className={styles.compose}>
                <div className={styles.left_side}>
                    <h2>
                        <Link href={`/product/${data.sku}`}>{data.name.toUpperCase()}</Link>
                    </h2>
                    <span>{data.price}</span>
                </div>
                <div className={styles.right_side}><IconStar/></div>
            </div>
        </article>
    )
}
