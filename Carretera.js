export  default class Carretera {

    constructor(sentido, numeroVehiculos) {
        this.sentido = sentido
        this.numeroVehiculos = numeroVehiculos
    }

    actualizarNumeroVehiculos(numeroVehiculos) {
    }

    contarVehiuclos() {

    }

    dibujarCarretera() {
        let body = document.querySelector("body")
        const carretera = document.createElement("div");
        carretera.className = 'carretera'
        body.appendChild(carretera);
        let line = document.createElement("br");
        line.className = 'line';
        carretera.appendChild(line);
        return body
    }
}