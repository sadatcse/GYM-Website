import axios from "axios";
import { useState } from "react";
import NewsCard from "../components/Newspage/NewsCard";
const News = () => {
    const [news ,setNews] = useState([]);
    const api = "https://multigym-premium-server.vercel.app/news/get-all"
    const fakeData = "../../public/news.json";
    axios.get(fakeData).then(data=>{
        setNews(data.data);
    });

    return (
        <div className="screen my-2">

            {/* News Cards */}
            <section className="grid grid-cols-4 gap-4">
                {
                    news.map((news)=><NewsCard key={news.title} news={news}/>)
                }
            </section>
        </div>
    );
};

export default News;