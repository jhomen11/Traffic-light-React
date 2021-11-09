import React, { useState } from "react";

export const TrafficLight = () => {
	const [roja, cambiarRoja] = useState("luz_roja");
	const [amarilla, cambiarAmarilla] = useState("luz_amarilla");
	const [verde, cambiarVerde] = useState("luz_verde");

	return (
		<div className="contenedor">
			<div className="semaforo">
				<div
					className={roja}
					onClick={() => {
						if (roja === "luz_roja") {
							cambiarRoja("luz_roja_encendida");
							cambiarVerde("luz_verde");
							cambiarAmarilla("luz_amarilla");
						}
					}}></div>

				<div
					className={amarilla}
					onClick={() => {
						if (amarilla === "luz_amarilla") {
							cambiarAmarilla("luz_amarilla_encendida");
							cambiarRoja("luz_roja");
							cambiarVerde("luz_verde");
						}
					}}></div>
				<div
					className={verde}
					onClick={() => {
						if (verde === "luz_verde") {
							cambiarVerde("luz_verde_encendida");
							cambiarRoja("luz_roja");
							cambiarAmarilla("luz_amarilla");
						}
					}}></div>
			</div>
			<div className="base"></div>
			<div className="base_plana"></div>
		</div>
	);
};

export default TrafficLight;
