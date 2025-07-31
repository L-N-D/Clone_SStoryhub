// 'use client';
import Head from 'next/head';
import styles from './Reading.module.css';
import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/components/SearchBar/SearchBar';
import Footer from '@/components/Footer/Footer';
// import { useState, useEffect } from 'react';



export default function ReadingLayout({ children }) {



  // Tạm thời để hiển thị danh sách các chương
  return <>
    <div className={styles.readingPage}>
       <Navbar />         
      
      {/* Phần này sẽ hiển thị nội dung của chương truyện, bao gồm hình ảnh và văn bản. */}
      <div className={styles.main}> 
        {children}
      </div>



    </div>
  </>;
}
