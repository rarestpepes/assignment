import React from 'react';
import SelectFilter from "./SelectFilter";
import Search from "./Search";

const Toolbar = () => {
    return (
        <div className={"d-flex"}>
            <SelectFilter/>
            <Search/>
        </div>
    );
};

export default Toolbar;