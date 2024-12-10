
import React from 'react'
import styles from './product-cart-catgory.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCartCategory({width, height, data}) {
  return (
    <article className={styles.article}>
        <figure className={styles.figure}>
            <Link href={`/product/${data.sku}`}><Image width={width} height={height} src={data.imageUrl} alt={data.name} quality={100}/></Link>
        </figure>
        <div className={styles.compose}>
            <h2><Link href={`/product/${data.sku}`}>{data.name}</Link></h2>
            <span>{data.price}&#8381;</span>
        </div>
    </article>
  )
}
