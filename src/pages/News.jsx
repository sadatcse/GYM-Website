import axios from "axios";
import { useState } from "react";
import NewsCard from "../components/Newspage/NewsCard";
const News = () => {
    const [news ,setNews] = useState([]);

    const fakeData = "../../public/news.json";
    axios.get(fakeData).then(data=>{
        setNews(data.data);
    });

    return (
        <div className="screen mt-4">
            
            {/* <p>I am news page
                check the link copy whole use fake data and follow the design
                https://www.pharmasolutions.com.bd/news
            </p> */}


            {/* News Cards */}
            <section>
                {
                    news.map((news)=><NewsCard key={news.title} news={news}/>)
                }
            </section>
        </div>
    );
};

export default News;