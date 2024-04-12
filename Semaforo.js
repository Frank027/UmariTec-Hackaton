export default class Semaforo {
    constructor(tiempoRojo, tiempoVerde) {
        this.tiempoRojo = tiempoRojo;
        this.tiempoVerde = tiempoVerde;
        this.semaforoRojo = true;
    }

    cambiarSemaforo() {
        setTimeout(() => {
            this.semaforoRojo = !this.semaforoRojo;
            this.cambiarSemaforo();
        }, this.semaforoRojo ? this.tiempoRojo : this.tiempoVerde);
    }

    dibujarSemaforo(ctx, posX, posY, radio) {
        ctx.fillStyle = this.semaforoRojo ? 'red' : 'green';
        ctx.beginPath();
        ctx.arc(posX, posY, radio, 0, Math.PI * 2);
        ctx.fill();
    }
}
