import { SearchBar } from "../components/SearchBar";
import { RandomQuote } from "../components/RandomQuote";

export const WelcomePage = () =>{
    return (
        <main>
            <h1>Welcome</h1>
            <div className="title"><h1>Quote Search</h1></div>
            <RandomQuote />
        </main>
    );


}