import React, { useState, useEffect } from 'react';
   
interface Quote {
   content: string;
   author: string;
}


export const RandomQuote = () => {
   const [quote, setQuote] = useState<Quote>();
   const [isLoaded, setIsLoaded] = useState(false);
   const [error, setError] = useState(null);


   useEffect(() => {
      fetch('https://usu-quotes-mimic.vercel.app/api/random')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setIsLoaded(true);
            saveQuote(data);
         })
         .catch(setError);
   }, []);


   const saveQuote = ((data)=>{
      const quote: Quote = {
         content: data.content,
         author: data.author
      };
      setQuote(quote);
   });

   
   if (error) {
    return <p>An error occurred {console.log(error)}</p>
}  else if (!isLoaded) {
    return <div>Loading...</div>;
} else {
   return (
     <div className="App">
         <div>
            {quote.content} - {quote.author}
        </div>
     </div>
   );
 }
}
