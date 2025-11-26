let sp = [];
let estaMoviendo = false;
let stopTimer;

let estrellas = [];

function setup() {
	// frameRate(1);
	angleMode(DEGREES);
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);

	for (let i = 0; i < 100; i++) {
		let ne = new Estrella();
		estrellas.push(ne);
	}
}

function draw() {
	background(50, 10, 0, 100);

	if (!estaMoviendo) {
		for (let i = 0; i < sp.length - 1; i++) {
			noFill();
			stroke(255, 0, 0);
			line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
		}
	}

	for (const [index, particula] of sp.entries()) {
		particula.update(estaMoviendo);
		particula.display(estaMoviendo);
		if (particula.estaMuerta) {
			sp.splice(index, 1);
			// console.log('n Partículas: ' + sp.length);
		}
	}

	//Crear partículas cada 5 frames
	if (frameCount % 5 == 0) {
		let np = new Particula(mouseX, mouseY);
		sp.push(np);
	}

	// console.log(estaMoviendo);

	for (e of estrellas) {
		e.update();
		e.display();
	}
}

function mouseClicked() {
	let np = new Particula(mouseX, mouseY);
	sp.push(np);

	// console.log('n Partículas: ' + sp.length);
}

function mouseMoved() {
	estaMoviendo = true;

	clearTimeout(stopTimer);

	stopTimer = setTimeout(() => {
		estaMoviendo = false;
	}, 100);
}
