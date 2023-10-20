import React from "react";

import "./style.css"

const Title = (props) => {
    const { textTitle } = props
    return (
        <>            
            <h2 className="title">{textTitle}</h2>
        </>
        
    );
};

export default Title;