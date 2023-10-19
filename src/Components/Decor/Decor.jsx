import React from "react";

import "./style.css"

const Decor = (props) => {

	const { spanText } = props;
	return <span className="decor">{spanText}</span>;
};

export default Decor;