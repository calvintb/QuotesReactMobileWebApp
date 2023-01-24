import { useEffect, useState } from 'react'
import { WelcomePage } from './pages/WelcomePage';
import { QuotesPage } from './pages/QuotesPage';


export var pageName: string = "welcome-page";

export var changePage = (new_page:string) => {
  pageName = new_page
  console.log(pageName);
}

export const App = () => {
  [pageName, changePage] = useState("welcome-page")

  return (
    <div>
      <button onClick={() => changePage("welcome-page")}>Home</button>
      <div>
        {pageName === "welcome-page" && <WelcomePage />}
        {pageName === "quotes-page" && <QuotesPage />}
      </div>
    </div>
  )
}
















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import { RandomQuote } from './components/RandomQuote'
// import { WelcomePage } from './pages/WelcomePage'
// import { useEffect } from 'react'

// interface Quote {
//   id: number;
//   content: string;
// }

// export function App() {
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState("welcome");
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [quotes, setQuotes] = useState<Quote[]>([]);
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     console.log(search);
//     fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${search}`)
//        .then((response) => response.json())
//        .then((data) => {
//           console.log(data);
//           setIsLoaded(true);
//           setQuotes(data.results);

//        })
//        .catch(setError);
//  }, [page]);


// function displayPage(initial: boolean){
//   if (initial) return (
//     <div>
//       <WelcomePage />
//       <div id="search">
//         <label className="input-label">
//             <input type="text" name="quote-search" placeholder="Albert Einstein" onKeyDown={(event) => {
//                 console.log(event);
//                 if(event.code === 'Enter'){
//                   console.log("event")
//                   setPage('quote-page');
//                   setIsLoaded(false);

//                 }
//               }
//             } onChange={(e => setSearch(e.target.value))}/>
//             <input type="button" name="submit" value="submit" onClick={(e)=>{setInitial(false)}}/>
//         </label>
//     </div>
// </div>
// )
//   else return(
//   <div>
//     {
//     quotes.map((quote) => (
//         <div className='quote' key={quote.id}>
//             {quote.content}
//         </div>
//     ))
//     }
// </div>)
// }

//   return (
//     <div className="container">
//       <div className="App">
//           {displayPage(initial)}
//       </div>
//     </div>
//   )
// }

