import ImgSwiper from "@/components/Swiper/Swiper";
import styles from './home.module.css';
import ShowCommicList from "@/components/CommicList/CommicList";

const trendInit = [
    { src: "/Story_Hub_White.png", alt: "pic1" },
    { src: "/Story_Hub_Black.png", alt: "pic2" }
];

const init = [
    { title: "Demo" },
    { title: "Demo" },
    { title: "Demo" },
    { title: "Demo" },
    { title: "Demo" },
    { title: "Demo" },
];

export default async function Home() {

    const minViewCount = 0;

    let trending = trendInit;
    let commics = init;


    try {
        const [trendRes, recentRes] = await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comic/popular?minViewCount=${minViewCount}`, {
                method: 'GET',
                credentials: 'include',
                cache: 'default',
            }),
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comic/recent`, {
                method: 'GET',
                credentials: 'include',
                cache: 'default',
            })
        ]);

        if (trendRes.ok) {
            const data = await trendRes.json();
            if (Array.isArray(data)) {
                trending = data.map(item => ({
                    src: item.cover_image,
                    alt: item.comic_title
                }));

            }
        } else {
            console.warn("Failed to fetch trending comics:", trendRes.status);
        }
        if (recentRes.ok) {
            const data = await recentRes.json();
            if (Array.isArray(data)) {
                commics = data.map(item => ({
                    id: item.comicid,
                    title: item.comic_title,
                    cover: item.cover_image,
                    detail: item.chapter_count,
                    update: item.updated_at,
                    ref: '/details'
                }));

            }
        } else {
            console.warn("Failed to fetch recent comics:", recentRes.status);
        }
    } catch (err) {
        console.error("Error fetching popular comics:", err);
    }

    return (
        <>
            <ImgSwiper listImage={trending} />
            <div className={styles.panel}>
                <p className={styles.panel_title}>Hot commic</p>
                <ShowCommicList list={commics} />
            </div>
            <div className={styles.panel}>
                <p className={styles.panel_title}>Newest</p>
                <ShowCommicList list={commics} />
            </div>
        </>
    );
}
