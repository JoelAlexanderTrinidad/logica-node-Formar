
function range_vision(N){

    const Nstring = N.toString()
    
    if(N < 0 ){
        return "You cannot enter negative numbers, try again"
    }else if(!Nstring.includes('1')){
        return "The number entered should contain the number 1, try again"
    }

    const visionValues = verifyVision(N)
    const numberOneVisionValue = getOneValue(N, visionValues)

    console.log(visionValues)
    console.log(numberOneVisionValue)

    let less = true;
    for (let i = 0; i < visionValues.length; i++) {
        if (visionValues[i] < numberOneVisionValue) {
            less = false;
          break;
        }
      }
    return less
}

function verifyVision(N){
    const Nstring = N.toString()
    let visionValues = []

    for (let i=0; i < Nstring.length; i++) {
        let visionLeft = 0
        let visionRight = 0
        let total = 0

        const index = +Nstring[i];
        let c = i - 1;

        for (let j = index; j >= 1 && c >= 0; j--) {
            visionLeft += +Nstring[c]
            c--;
        }

        c = i ;
        for (let j = 0; j < Nstring.length -1 && j < +Nstring[i] && j < Nstring.length - i -1; j++) {
            visionRight += +Nstring[c+1]
            c++
        }

        visionValues.push(total = visionLeft + visionRight)
    }
    return visionValues
}

function getOneValue(N, visionValues){
    const Nstring = N.toString()
    const onePosition = Array.from(Nstring).map(number => number === '1')

    let numberOneVisionValue = []
    for (let i = 0; i < onePosition.length; i++) {
        if (onePosition[i]) {
            numberOneVisionValue.push(Array.from(visionValues)[i]);
        }
    }
    return numberOneVisionValue

}

range_vision(34315)
console.log(range_vision(34315))

// Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización 
// más bajo de todos los dígitos del entero. La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo 
// en el número dado, false de lo contrario.

// *
// Imagine un número entero no negativo, digamos 34315. Cada dígito en el número entero tiene un llamado rango de visión. 
// El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, puede 3 "ver" 3 dígitos a cada lado de sí mismo. 
// En nuestro ejemplo, puede mirar a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. 
// El rango de visión de cada dígito es su propio valor.

// Ahora bien, el rango de visión de un dígito define el llamado valor de visión, que es la suma de los dígitos dentro del rango de visión. 
// Entonces, el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 4 el valor de visión es 3+3+1+5=12.

// Ejemplos:

// Para el número 34315:

// Dígito: 3
// Puede ver a la izquierda: -
// Puede ver a la derecha: 431
// Valor de la visión:4 + 3 + 1 = 8

// Dígito: 4
// Se puede ver a la izquierda: 3
// Se puede ver a la derecha: 315
// Valor de la visión:3 + 3 + 1 + 5 = 12

// Dígito: 3
// Puede ver a la izquierda: 34
// Puede ver a la derecha: 15
// Valor de la visión:3 + 4 + 1 + 5 = 13

// Dígito: 1
// Se puede ver a la izquierda: 3
// Se puede ver a la derecha: 5
// Valor de la visión:3 + 5 = 8

// Dígito: 5
// Puede ver a la izquierda: 3431
// Puede ver a la derecha: -
// valor de la visión:3 + 4 + 3 + 1 = 11

// ¿Hay un dígito 1 en el número entero para el cual el valor de visión es mínimo?

// Sí, 8 es el valor mínimo de visión, tanto para el primer 3 como para el 1. Eso satisface los criterios, por lo que la función devuelve true.


