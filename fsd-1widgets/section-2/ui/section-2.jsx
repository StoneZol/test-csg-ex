'use client';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation} from 'swiper/modules'
import Image from 'next/image';
import styles from './section-2.module.scss'
import Link from 'next/link';
import ProductCart from '@/fsd-3entities/product-cart/ui/product-cart';


export default function Section1() {

const data = [
    {
        name: 'Джинсовый',
        price: '12 990 РУБ.',
        imageUrl: '/section2-mock.webp',
        sku: '24245646423'
    }, {
        name: 'Джинсовый',
        price: '12 990 РУБ.',
        imageUrl: '/section2-mock.webp',
        sku: '24245646423'
    }, {
        name: 'Джинсовый',
        price: '12 990 РУБ.',
        imageUrl: '/section2-mock.webp',
        sku: '24245646423'
    }
]

const overlaytext={
  topText: 'NEW COLLECtion',
  bottomText: 'SOON',
  linkUrl:'#'
}
    return (
        <section className={styles.section}>
            <span className={styles.top_line}>{overlaytext.topText.toLocaleUpperCase()}</span>
            {/* <Swiper 
            slidesPerView={1} 
            modules={[Navigation]} 
            navigation={true}  
            loop={true} 
            className={styles.swiper}>
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiper_slide}>
                            <Image
                                width={1000}
                                height={1500}
                                alt={item.name}
                                quality={100}
                                src={item.imageUrl}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper> */}
            <div className={styles.desktop}>
                {
                    data.map((item, index)=>(
                        <ProductCart width={400} height={600} data={item} key={index}/>
                    ))
                }
            </div>
            <span className={styles.bottom_line}>{overlaytext.bottomText.toLocaleUpperCase()}</span>
           </section>
    )
}