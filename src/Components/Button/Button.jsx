import React from "react";

import "./style.css"

const Button = (props) => {
	const { buttonText } = props;
	return <button>{buttonText}</button>;
};
export default Button;