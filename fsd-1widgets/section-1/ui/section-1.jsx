'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules'
import Image from 'next/image';
import styles from './section-1.module.scss'
import Link from 'next/link';
import Prev from '@/fsd-4shared/icons/swiper-navigation/prev';
import Next from '@/fsd-4shared/icons/swiper-navigation/next';

export default function Section1() {

    const data = [
        {
            name: 'mock data',
            imageUrl: '/section1-mock.webp'
        }, {
            name: 'mock data',
            imageUrl: '/section1-mock.webp'
        }, {
            name: 'mock data',
            imageUrl: '/section1-mock.webp'
        }
    ]

    const overlaytext = {
        generalText: 'Be feminiNe - choose us',
        linkText: 'LOOK ALL',
        linkUrl: '#'
    }
    return (
        <section className={styles.section}>
            <div className={styles.swiper_navigation}>
            <div className="prev_section1"><Prev/></div>
                <div className="next_section1"><Next/></div>
            </div>
            <Swiper
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.next_section1',
                    prevEl: '.prev_section1'
                }}
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
            </Swiper>
            <div className={styles.overlay}>
                <span className={styles.general_text}>{
                        overlaytext
                            .generalText
                            .toUpperCase()
                    }</span>
                <Link className={styles.link_text} href={overlaytext.linkUrl}>{overlaytext.linkText}</Link>
            </div>
        </section>
    )
}