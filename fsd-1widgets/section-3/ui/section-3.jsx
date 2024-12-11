'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules'
import Image from 'next/image';
import styles from './section-3.module.scss'
import Prev from '@/fsd-4shared/icons/swiper-navigation/prev';
import Next from '@/fsd-4shared/icons/swiper-navigation/next';

export default function Section3() {

    const data = [
        {
            name: 'mock data',
            imageUrl: '/section3-mock.webp'
        }, {
            name: 'mock data',
            imageUrl: '/section3-mock.webp'
        }, {
            name: 'mock data',
            imageUrl: '/section3-mock.webp'
        }
    ]

    const overlaytext = {
        generalText: 'FASHION SHOW',
        subText: 'OUR FASHIOM SHOW SOON',
        subTextMobile: 'FASHION SHOW SOON'
    }
    return (
        <section className={styles.section}>
            <div className={styles.swiper_navigation}>
                <div className="prev_section3"><Prev/></div>
                <div className="next_section3"><Next/></div>
            </div>
            <Swiper
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.next_section3',
                    prevEl: '.prev_section3'
                }}
                loop={true}
                className={styles.swiper}>
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiper_slide}>
                            <Image
                                width={1620}
                                height={2380}
                                alt={item.name}
                                quality={100}
                                src={item.imageUrl}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={styles.overlay}>
                <span className={styles.general_text}>{overlaytext.generalText}</span>
                <span className={styles.sub_text}>{overlaytext.subText}</span>
                <span className={styles.sub_text_mobile}>{overlaytext.subTextMobile}</span>
            </div>
        </section>
    )
}