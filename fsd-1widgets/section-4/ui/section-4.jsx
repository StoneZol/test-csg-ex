'use client'
import styles from './section-4.module.scss'
import Image from 'next/image';
import ProductCart from '@/fsd-3entities/product-cart/ui/product-cart';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import Prev from '@/fsd-4shared/icons/swiper-navigation/prev';
import Next from '@/fsd-4shared/icons/swiper-navigation/next';

const data = [
    {
        name: 'Жакет',
        price: '12 990 РУБ.',
        imageUrl: '/product-card-mock.webp',
        sku: '24245646423'
    }, {
        name: 'Жакет',
        price: '12 990 РУБ.',
        imageUrl: '/product-card-mock.webp',
        sku: '24245646423'
    }, {
        name: 'Жакет',
        price: '12 990 РУБ.',
        imageUrl: '/product-card-mock.webp',
        sku: '24245646423'
    }
]

const imageBlock = {
    name: 'design bg',
    imageUrl: '/section5-mock.webp'
}

export default function Section4() {
    return (
        <section className={styles.section}>
            <div className={styles.left_side}>
                <Image
                    width={810}
                    height={1080}
                    alt={imageBlock.name}
                    src={imageBlock.imageUrl}/>
            </div>
            <div className={styles.right_side}>
                <div className={styles.desktop}>
                    <ProductCart width={400} height={600} data={data[1]}/>
                </div>
                <div className={styles.mobile}>
                    <div className={styles.swiper_navigation}>
                        <div className="prev_section4"><Prev/></div>
                        <div className="next_section4"><Next/></div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.next_section4',
                            prevEl: '.prev_section4'
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
            </div>
        </section>
    )
}
