'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules'
import styles from './section-2.module.scss'
import ProductCart from '@/fsd-3entities/product-cart/ui/product-cart';
import Prev from '@/fsd-4shared/icons/swiper-navigation/prev';
import Next from '@/fsd-4shared/icons/swiper-navigation/next';

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

    const overlaytext = {
        topText: 'NEW COLLECtion',
        bottomText: 'SOON',
        linkUrl: '#'
    }
    return (
        <section className={styles.section}>
            <span className={styles.top_line}>{
                    overlaytext
                        .topText
                        .toLocaleUpperCase()
                }</span>
            <div className={styles.mobile}>
                <div className={styles.swiper_navigation}>
                    <div className="next_section2"><Prev/></div>
                    <div className="prev_section2"><Next/></div>
                </div>
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.next_section2',
                        prevEl: '.prev_section2'
                    }}
                    loop={true}
                    className={styles.swiper}>
                    {
                        data.map((item, index) => (
                            <SwiperSlide key={index} className={styles.swiper_slide}>
                                <ProductCart width={400} height={600} data={item} key={index}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className={styles.desktop}>
                {
                    data.map(
                        (item, index) => (<ProductCart width={400} height={600} data={item} key={index}/>)
                    )
                }
            </div>
            <span className={styles.bottom_line}>{
                    overlaytext
                        .bottomText
                        .toLocaleUpperCase()
                }</span>
        </section>
    )
}