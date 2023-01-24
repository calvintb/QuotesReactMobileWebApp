import React, { useState, useEffect } from 'react';
   
export interface Quote {
   _id: string;
   content: string;
   author: string;
}


export const RandomQuote = () => {
   const [quote, setQuote] = useState<Quote|null>(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [error, setError] = useState(null);


   useEffect(() => {
      fetch('https://usu-quotes-mimic.vercel.app/api/random')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setIsLoaded(true);
            setQuote(data);
         })
         .catch(setError);
   }, []);


   // const saveQuote = ((data:Quote)=>{
   //    const quote: Quote = {
   //       content: data.content,
   //       author: data.author
   //    };
   //    setQuote(quote);
   // });

   
if (error) {
      console.log(error)
    return <div>An error occurred {error}</div>;
      
}  
else if (!isLoaded) {
    return <div>Loading...</div>;
} else if (quote){
   return (
     <div className="App">
         <div>
            {quote.content} - {quote.author}
        </div>
     </div>
   );
 } return(<div>Easter egg</div>)}
