// 'use client';

import Link from 'next/link';
import styles from './details.module.css';
// import { useState, useEffect } from 'react';
import { cookies } from 'next/headers';
import Chat from '@/components/Chat/Chat';

export default async function DetailsPage() {

  let comic = null;
  const cookie = await cookies();
  try {
    comic = JSON.parse(decodeURIComponent(cookie.get('comic')?.value || ''));
  } catch (err) {
    console.error("Cannot parse cookie comic:", err);
    redirect('/home');
  }

  if (!comic){
    redirect('/home');
  }
  const comicId = comic?.comicId;
  console.log(comicId);

  let ComicPic = ''
  let ComicName = ''
  let ComicAuthor = ''
  let ComicStatus = ''
  let ComicFavorite = 0
  let ComicViews = 0
  let ComicDescription = ''
  let ComicChapters = [
    {chapterId: 1, title: 'chapter 1', uploadDate: '06-07-2025'},
    {chapterId: 2, title: 'chapter 2', uploadDate:'07-07-2025'}
  ]

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comic/details?comicId=${comicId}`, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-store',
    });

    if (res.ok) {
      const data = await res.json();
      ComicName = data.title;
      ComicAuthor = data.author;
      ComicStatus = data.status;
      ComicFavorite = data.likeCount;
      ComicViews = data.viewCount;
      ComicDescription = data.description;
      ComicChapters = data.chapters;
      ComicPic = comic.cover;
    } else {
      console.warn("Failed to fetch comics:", res.status);
    }
  } catch (err) {
    console.error("Error fetching comic's details:", err);
  }

  return (
    <>

        <div className={styles.details}>

          <div className={styles.detailsHeader}>
            <img src={ComicPic} alt="ComicName" className={styles.ComicPic} />

            <div className={styles.detailsText}>
              {/* /* chỗ này hiển thị tên tuyện */ }
              <h1 className={styles.ComicName}>Tên truyện: {ComicName} </h1>

              {/* chỗ này hiển thị các thông tin của truyện */}
              <div className={styles.ComicAuthor}>
                <i className="fa-solid fa-user"></i>
                <span>Tác giả: {ComicAuthor}</span>
              </div>
                    
              <div className={styles.ComicStatus}>
                <i className="fa fa-rss"></i>
                <span>Trạng thái: {ComicStatus}</span>
              </div>

              <div className={styles.ComicFavorite}>
                <i className="fa-solid fa-heart"></i>
                <span >Yêu thích: {ComicFavorite}</span>
              </div>

              <div className={styles.ComicViews}>
                <i className="fa-solid fa-eye"></i>
                <span>Lượt xem: {ComicViews}</span>
              </div>
                    
            </div>

          </div>

            {/* chỗ này hiển thị giới thiệu và danh sách chương của truyện */}
              <div className={styles.ComicDescription}>
                <div className={styles.ComicInfo}>
                  <i className="fa-solid fa-circle-info"></i>
                  <span>Giới thiệu: </span>
                </div>
                <p className={styles.ComicText}>{ComicDescription}</p>
              </div>
              <div className={styles.ComicChapter}>
                <i className="fa-solid fa-layer-group"></i>
                <span>Danh sách chương</span>
              </div>

          <div className={styles.ComicChapterList}>
            <ul>
              {ComicChapters.map((chapter) => (
                <li key={chapter.chapterId} >
                  <Link href={`/reading/${chapter.chapterId}`} className={styles.ChapterLink}>
                    <span className={styles.ChapterTitle}>{chapter.title}</span>
                    <span className={styles.ChapterDate}>Ngày đăng: {chapter.uploadDate ? new Date(chapter.uploadDate).toLocaleDateString('vi-VN'):''}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
              
            <div className={styles.chatContainer}>
              <Chat />
            </div>

        </div>


    </>
  );
}
