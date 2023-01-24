import { useEffect } from "react";
import { useState } from "react";

interface Quote {
    id: number;
    content: string;
}

export const QuotesPage = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`https://api.quotable.io/search/quotes?query=${search}&fields=author`)
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setIsLoaded(true);
              setQuotes(data.results);

           })
           .catch(setError);
     }, [search]);

     function findQuotes(author: string){
        setSearch(author);
    }


    return(
        <div>
            {
            quotes.map((quote) => (
                <div key={quote.id}>
                    {quote.content}
                </div>
            ))
            }
        </div>
    );


}