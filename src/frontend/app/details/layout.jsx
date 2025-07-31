// 'use client';

import Head from 'next/head';
import Link from 'next/link';
import styles from './details.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
// import { useState, useEffect } from 'react';

export default function DetailsComic({ children }) {

  return <>
    <div className={styles.home}>
      <Navbar  />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>

</>;
}