import { useState, useEffect} from "react";
import { changePage } from "../App";
import { Quote } from "../components/RandomQuote";

export var search:string;

export const setSearch = (new_search: string) => {
    search = new_search;
}

export const QuotesPage = () =>{
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    console.log(search);
    fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${search}`)
       .then((response) => response.json())
       .then((data) => {
          setQuotes(data.results);

       })
       .catch(setError);
 }, []);

    return (<div>
     {
    quotes.map((quote) => (
        <div className='quote' key={quote._id}>
            {quote.content}
        </div>
    ))
    }
</div>)
}
