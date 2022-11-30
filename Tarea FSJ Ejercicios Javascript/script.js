// Event listener en el cuerpo del documento
const tarea = document.getElementById('tarea')
tarea.addEventListener('click', detectorDeEjercicio)


/** Toma el id del elemento que activó el evento y
 *  hace un switch para llamar a la función correspondiente */
function detectorDeEjercicio(event){

    event.preventDefault();
    const elementId = event.target.id;

    switch(elementId) {
        case 'botonEjercicio1':
            realizarEjercicio1()
            break;
        case 'botonEjercicio2':
            realizarEjercicio2()
            break;
        case 'botonEjercicio3':
            realizarEjercicio3()
            break;
        case 'botonEjercicio4':
            realizarEjercicio4()
            break;
    }   
}

//Ejercicio 1
function realizarEjercicio1(){

    const ejercicio1Numero = document.getElementById('numeroEntero'); 
    const ejercicio1Respuesta = document.getElementById('resultadoEjercicio1');
    
    if(ejercicio1Numero.value.length === 3){
        ejercicio1Respuesta.textContent = 'Este SI es un entero de tres digitos';
    } else {
        ejercicio1Respuesta.textContent = 'Este NO es un entero de tres digitos';
    }
}

//Ejercicio 2
function realizarEjercicio2(){

    const ejercicio2Numero = parseFloat(document.getElementById('precioImpuesto').value);
    const ejercicio2Respuesta = document.getElementById('resultadoEjercicio2');

    if(isNaN(ejercicio2Numero)){
        ejercicio2Respuesta.textContent = "Por favor ingrese un precio valido."
        return
    } else {
        const resultado = realizarEjercicio2Helper(ejercicio2Numero);
        ejercicio2Respuesta.textContent = `Su precio final es de $${resultado[0]} con ${resultado[1]}% de impuestos.`
    }

}

function realizarEjercicio2Helper(numero){
    if (numero <= 20){
        return [numero, 0];
    } else if(numero > 20 && numero <= 40) {
        return [(numero*1.30).toFixed(2), 30];
    } else if (numero > 40 && numero <= 500) {
        return [(numero*1.40).toFixed(2), 40];
    } else if (numero > 500) {
        return [(numero*1.50).toFixed(2), 50]
    }
}

//Ejercicio 3
function realizarEjercicio3(){

    const ejercicio3Area = document.getElementById('codigoArea');
    const ejercicio3Minutos = parseInt(document.getElementById('cantidadMinutos').value);
    const ejercicio3Respuesta = document.getElementById('resultadoEjercicio3');

    let costo = 0;

    switch(ejercicio3Area.value){
        case '12':
            costo = 2 * ejercicio3Minutos;
            break;
        case '15':
            costo = 2.20 * ejercicio3Minutos;
            break;
        case '18':
            costo = 4.50 * ejercicio3Minutos;
            break;
        case '19':
            costo = 3.50 * ejercicio3Minutos;
            break;
        case '23':
            costo = 6 * ejercicio3Minutos;
            break;
        case '25':
            costo = 6 * ejercicio3Minutos;
            break;
        case '29':
            costo = 5 * ejercicio3Minutos;
            break;
        }

    if (ejercicio3Minutos < 30){
        costo = costo - costo*0.10
        ejercicio3Respuesta.textContent = `Su costo es de $${costo} con el 10% de descuento.`
    } else {
        ejercicio3Respuesta.textContent = `Su costo es de $${costo} sin descuento.`;
    }
}

//Ejercicio 4
function realizarEjercicio4(){
    const numeroParaMultiplicar = parseFloat(document.getElementById('numeroMultiplicar').value);
    const ejercicio4Respuesta = document.getElementById('resultadoEjercicio4');

    if(isNaN(numeroParaMultiplicar)){
        ejercicio4Respuesta.textContent  = "Por favor ingrese un numero."
    } else {
        ejercicio4Respuesta.innerHTML = ''
        for(let i = 1; i<=10; i++){
            let para = document.createElement('p')
            para.textContent = `${numeroParaMultiplicar} \* ${i} = ` + numeroParaMultiplicar * i;
            ejercicio4Respuesta.appendChild(para);
        }
    }
}



