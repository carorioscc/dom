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


