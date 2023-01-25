import { changePage } from "../App";
import { setSearch } from "./QuotesPage";
import { RandomQuote } from "../components/RandomQuote";

export const WelcomePage = () =>{
    return (
        <div className="container">
            <center><h1>Welcome to <br/>Quote Search</h1></center>
            

                    <label className="input-label">
                        <input type="text" name="quote-search" placeholder="Albert Einstein" onKeyDown={(event) => {
                            console.log(event);
                            if(event.code === 'Enter'){
                            changePage('quotes-page');
                            }
                        }

                } onChange={(e => setSearch(e.target.value))}/>
                <input type="button" name="submit" value="Submit" onClick={(e)=>{changePage('quotes-page')}}/>
            </label>
                <RandomQuote />

        </div>
    );
}