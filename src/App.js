import './App.css';
import AllCountries from "./comps/countries/AllCountries";
import Toolbar from "./comps/toolbar/Toolbar";
import Pagination from "./comps/pagination/Pagination";

import MyContext from "./context/MyContext";
import {useState} from "react";

function App() {

    const [getAllCountries, setAllCountries] = useState(null)
    const [getCountryCount, setCountryCount] = useState(null)
    const [getCurrentPage, setCurrentPage] = useState(1)
    const [getCurrentPageCountries, setCurrentPageCountries] = useState(null)
    const [getPageCount, setPageCount] = useState([])

    return (
        <div className="App">

            <MyContext.Provider value={{
                getCountryCount,
                setCountryCount,
                getAllCountries,
                setAllCountries,
                getCurrentPage,
                setCurrentPage,
                getCurrentPageCountries,
                setCurrentPageCountries,
                getPageCount,
                setPageCount
            }}>
                <Toolbar/>
                {getCountryCount > 10 && <Pagination countryCount={getCountryCount}/>}
                <AllCountries/>
            </MyContext.Provider>
        </div>
    );
}

export default App;
