
'use client';
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";
import { useState, useEffect, useRef } from 'react';

export default function SearchBar({ className }) {
    const [showInput, setShowInput] = useState(false);
    const containerRef = useRef(null);
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const router = useRouter();

    // Hàm click vào kết quả
    const handleResultClick = (comic) => {
        document.cookie = `comic=${encodeURIComponent(JSON.stringify({
            comicId: comic.comicId,
            comicName: comic.title,
            cover: comic.cover_image
        }))}; path=/; max-age=3000`;
        router.push('/details');
    };

    // Bắt sự kiện click ngoài input
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowInput(false);
                setResults([]);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Gọi API mỗi khi keyword thay đổi
    useEffect(() => {
        if (!keyword.trim()) {
            setResults([]);
            return;
        }
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comic/search?keyword=${encodeURIComponent(keyword)}`, {
                    method: 'GET',
                    credentials: 'include',
                    cache: 'no-store',
                });
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data)) {
                        const comics = data.map(item => ({
                            title: item.title,
                            cover_image: item.cover,
                            comicId: item.comicid,
                        }));
                        setResults(comics);
                    } else {
                        console.warn("Unexpected data format:", data);
                        setResults([]);
                    }
                } else {
                    console.warn("Failed to fetch search results:", res.status);
                    setResults([]);
                }
            } catch (err) {
                console.error("Error fetching search results:", err);
                setResults([]);
            }
        };
        fetchData();
    }, [keyword]);

    return (
        <div ref={containerRef} className={styles.searchWrapper}>
            {!showInput && (
                <span className={styles.search_button} onClick={() => setShowInput(true)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
            )}
            {showInput && (
                <div className={styles.searchBar}>
                    <input
                        id="search"
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className={[styles.searchInput, className].filter(Boolean).join(' ')}
                    />

                    {results.length > 0 && (
                        <ul className={styles.searchResults}>
                            {results.map((comic) => (
                                <li key={comic.comicId} className={styles.searchItem} onClick={() => handleResultClick(comic)}>
                                    <img src={comic.cover_image} alt={comic.title} className={styles.CoverImage} />
                                    <span className={styles.ComicName}>{comic.title}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            )}
        </div>
    );
}

