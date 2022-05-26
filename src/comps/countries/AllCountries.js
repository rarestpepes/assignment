import React from 'react';
import SingleCountry from "./SingleCountry";
import {useEffect, useState} from "react";

const AllCountries = () => {

    const [getAllCountries, setAllCountries] = useState(null)

    useEffect(() => {
        fetch("https://restcountries.com/v2/all?fields=name,region,area")
            .then(res => res.json())
            .then(data => {
                setAllCountries(data)
                console.log(getAllCountries[0])
            })
    },[])


    return (
        <div className={"p30"}>
            {getAllCountries && getAllCountries.map((x, i) => <SingleCountry country={x} key={i}/>)}
        </div>
    );
};

export default AllCountries;