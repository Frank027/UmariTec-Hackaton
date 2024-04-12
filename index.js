import Carretera from "./Carretera.js";
import Semaforo from "./Semaforo.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const carretera = new Carretera("solo sentido", 5);
const semaforo = new Semaforo(2000, 5000);

carretera.generarVehiculos(3, canvas.width, canvas.height);
semaforo.cambiarSemaforo();

function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    carretera.dibujarVehiculos(ctx);
    semaforo.dibujarSemaforo(ctx, canvas.width / 2, canvas.height / 2, 20);
    carretera.moverVehiculos(canvas.width, semaforo.semaforoRojo);
    requestAnimationFrame(dibujar);
}

dibujar();
