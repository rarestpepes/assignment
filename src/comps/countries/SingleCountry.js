import React from 'react';

const SingleCountry = ({country}) => {
    return (
        <div className={"countryComp sp-btw p10"}>
            <div>Country: <span style={{fontWeight: "bold"}}>{country.name}</span></div>
            <div>Region: <span style={{fontWeight: "bold"}}>{country.region}</span></div>
            <div>Area(km^2): <span style={{fontWeight: "bold"}}>{country.area}</span></div>
        </div>
    );
};

export default SingleCountry;