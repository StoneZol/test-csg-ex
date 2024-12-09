import React from 'react'
import styles from './section-4.module.scss'
import Image from 'next/image';
import ProductCart from '@/fsd-3entities/product-cart/ui/product-cart';

const data = {
    name: 'Жакет',
    price: '12 990 РУБ.',
    imageUrl: '/product-card-mock.webp',
    sku: '24245646423'
  }

  const imageBlock = {
    name: 'design bg',
    imageUrl: '/section5-mock.webp'
  }



export default function Section4() {
  return (
    <section className={styles.section}>
       <div className={styles.left_side}>
            <Image width={810} height={1080} alt={imageBlock.name} src={imageBlock.imageUrl} />
       </div>
       <div className={styles.right_side}>
            <ProductCart width={400} height={600} data={data}/>
       </div>
    </section>
  )
}
