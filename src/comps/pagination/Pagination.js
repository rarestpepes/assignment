import React, {useContext} from 'react';
import MyContext from "../../context/MyContext";

const Pagination = ({countryCount}) => {

    const {getCurrentPage,
        setCurrentPage,
        setCurrentPageCountries,
        getAllCountries
    } = useContext(MyContext)

    let pageCount = []

    for (let i = 1; i <= Math.ceil(countryCount/10); i++) {
        pageCount.push(i)
    }

    function setPage (x) {
        setCurrentPage(x)
        setCurrentPageCountries(getAllCountries.slice((x - 1) * 10, x * 10))
    }

    return (
        <div className={"d-flex w100 "}>
            {pageCount.map((x,i) =>
                <div key={i}
                     onClick={() => setPage(x)}
                     className={"pgnBtn"}
                     style={{background: getCurrentPage === x && "green"}}>{x}</div>)
            }
        </div>
    );
};

export default Pagination;