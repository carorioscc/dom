//manera de campurar los elemnetos:
//nombre de etiqueta ej <li>, <p>, //devuelve una coleccion
console.log(document.getElementsByTagName("li"))
//por clase, //devuelve una coleccion
console.log(document.getElementsByClassName("card"))
//en formulario es importanbte ponerle name, por name
console.log(document.getElementsByName("nombre"))
//por identificador, estos son unicos los id, este se usa mucho
console.log(document.getElementById("menu"))
//consulta de selector css, con #, es mas lento, y trae el primer selector que encuentre en la vista #->para que ubique con id
console.log(document.querySelector("#menu"))
//consulta de selector css .->para clase
console.log(document.querySelector(".card"))
//para traer todos los selectores de ese tipo, este puede remplazar los tres primeros : getElementsByTagName, getElementsByClassName ,getElementsByName
//este se usa mucho
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)
//se le puede agregar un foreach, recorrer, si se quiere hacer algo con alguna de todas las propiedades
document.querySelectorAll("a").forEach(el=>console.log(el))
//por posicion o en especifico
console.log(document.querySelectorAll(".card")[2])
//especificamente y para todos
console.log(document.querySelectorAll("#menu li"))


///clase DOM: Atributos y Data-Attributes

//acceder a algun elemento del document
console.log(docuement.documentElement.lang);
console.log(docuement.documentElement.getAttribute("lang"));
//trae la url del enlace con esa clase
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));//manera correcta
//establecer un nuevo valor de los atributos:
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
//con setAttribute
document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
//se puede establecer valores que no tengan :) ej que el enlace abra en otra ventana
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener")
$linkDOM.setAttribute("href", "www.google.com");
//hasAttribute ->tiene el atributo valida
console.log($linkDOM.hasAttribute("rel")); //devuelve true
$linkDOM.removeAttribute("rel", "noopener")

//Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description)//obtiene la propiedad  de descripcion
$linkDOM.setAttribute("data-description", "Modelo de Objeto del documento")
console.log($linkDOM.dataset.description);
//otra manera de asignarle descripcion 
$linkDOM.dataset.description = "Suscribete a mi canal";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));


// DOM: Estilos y Variables CSS
//seguimos utilizando la variable linkdom
console.log($linkDOM.style)//muetsra un map con todos las propiedades que se pueden aplicar propiedades css
console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style.backgroundColor) //ver una en especifica
console.log($linkDOM.style.color)
//obtener las propiedades dinamicas del css
console.log(window.getComputedStyle($linkDOM))
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //obtiene el estilo qu le indiques
//establecer valores
$linkDOM.setProperty("text-decoration", "none")
$linkDOM.setProperty("display", "block")
//ejemplos
$linkDOM.style.width = '50%';
$linkDOM.style.textAlign ="center";
$linkDOM.style.marginLeft ="auto";
$linkDOM.style.marginRight ="auto";
$linkDOM.style.padding ="1rem";
$linkDOM.style.borderRadius =".5rem";

console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log(getComputedStyle($linkDOM));

// min 20

//variables css-custom properties -propiedades dinamicas de css
const $html = document.documentElement, $body =document.body;

let varDarkColr = getComputedStyle($html).getPropertyValue("--dark-color")

let varYellowColr = getComputedStyle($html).getPropertyValue("--yellow-color")

//saber las variables
console.log(varDarkColr, varYellowColr)
//acceder a las variables
$body.style.backgroundColor = varDarkColr;
$body.style.color = varYellowColr
//asignarle a otra propiedad 
$html.style.setProperty("--dark-color", "#000")
varDarkColr = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("backgroundColor", varDarkColr)

//DOM: Clases CSS 


const $card = document.querySelector(".card");
//la cadena de texto nombre de la clase
console.log($card.className)
//devuelve un domtokenlist 
console.log($card.classList)
//indica si esta la clase true o false
console.log($card.classList.contains("rotate-45"))
//agrega a la clase
$card.classList.add("rotate-45")
//quitar clase
$card.classList.remove("rotate-45")
//le permite al usuario cambiar una opción a prendida o apagada
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"))

//para remplazar
console.log($card.classList.replace("rotate-45", "rotate-135"))
//intercambiar varias clases
$card.classList.add("opacity-80", "sepia")
//borrar varias clases
$card.classList.remove("opacity-80", "sepia")
//
$card.classList.toggle("opacity-80", "sepia")

//DOM Traversing: Recorriendo el DOM 
const $cards = document.querySelector(".cards")
console.log($cards);
//referencia a sus hijos etiquetas
console.log($cards.children);
console.log($cards.children[2]);
//elemento padre
console.log($cards.parentElement)
console.log($cards.parentNode)
//nodos
console.log($cards.firstElementChild)
console.log($cards.lastElementChild)
//acceder a eementos hermanos de laldo
console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)
//busca ancestro , el padre mas cercano
console.log($cards.closest("div"))
console.log($cards.closest("body"))
console.log($cards.children[3].closest("section"))


//DOM: Creando Elementos y Fragmentos
//crea etiquetas html
const $figure = document.createElement("figure"), 
$img = document.createElement("img"), 
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure");

//incorporaralas al dom
//agregar un hijo
$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "animals")
$figure.classList.add("card") //agregar estilos
$figcaption.appendChild($figcaptionText)
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure)


$figure2.innerHTML = '<img src= "https://placeimg.com/200/200/animals" alt ="people"> <figcaption>People </figcaption>';

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["primavera", "verano", "otoño", "invierno"],
$ul = document.createElement['ul'];

document.write("<h3>Estaciones del año</h3");
document.body.appendChild($ul);

estaciones.forEach(el=>{
	const $li = document.createElement("li");
	$li.textContent = el;
	$ul.appendChild($li);
});

const continentes = ["africa", "america", "oceania", "europa", "asia"], $ul2 = document.createElement("ul");

document.write("<h3>Continentes del muncdo</h3");
document.body.appendChild($ul2);

$ul2.innerHTML ="";
continentes.forEach((el) => ($ul2.innerHTML += '<li>${el}</li>'));
//en fragmento ayuda a mejorar el rendimiento
const meses = [
	"enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
],
$ul3.document.createElement("ul"), $fragment = document.createDocumentFragment();
meses.forEach(el => {
	const $li = document.createElement("li");
	$li.textContent = el;
	$fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);


//DOM: Templates HTML

const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragmento = document.createElement.createDocumentFragment(),
//cada tarjeta es un obj
cardContent = [
	{
		title : "Tecnologia",
		img: "https://placeimg.com/200/200/tech"
	},
	{
		title : "Animales",
		img: "https://placeimg.com/200/200/animals"
	},
	{
		title : "Arquitectura",
		img: "https://placeimg.com/200/200/arch"
	},
	{
		title : "Gente",
		img: "https://placeimg.com/200/200/people"
	},
	{
		title : "Naturaleza",
		img: "https://placeimg.com/200/200/animals"
	}
];
//se agregan las propiedades de los objetos, se asignan atributos
cardContent.forEach(el=>{
	$template.querySelector("img").setAttribute("src", el.img);
	$template.querySelector("img").setAttribute("alt", el.title);
	$template.querySelector("figcaption").textContent = el.title;

	//clonar algun elemento, true que copia toda la estructura interna
	let $clone =document.importNode($template, true);
	fragment.appendChild($clone)

});

$cards.appendChild($fragment)

//DOM: Modificando Elementos (Old Style)


