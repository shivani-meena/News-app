import React from "react";
import { useState, useEffect } from "react";
function Search() {
    const [input, setInput] = useState([]);

    function handleSearch() {
        let data = fetch(`https://newsapi.org/v2/top-headlines?apiKey=6f88d61a316c423786b8a37c81deaf33&q=${input}`)
        data.then((response1) => {
            return response1.json()
        }).then((response2) => {
            console.log(response2)
        })
    }

    return (
        <>
            <div className="search">
                <img className="iconSearch" src="search.png" />
                <input type="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}>
                </input>
                <button onClick={handleSearch}>Go</button>
            </div>
        </>

    )
};
export default Search;



