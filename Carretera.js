import Vehiculo from "./Vehiculo.js";

export default class Carretera {
  constructor(sentido, numeroVehiculos) {
    this.sentido = sentido;
    this.numeroVehiculos = numeroVehiculos;
    this.autos = [];
  }

  dibujarCarretera() {
    
  }
  generarVehiculos(velocidadMaxima, canvasWidth, canvasHeight) {
    for (let i = 0; i < this.numeroVehiculos; i++) {
      const velocidad = Math.random() * velocidadMaxima + 1;
      const direccion =
        this.sentido === "solo sentido" ? "derecha" : "aleatorio";
      const auto = new Vehiculo(velocidad, direccion);
      auto.ancho = 50;
      auto.alto = 30;
      auto.y = canvasHeight / 2 - auto.alto / 2;
      auto.x = direccion === "derecha" ? -auto.ancho : canvasWidth + auto.ancho;
      this.autos.push(auto);
      canvasWidth = canvasWidth;
      canvasHeight = canvasHeight;
    }
  }

  dibujarVehiculos(ctx) {
    this.autos.forEach((auto) => {
      auto.dibujar(ctx);
    });
  }
  distancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
  moverVehiculos(canvasWidth, semaforoRojo) {
    this.autos.forEach((auto) => {
      const posXSem = canvas.width / 2;
      const posYSem = canvas.height / 2;
      if (
        !semaforoRojo ||
        this.distancia(
          auto.x + 50 / 2,
          auto.y + 50 / 2,
          posXSem,
          posYSem
        ) > 50
      ) {
        auto.mover(canvasWidth);
      }
    });
  }
}
