"use client"
import 'bootstrap/dist/css/bootstrap.css';
import Newsrow from "./news_row";
import Search from "./searchPage";
import { Article } from "./dummyData.js";
import { useEffect, useState } from "react";
function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6f88d61a316c423786b8a37c81deaf33');

        if (response.ok) {
          const data = await response.json();
          const articlesArray = data.articles || [];
          console.log(data)

          if (Array.isArray(articlesArray)) {
            setArticles(articlesArray);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Search />
      <div className="container">
        <div className="text">TOP NEWS FROM INDIA</div>
        <div className="article row">
          {articles.map((news) => (
            <div className="col-lg-4">
              <Newsrow
                key={news.title}
                news={news}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;


