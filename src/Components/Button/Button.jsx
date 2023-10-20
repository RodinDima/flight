import React from "react";

import "./style.css"

const Button = (props) => {
	const { buttonText } = props;
	return <button type="submit">{buttonText}</button>;
};
export default Button;