
//* Ejercicio 1
//Una funcion que recibe un texto en camelCase y devuelve el número de palabras y la palabra en snake_case

let prueba1 = "TextoDePruebaUno";
let prueba2 = "OtroTextoDePruebaMas"

ContarPalabras(prueba1);
ContarPalabras(prueba2);

function ContarPalabras (texto){
    let contadorPalabras = 0;
    let snakeCase = '';

    for (const element of texto) {
        if(element == element.toUpperCase()){
            contadorPalabras++;
            if(snakeCase === ''){
                snakeCase += element;
            }else{
                snakeCase += "_"+element;
            }
        }else{
            snakeCase +=element;
        }
    }

    snakeCase = snakeCase.toLowerCase();
    console.log("Numero de palabras= " + contadorPalabras);
    console.log("Texto en SnakeKase= " + snakeCase);
}

//* Ejercicio 2
// Dado un arreglo de tamaño x mostrar las posibles combinaciones del arreglo

const arregloPrueba1 = ['1', '2', '3'];
const arregloPrueba2 = ['a', 'b', 'c', 'd'];

Combinaciones(arregloPrueba1);
Combinaciones(arregloPrueba2);

function Combinaciones(array){
    let combinacionesPosibles = "{[], ";
    console.log("Arreglo: "+ array);

    for(let i=0; i<array.length; i++){//Control del tamaño de la combinación
        
        for(let j=0; j<array.length; j++){//Posición inicial de la combinación
            
            if(j+i<array.length){
                combinacionesPosibles += ", ["
                for(let k=j; k<=(i+j); k++){//Abarcar todos los elementos dentro de la combinación
                    combinacionesPosibles += array[k]+",";
                }
                combinacionesPosibles += "]"
            }
        }
    }
    combinacionesPosibles += "}";
    console.log("Combinaciones posibles: "+combinacionesPosibles);
}


//* Ejercicio 3
/*Obtener los datos del endPoint realizar lo siguiente
//TODO Filtrar por ID par
//TODO Type Vacio = "Programacion Movil"

*/

const fetchData = async() =>{
    
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const json = await response.json();
//        console.log(json)
        return json.results;
    }catch{
        console.log("Ha ocurrido un error")
        return "Error"
    }
}

async function personalizarDatos(){
    let datos = await fetchData();
    let par = datos.filter(personaje => personaje.id % 2 == 0);
    let typed = par.map(personaje => {
        if(personaje.type == ''){
            personaje.type = "Programación Móvil";
        }
        return personaje;
    });
    console.log("Personajes Pares y con ajuste de tipo:")
    console.log(typed);
    return typed;
} 

let personajeFiltrado = [];

async function ajusteFinal (){
    let personajesModif = await personalizarDatos();   
    let listado = []; 

    personajesModif.forEach(personaje => {
        let cantidadEp = personaje.episode.length;
        let cincoEp = cantidadEp>5 ? "Si":"No";
        let character = "Nombre: "+personaje.name+" | Cantidad de Episodios: "+cantidadEp+" | Más de 5 Episodios: "+cincoEp;
        listado.push(character);
    });
    return listado;
}

console.log("Ajuste Final")
console.log(ajusteFinal());



