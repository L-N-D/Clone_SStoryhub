// 'use client';

import styles from './Reading.module.css';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from 'next/link';
import ChapterNavigatorLeft from '@/components/ChapterNavigator/ChapterNavigatorLeft';
import ChapterNavigatorRight from '@/components/ChapterNavigator/ChapterNavigatorRight';
import ChapterDropdown from '@/components/ChapterDropdown/ChapterDropdown'


export default async function ReadingPage({params}) {

  const {chapterId} = await params;
  const cookie = await cookies();
  const comic = JSON.parse(decodeURIComponent(cookie.get('comic')?.value || ''));
  const comicId = comic?.comicId;

  let imgs = [];  

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chapter/images?comicId=${comicId}&chapterId=${chapterId}`, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-store'
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        imgs = data.map(item => ({
          url: item.image_url,
          number: item.page_number
        }));
      }
    } else {
      console.warn("Failed to fetch comics:", res.status);
    }
  } catch (err) {
    console.error("Error fetching popular comics:", err);
  }
  
  let chapterList = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comic/details?comicId=${comicId}`, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-store',
    });

    if (res.ok) {
      const data = await res.json();
      chapterList = data.chapters;
    } else {
      console.warn("Failed to fetch comics:", res.status);
    }
  } catch (err) {
    console.error("Error fetching comic's details:", err);
  }

  return (
    <>

      <div className={styles.readingContainer}>
        {imgs.map((url, index) => (
          <img
            key={index}
            className={styles.readingImage}
            src={url.url}
            alt={`Trang ${index + 1}`}
          />
        ))}
      </div>
      <footer className = {styles.footer}>
        <Link href="/home" className={styles.homeButton}>
          <i className="fa-solid fa-house" ></i>
        </Link>
        <ChapterNavigatorLeft comicId={comicId} chapterId={chapterId} />
        <ChapterDropdown chapterList={chapterList} currentChapterId={chapterId} />
        <ChapterNavigatorRight comicId={comicId} chapterId={chapterId} />
        <button className = {styles.favorite}>
          <i className="fa-solid fa-heart"></i>
          <span>Yêu thích</span>
        </button>
      </footer>

    </>
  );
}
