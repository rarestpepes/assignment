import React, {useContext} from 'react';
import SingleCountry from "./SingleCountry";
import MyContext from "../../context/MyContext";
import {useEffect} from "react";

const AllCountries = () => {

    const {getAllCountries,
        setAllCountries,
        setCountryCount,
        getCountryCount,
        getCurrentPage,
        getCurrentPageCountries,
        setCurrentPageCountries,
    } = useContext(MyContext)

    useEffect(() => {
        fetch("https://restcountries.com/v2/all?fields=name,region,area")
            .then(res => res.json())
            .then(data => {
                setAllCountries(data)
                setCountryCount(data.length)
                setCurrentPageCountries(getAllCountries.slice(1, 10))
                console.log(getAllCountries.slice(0, 10))
            })
    },[])



    return (
        <div className={"p30"}>
            {getCurrentPageCountries && getCurrentPageCountries.map((x, i) => <SingleCountry country={x} key={i}/>)}
        </div>
    );
};

export default AllCountries;