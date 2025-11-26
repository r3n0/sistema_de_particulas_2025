class Estrella {
	constructor() {
		this.posx = random(0, width);
		this.posy = random(0, height);
		this.tam = random(1, 8);
		this.inten = 255;
		this.t = random(1, 100);
		this.vt = random(0.01, 0.2);
	}
	update() {
		this.t += this.vt;
		this.inten = map(noise(this.t), 0.1, 0.9, 0, 255);
	}
	display() {
		noStroke();
		fill(255, this.inten);
		circle(this.posx, this.posy, this.tam);
	}
}
