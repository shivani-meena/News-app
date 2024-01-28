import React from "react";
import { useState,useEffect } from "react";
function Search() {

    return (
        <>
            <div className="search">
                <img className="iconSearch" src="search.png" />
                <input placeholder="search" type="input" ></input>
                <button>Go</button>
            </div>
        </>

    )
}

export default Search;

