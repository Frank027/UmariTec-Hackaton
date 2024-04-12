import Vehiculo from "./Vehiculo.js";

export default class Carretera {
    constructor(sentido, numeroVehiculos) {
        this.sentido = sentido;
        this.numeroVehiculos = numeroVehiculos;
        this.autos = [];
    }

    generarVehiculos(velocidadMaxima, canvasWidth, canvasHeight) {
        for (let i = 0; i < this.numeroVehiculos; i++) {
            const velocidad = Math.random() * velocidadMaxima + 1;
            const direccion = this.sentido === 'solo sentido' ? 'derecha' : 'aleatorio';
            const auto = new Vehiculo(velocidad, direccion);
            auto.ancho = 50;
            auto.alto = 30;
            auto.y = canvasHeight / 2 - auto.alto / 2;
            auto.x = direccion === 'derecha' ? -auto.ancho : canvasWidth + auto.ancho;
            this.autos.push(auto);
        }
    }

    dibujarVehiculos(ctx) {
        this.autos.forEach(auto => {
            auto.dibujar(ctx);
        });
    }

    moverVehiculos(canvasWidth) {
        this.autos.forEach(auto => {
            auto.mover(canvasWidth);
        });
    }
}
