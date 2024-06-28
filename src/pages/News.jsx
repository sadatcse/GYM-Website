import axios from "axios";
import { useState, useEffect } from "react";
import NewsCard from "../components/Newspage/NewsCard";
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/variants';
const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("https://multigym-premium-server.vercel.app/news/get-all");
                setNews(response.data);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="screen my-2">
                    <div className='flex flex-col items-center gap-2 mb-8'>
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='h2 text-center'
          >
            Blogs
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='max-w-[600px] mx-auto text-center'
          >
            Discover insightful stories and updates on various topics.
          </motion.p>
        </div>
            {loading ? (
                <div className="flex justify-center items-center">
                    <p>Loading Blogs...</p>
                </div>
            ) : (
                <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {news.map((newsItem) => (
                        <NewsCard key={newsItem.title} news={newsItem} />
                    ))}
                </section>
            )}
        </div>
    );
};

export default News;
