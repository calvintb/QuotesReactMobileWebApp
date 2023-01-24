import { pageName, setPageName } from "../App";
import { search, setSearch } from "./QuotesPage";
import { RandomQuote } from "../components/RandomQuote";

export const WelcomePage = () =>{
    return (
        <div>
            <h1>Welcome</h1>
            <div className="title"><h1>Quote Search</h1></div>
                <div id="search">
                    <label className="input-label">
                        <input type="text" name="quote-search" placeholder="Albert Einstein" onKeyDown={(event) => {
                            console.log(event);
                            if(event.code === 'Enter'){
                            setPageName('quote-page');
                            }
                        }

             } onChange={(e => setSearch(e.target.value))}/>
             <input type="button" name="submit" value="submit" onClick={(e)=>{setPageName('quotes-page')}}/>
         </label>
    </div>
            <RandomQuote />
            
        </div>
    );
}