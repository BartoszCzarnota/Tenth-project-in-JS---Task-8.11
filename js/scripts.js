// plik scripts.js

var list = document.getElementById('list');
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var number = document.getElementsByTagName('li');
	console.log(number);

	list.innerHTML += '<li>item ' + number.length + '</li>';

})