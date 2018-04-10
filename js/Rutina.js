"use strict";
/** funkcija generator Fibonacci brojeva
*
*/

function Fib(x) {
	var a=1, b=1, c, i;

	for (i=2;i<=x;i++) {
		c = b;
		b += a;
		a = c;
	}
	return a;
}

window.onload = function() {
	// kako ne bi bilo treperenja, cijeli sadržaj se dodaje odmah
	var fragment = document.createDocumentFragment(),
		tbody = document.getElementsByTagName('tbody')[0],
		i, trNode, tdText, tdNode, tdNodeFib,tdTextFib;

	for (i=1;i<21;i++) {

		//red tablice
		trNode = document.createElement('tr');
		
		//dodaj redni broj
		tdNode = document.createElement('td');
		tdText = document.createTextNode(i);
		//stvori HTML čvor
		tdNode.appendChild(tdText);
		trNode.appendChild(tdNode);

		//dodaj Fibonacci broj
		tdNodeFib = document.createElement('td');
		tdTextFib = document.createTextNode(Fib(i));
		//stvori HTML čvor
		tdNodeFib.appendChild(tdTextFib);
		trNode.appendChild(tdNodeFib);
		
		// dodaj sve u fragment temp containter
		fragment.appendChild(trNode);
	}

	// dodaj fragment u tijelo tablice
	document.getElementsByTagName('tbody')[0].appendChild(fragment);
}