import React from "react";
import { useState, useEffect } from "react";
function Search() {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState([]);

    function handleSearch() {
        let data = fetch(`https://newsapi.org/v2/top-headlines?apiKey=6f88d61a316c423786b8a37c81deaf33&q=${input}`)
        data.then((response1) => {
            return response1.json()
        }).then((response2) => {
            console.log(response2)
            const value = response2.articles

            if (Array.isArray(value)) {
                setSearch(value);
            }
        })
    }
    return (
        <>
            <div className="row">
                {search.map((news) => (
                    <div className="col-lg-4" key={news.title}>
                        <div>
                            <h5>{news.title}</h5>
                            <div>{news.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="search">
                <img className="iconSearch" src="search.png" />
                <input type="search"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}>
                </input>
                <button onClick={handleSearch}>Go</button>
            </div>
        </>

    )
};
export default Search;



