import Carretera from "./Carretera.js";

let carretera = new Carretera("solo sentido", 2);

carretera.actualizarNumeroVehiculos(2);
carretera.actualizarNumeroVehiculos(2);


console.log(carretera.dibujarCarretera().childNodes); 
