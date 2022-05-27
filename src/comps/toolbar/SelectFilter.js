import React, {useContext, useState} from 'react';
import MyContext from "../../context/MyContext";

const SelectFilter = () => {

    const {getAllCountries,
        setAllCountries,
        setCurrentPageCountries,
        getCurrentPageCountries,
        getPageCount,
        getCountryCount,
        setCountryCount} = useContext(MyContext)

    const [getABCCheck, setABCCheck] = useState(true)
    const [getSmaller, setSmaller] = useState(true)
    const [getOceania, setOceania] = useState(true)

    function abc () {
        setABCCheck(!getABCCheck)
        console.log(getABCCheck)
        if (getABCCheck) {
            setCurrentPageCountries(getAllCountries.sort((a, b) => -1 * a.name.localeCompare(b.name)))
        } else {
            setCurrentPageCountries(getAllCountries.sort((a, b) => -1 * a.name.localeCompare(b.name)))
        }
        return getCurrentPageCountries
    }

    function smaller () {
        setSmaller(!getSmaller)
        if (getSmaller) {
            const ltu = getAllCountries.filter(x => x.name === "Lithuania")
            const ltuArea = ltu[0].area
            console.log(ltu)
            const filteredCountries = getAllCountries.filter(x => x.area < ltuArea)
            setCountryCount(filteredCountries.length)
            setCurrentPageCountries(filteredCountries)
        }

    }

    function oceania () {
        setOceania(!getOceania)
        if (getOceania) {
            const filteredCountries = getAllCountries.filter(x => x.region === "Oceania")
            setCountryCount(filteredCountries.length)
            setCurrentPageCountries(filteredCountries)
        }
    }

    return (
        <div>
                <div className={"d-flex"}>
                    <label htmlFor="check1">Descend alphabetically</label>
                    <div className='d-flex align-items-center justify-content-center'>
                        <input type="checkbox"
                               id="check1"
                               onChange={() => abc()}
                        />
                        <label htmlFor="check1"> </label>
                    </div>
                </div>
                <div className={"d-flex"}>
                    <label htmlFor="check2">Smaller than Lithuania</label>
                    <div className='d-flex align-items-center justify-content-center'>
                        <input type="checkbox"
                               id="check2"
                               onChange={() => smaller()}
                        />
                        <label htmlFor="check2"> </label>
                    </div>
                </div>
                <div className={"d-flex sp-btw"}>
                    <label htmlFor="check3">Oceania region</label>
                    <div className='d-flex align-items-center justify-content-center'>
                        <input type="checkbox"
                               id="check3"
                               onChange={() => oceania()}
                        />
                        <label htmlFor="check3"> </label>
                    </div>
                </div>
        </div>
    );
};

export default SelectFilter;