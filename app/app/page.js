"use client"
import 'bootstrap/dist/css/bootstrap.css';
import Newsrow from "./news_row";
import Search from "./searchPage";
import { Article } from "./dummyData.js";
import { useEffect, useState } from "react";
function Home() {
  const [article, setArticle] = useState([]);


  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=6f88d61a316c423786b8a37c81deaf33")
    .then(response => response.json())
    .then(data => setArticle(data.articles))
  },[])

  return (
    <>
      <Search 
      />
      <div className="container">
        <div className="text">TOP NEWS FROM INDIA</div>
        <div className="article row">
          {article.map((news) => (
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
