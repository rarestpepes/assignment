import React from 'react';
import SelectFilter from "./SelectFilter";

const Toolbar = () => {
    return (
        <div className={"d-flex p10"}>
            <SelectFilter/>
        </div>
    );
};

export default Toolbar;