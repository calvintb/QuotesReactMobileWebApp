import { useState, useEffect} from "react";
import { pageName, setPageName } from "../App";
import { Quote } from "../components/RandomQuote";

export const [search, setSearch] = useState("");

export const QuotesPage = () =>{
    const [isLoaded, setIsLoaded] = useState(false);
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    console.log(search);
    fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${search}`)
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setIsLoaded(true);
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
