'use client';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation,Pagination, Mousewheel} from 'swiper/react'
import Image from 'next/image';
import styles from './section-3.module.scss'


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

const overlaytext={
  generalText: 'FASHION SHOW', 
  subText: 'OUR FASHIOM SHOW SOON'
}
    return (
        <section className={styles.section}>
            <Swiper  slidesPerView={1} 
            navigation={true}  
            loop={true} modules={Navigation} 
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
            </div>
           </section>
    )
}