class Particula {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);

		this.vel = p5.Vector.random2D();
		this.vel.setMag(random(0.5, 2));

		this.tVida = int(random(100, 300));
		this.tVidaInicial = this.tVida;
		this.estaMuerta = false;
		this.diam = random(10, 30);
		this.gravedad = createVector(0, 0.98);

		this.velAngula = random(-0.1, 0.1);

		this.c = color(random(200, 255), random(100, 150), random(0, 255));

		// console.log('Hola, estoy viva');
	}

	update(_estaMoviendo) {
		if (!this.estaMuerta) {
			if (_estaMoviendo) {
				this.vel.add(this.gravedad);
			}
			this.vel.normalize();
			this.vel.setMag(3);
			this.vel.rotate(this.velAngula);
			this.tVida -= 1;
			this.pos.add(this.vel);
		}

		if (this.tVida <= 0 && !this.estaMuerta) {
			// console.log('Uuuups, me morí :(');
			this.estaMuerta = true;
		}
	}
	display(_estaMoviendo) {
		fill(this.c);
		noStroke();

		this.diamFinal = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
		if (_estaMoviendo) {
			circle(this.pos.x, this.pos.y, this.diamFinal);
		}
	}
}
