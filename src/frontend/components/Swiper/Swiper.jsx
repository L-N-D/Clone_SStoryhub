"use client";
import React from 'react';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Swiper.module.css';

const ImgSwiper = ({ listImage }) => {
    const safeImages = Array.isArray(listImage) && listImage.length > 0
        ? listImage
        : [{ src: "/Story_Hub_White.png", alt: "default image" }];
    return (
        <div className={styles.swiper}>
            <SwiperContainer
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                {safeImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img.src}
                            alt={img.alt || `image-${index}`}
                            className={styles.slideImage}
                        />
                    </SwiperSlide>
                ))}
            </SwiperContainer>
        </div>
    );
};

export default ImgSwiper;
