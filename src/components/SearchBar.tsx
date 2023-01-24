import { useState } from "react";

export const SearchBar = () => {
    return (
        <div id="search">
            <label className="input-label">
                <input type="text" name="quote-search" placeholder="Albert Einstein"/>
                <input type="button" name="submit" value="SUBMIT" onClick={()=>{setInitial(false)}}/>
            </label>
        </div>

    );


}