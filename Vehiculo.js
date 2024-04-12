export default class Vehiculo {
    constructor(velocidad, direccion) {
        this.velocidad = velocidad;
        this.direccion = direccion;
        this.x = 0;
        this.y = 0;
    }

    mover(canvasWidth) {
        if (this.direccion === 'derecha') {
            this.x += this.velocidad;
            if (this.x > canvasWidth) {
                this.x = -this.ancho;
            }
        }
        // Agregar lógica para otras direcciones si es necesario
    }

    dibujar(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    }
}
