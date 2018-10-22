var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d');
var areah = canvas.height;
var areaw = canvas.width;
var vy = 0;
var vr = 270;
var saltando = false;
var salto = 18;
var ganaste = crearTM("ganaste") 
var gravedad = 2;
var bucle;
var puntos = 0;
var perdiste = crearTM("perdiste");
var ju1 = crearTMIP("Coloque el nombre de Jugador");
var reglas = crearTM("El que logre menos puntos gana,Esquiva los barriles,Consigue la llave");
var vidas = 3;
var nivel = 0;
var ju;
var boom = 2;
var nan = 1;
var bloquea = {
	x : 100,
	y : 190,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 5,
	img : document.createElement('img')
};
var bloqueb = {
	x : 0,
	y : 100,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 5,
	img : document.createElement('img')
};
var escaleraa = {
	x : 85,
	y : 190,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 5,
	img : document.createElement('img')
};
var escalerab = {
	x : 500,
	y : 100,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 5,
	img : document.createElement('img')
};
var barrila = {
	x : 100,
	y : 70,
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 3,
	img : document.createElement('img')
};
var barrilb = {
	x : 100,
	y : 70,
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 3,
	img : document.createElement('img')
};
var barrilc = {
	x : 100,
	y : 70,
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 3,
	img : document.createElement('img')
};
var barrild = {
	x : 100,
	y : 70,
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 3,
	img : document.createElement('img')
};
var barrile = {
	x : 100,
	y : 70,
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 3,
	img : document.createElement('img')
};
var enemigo = {
	x : 20,
	y : 15,
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 5,
	img : document.createElement('img')
};
var llave = {
	x : 150,
	y : 10,
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 5,
	img : document.createElement('img')
};
var muneco = {
	x : 540,
	y : 270,
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 4,
	img : document.createElement('img')
};
var ba = setInterval(function() {
	barrila.izquierda = true;
} ,2000);
var bb = setInterval(function() {
	barrilb.izquierda = true;
} ,5000);
var bc = setInterval(function() {
	barrilc.izquierda = true;
} ,7000);
var bd = setInterval(function() {
	barrild.izquierda = true;
} ,10000);
var be = setInterval(function() {
	barrile.izquierda = true;
} ,12000);
muneco.img.src = 'img/jugador.png';
barrila.img.src = 'img/barril.png';
barrilb.img.src = 'img/barril.png';
barrilc.img.src = 'img/barril.png';
barrild.img.src = 'img/barril.png';
barrile.img.src = 'img/barril.png';
bloquea.img.src = 'img/Block.png';
bloqueb.img.src = 'img/Block.png';
escaleraa.img.src = 'img/Escaler.png';
escalerab.img.src = 'img/Escaler.png';
enemigo.img.src = 'img/Enemigo.png';
llave.img.src = 'img/Llave.png';
//clases
class Informacion {
	constructor() {
		
	}
	dibujar() {
		ctx.fillStyle = 'black';
		ctx.font = "18px Arial";
		ctx.fillText("El jugador es: "+ju, 10, 15);
		ctx.fillText("Puntos: "+puntos, 320, 15);
		ctx.fillText("Vidas: "+vidas, 500, 15);
	}
}
//objetos
var info = new Informacion();
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 38) {
		saltar();
	}
	if (event.keyCode == 39) {
		muneco.izquierda = true;
	}	
	if (event.keyCode == 37) {
		muneco.derecha = true;
	}
	if (event.keyCode == 88) {
		console.log("x" +muneco.x);
	}
	if (event.keyCode == 90) {
		console.log("y" +muneco.y);
	}
});
document.addEventListener("keyup", function(event) {
	if (event.keyCode == 38) {
		muneco.arriba = false;
	}
	if (event.keyCode == 39) {
		muneco.izquierda = false;
	}
	if (event.keyCode == 37) {
		muneco.derecha = false;
	}
});
//funciones
function velocidadA(num1, num2) {
	return Math.random() * num2 + num1;
}
function saltar() {
	saltando = true;
	vy = salto;
}
function gravedada() {
	if (saltando == true) {
		if (muneco.y > vr) {
			saltando = false;
			vy = 0;
			muneco.y = vr;
		} else {
			vy -= gravedad;
			muneco.y -= vy;
		}
	}
}
function crearTM(msj) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var t = document.createTextNode(msj); 
	f.appendChild(m);
	m.appendChild(t);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var x = document.createTextNode("X");
	cerrar.appendChild(x);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}

function crearTMIP(text, nombre) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var inp = document.createElement('input'); 
	var t = document.createTextNode(text);
	inp.type = text;
	inp.id = nombre;
	inp.name = nombre;
	f.appendChild(m);
	m.appendChild(inp);
	m.appendChild(t);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var e = document.createTextNode("Enviar");
	cerrar.appendChild(e);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
		if (inp.value == false) {
			ju = "Predeterminado";
		} else {
			ju = inp.value;
		}
		frame();
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}
function mostrarM(obj) {
	obj.style.visibility = "visible";
}
function Fin() {
	var puntosV = crearTM("Tu puntuacion es: "+puntos);
	mostrarM(perdiste);
	mostrarM(puntosV);
	setInterval(function() {
		document.location.reload();
	} ,3000)
}
function PerderV() {
	if (vidas > 0) {
		vidas = vidas - 1;
	} else {
		Fin();
	}
}
function moverBA() {
	if (barrila.izquierda && barrila.x < canvas.width - 40) {
		barrila.x += barrila.velocidad;
	}
	if (barrila.derecha && barrila.x > 0) {
		barrila.x -= barrila.velocidad;
	}
	if (barrilb.izquierda && barrilb.x < canvas.width - 40) {
		barrilb.x += barrilb.velocidad;
	}
	if (barrilb.derecha && barrilb.x > 0) {
		barrilb.x -= barrilb.velocidad;
	}
	if (barrilc.izquierda && barrilc.x < canvas.width - 40) {
		barrilc.x += barrilc.velocidad;
	}
	if (barrilc.derecha && barrilc.x > 0) {
		barrilc.x -= barrilc.velocidad;
	}
	if (barrild.izquierda && barrild.x < canvas.width - 40) {
		barrild.x += barrild.velocidad;
	}
	if (barrild.derecha && barrild.x > 0) {
		barrild.x -= barrild.velocidad;
	}
	if (barrile.izquierda && barrile.x < canvas.width - 40) {
		barrile.x += barrile.velocidad;
	}
	if (barrile.derecha && barrile.x > 0) {
		barrile.x -= barrile.velocidad;
	}
}
function moverEN() {
	var ti = setInterval(function() {
		enemigo.x = 30;
	} ,3000);
	var te = setInterval(function() {
		enemigo.x = 10;
	} ,4000);
}
function moverM() {
	if (muneco.izquierda && muneco.x < canvas.width - 40) {
		muneco.x += muneco.velocidad;
	}
	if (muneco.derecha && muneco.x > 0) {
		muneco.x -= muneco.velocidad;
	} 
	if (muneco.arriba && muneco.y > 0) {

	}
}
function dibujarL() {
	ctx.drawImage(llave.img, llave.x, llave.y);
}
function dibujarBA() {
	ctx.drawImage(barrila.img, barrila.x, barrila.y);
	ctx.drawImage(barrilb.img, barrilb.x, barrilb.y);
	ctx.drawImage(barrilc.img, barrilc.x, barrilc.y);
	ctx.drawImage(barrild.img, barrild.x, barrild.y);
	ctx.drawImage(barrile.img, barrile.x, barrile.y);
}
function dibujarEN() {
	ctx.drawImage(enemigo.img, enemigo.x, enemigo.y);
}
function dibujarB() {
	ctx.drawImage(bloquea.img, bloquea.x, bloquea.y);
	ctx.drawImage(bloqueb.img, bloqueb.x, bloqueb.y);
}
function dibujarE() {
	ctx.drawImage(escaleraa.img, escaleraa.x, escaleraa.y);
	ctx.drawImage(escalerab.img, escalerab.x, escalerab.y);
} 
function dibujarM() {
	ctx.drawImage(muneco.img, muneco.x, muneco.y, muneco.ancho, muneco.alto);
}
function actualizar() {
	moverM();
	moverEN();
	moverBA();
}
function colisiones() {
	//escaleras arriba
	if (muneco.y == 270 && muneco.x > 42 && muneco.x < 98) {
		vr = 165;
		muneco.arriba = true
		muneco.x = 120;
		muneco.y = 165;
		muneco.arriba = false;
		puntos = puntos + 5;
	}
	if (muneco.y == 165 && muneco.x > 459 && muneco.x < 515) {
		vr = 74;
		muneco.arriba = true;
		muneco.y = 74;
		muneco.x = 420;
		muneco.arriba = false;
		puntos = puntos + 5;
	}
	///escalera abajo
	if (muneco.y == 165 && muneco.x > 42 && muneco.x < 98) {
		vr = 270;
		muneco.abajo = true;
		muneco.x = 99;
		muneco.y = 270;
		muneco.abajo = false;
	}
	if (muneco.y == 74 && muneco.x > 459 && muneco.x < 515) {
		vr = 165;
		muneco.abajo = true;
		muneco.y = 165;
		muneco.x = 440;
		muneco.abajo = false;
	}
	//barriles
	if (barrila.x > 484 && barrila.y == 70) {
		clearInterval(ba);
		barrila.izquierda = false;
		barrila.y = 162;
		barrila.x = 500;
		barrila.derecha = true;
	}
	if (barrila.x < 70 && barrila.y == 162) {
		barrila.izquierda = true;
		barrila.derecha = false;
		barrila.y = 270;
		barrila.x = 0;
	}
	if (barrilb.x > 484 && barrilb.y == 70) {
		clearInterval(bb);
		barrilb.izquierda = false;
		barrilb.y = 162;
		barrilb.x = 500;
		barrilb.derecha = true;
	}
	if (barrilb.x < 70 && barrilb.y == 162) {
		barrilb.izquierda = true;
		barrilb.derecha = false;
		barrilb.y = 270;
		barrilb.x = 0;
	}
	if (barrilc.x > 484 && barrilc.y == 70) {
		clearInterval(bc);
		barrilc.izquierda = false;
		barrilc.y = 162;
		barrilc.x = 500;
		barrilc.derecha = true;
	}
	if (barrilc.x < 70 && barrilc.y == 162) {
		barrilc.izquierda = true;
		barrilc.derecha = false;
		barrilc.y = 270;
		barrilc.x = 0;
	}
	if (barrild.x > 484 && barrild.y == 70) {
		clearInterval(bd);
		barrild.izquierda = false;
		barrild.y = 162;
		barrild.x = 500;
		barrild.derecha = true;
	}
	if (barrild.x < 70 && barrild.y == 162) {
		barrild.izquierda = true;
		barrild.derecha = false;
		barrild.y = 270;
		barrild.x = 0;
	}
	if (barrile.x > 484 && barrile.y == 70) {
		clearInterval(be);
		barrile.izquierda = false;
		barrile.y = 162;
		barrile.x = 500;
		barrile.derecha = true;
	}
	if (barrile.x < 70 && barrile.y == 162) {
		barrile.izquierda = true;
		barrile.derecha = false;
		barrile.y = 270;
		barrile.x = 0;
	}
	if (barrila.y == 270 && barrila.x > 530) {
		barrila.y = 70;
		barrila.x = 100;
	}
	if (barrilb.y == 270 && barrilb.x > 530) {
		barrilb.y = 70;
		barrilb.x = 100;
	}
	if (barrilc.y == 270 && barrilc.x > 530) {
		barrilc.y = 70;
		barrilc.x = 100;
	}
	if (barrild.y == 270 && barrild.x > 530) {
		barrild.y = 70;
		barrild.x = 100;
	}
	if (barrile.y == 270 && barrile.x > 530) {
		barrile.y = 70;
		barrile.x = 100;
	}
	if (barrila.y  == 270 && muneco.y == 270 && barrila.x > muneco.x-20 && barrila.x < muneco.x+20) {
		barrila.x = 100;
		barrila.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrila.derecha = false;
		barrila.izquierda = false;
		barrila.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrila.y  == 162 && muneco.y == 165 && barrila.x > muneco.x-20 && barrila.x < muneco.x+20) {
		barrila.x = 100;
		barrila.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrila.derecha = false;
		barrila.izquierda = false;
		barrila.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrila.y == 70 && muneco.y == 74 && barrila.x > muneco.x-20 && barrila.x < muneco.x+20) {
		barrila.x = 100;
		barrila.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrila.derecha = false;
		barrila.izquierda = false;
		barrila.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrilb.y  == 270 && muneco.y == 270 && barrilb.x > muneco.x-20 && barrilb.x < muneco.x+20) {
		barrilb.x = 100;
		barrilb.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrilb.derecha = false;
		barrilb.izquierda = false;
		barrilb.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrilb.y  == 162 && muneco.y == 165 && barrilb.x > muneco.x-20 && barrilb.x < muneco.x+20) {
		barrilb.x = 100;
		barrilb.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrilb.derecha = false;
		barrilb.izquierda = false;
		barrilb.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrilb.y == 70 && muneco.y == 74 && barrilb.x > muneco.x-20 && barrilb.x < muneco.x+20) {
		barrilb.x = 100;
		barrilb.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrilb.derecha = false;
		barrilb.izquierda = false;
		barrilb.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrilc.y  == 270 && muneco.y == 270 && barrilc.x > muneco.x-20 && barrilc.x < muneco.x+20) {
		barrilc.x = 100;
		barrilc.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrilc.derecha = false;
		barrilc.izquierda = false;
		barrilc.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrilc.y  == 162 && muneco.y == 165 && barrilc.x > muneco.x-20 && barrilc.x < muneco.x+20) {
		barrilc.x = 100;
		barrilc.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrilc.derecha = false;
		barrilc.izquierda = false;
		barrilc.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrilc.y == 70 && muneco.y == 74 && barrilc.x > muneco.x-20 && barrilc.x < muneco.x+20) {
		barrilc.x = 100;
		barrilc.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrilc.derecha = false;
		barrilc.izquierda = false;
		barrilc.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrild.y  == 270 && muneco.y == 270 && barrild.x > muneco.x-20 && barrild.x < muneco.x+20) {
		barrild.x = 100;
		barrild.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrild.derecha = false;
		barrild.izquierda = false;
		barrild.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrild.y  == 162 && muneco.y == 165 && barrild.x > muneco.x-20 && barrild.x < muneco.x+20) {
		barrild.x = 100;
		barrild.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrild.derecha = false;
		barrild.izquierda = false;
		barrild.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrild.y == 70 && muneco.y == 74 && barrild.x > muneco.x-20 && barrild.x < muneco.x+20) {
		barrild.x = 100;
		barrild.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrild.derecha = false;
		barrild.izquierda = false;
		barrild.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrile.y  == 270 && muneco.y == 270 && barrile.x > muneco.x-20 && barrile.x < muneco.x+20) {
		barrile.x = 100;
		barrile.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrile.derecha = false;
		barrile.izquierda = false;
		barrile.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrile.y  == 162 && muneco.y == 165 && barrile.x > muneco.x-20 && barrile.x < muneco.x+20) {
		barrile.x = 100;
		barrile.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrile.derecha = false;
		barrile.izquierda = false;
		barrile.izquierda = true;
		vr = 270;
		PerderV();
	}
	if (barrile.y == 70 && muneco.y == 74 && barrile.x > muneco.x-20 && barrile.x < muneco.x+20) {
		barrile.x = 100;
		barrile.y = 70;
		muneco.y = 270;
		muneco.x = 540;
		barrile.derecha = false;
		barrile.izquierda = false;
		barrile.izquierda = true;
		vr = 270;
		PerderV();
	} 
	//muros
	if (muneco.y == 165 && muneco.x < 70) {
		muneco.x = 75;
	}
	if (muneco.y == 74 && muneco.x > 484) {
		muneco.x = 482;
	}
	//llave
	if (muneco.x <= llave.x && muneco.y <= llave.y) {
		mostrarM(ganaste);
		mostrarM(puntosV);
		setInterval(function() {
			document.location.reload();
		} ,2000);
	}
}
function dibujar() {
	ctx.clearRect(0,0,areaw, areah);
	dibujarM();
	dibujarL();
	dibujarB();
	dibujarE();
	dibujarBA();
	dibujarEN();
	info.dibujar();
}
function frame() {
	actualizar();
	colisiones();
	dibujar();
	gravedada();
	bucle = requestAnimationFrame(frame);
}
function iniciar() {
	var modal = document.getElementById('modal');
	modal.style.display = 'none';
	mostrarM(reglas);
	mostrarM(ju1); 
}