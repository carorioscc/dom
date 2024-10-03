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
console.log(document.querySelector.(".link-dom").getAttribute("href"));//manera correcta
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
