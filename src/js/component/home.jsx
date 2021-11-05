import React from "react";
import PropTypes from "prop-types";

//include images into your bundle


//create your first component
const Home = () => {
	let contador = 0;
	setInterval(() => {
		const uno = Math.floor(contador);

		console.log(contador);
	}, 1000);

	return (
		<div className="text-center mt-5">
			<SecondsCounter n={contador} />
		</div>
	);
	contador++;
};

export default Home;
