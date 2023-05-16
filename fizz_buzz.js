
function fizz_buzz(N){

    const array = [];

    for (let i = 1; i <= N; i++) {
        
        array.push(i);

        if(array[i-1] % 3 === 0 && array[i-1] % 5 === 0){
            array.splice(i-1, 1, "FizzBuzz");
        }else if(array[i-1] % 3 === 0){
            array.splice(i-1, 1, "Fizz");
        }else if(array[i-1] % 5 === 0){
            array.splice(i-1, 1, "Buzz");
        }

    }
    return array;
}
fizz_buzz(15)
console.log(fizz_buzz(15));

// Para múltiplos de 3 y 5 impresiones “FizzBuzz”
// La función toma un número entero N como parámetro y devuelve la secuencia como un array hasta el índice N. 

// Ejemplos:

// Input: 2
// Output: [1,2]

// Input: 5
// Output: [1,2,"Fizz",4,"Buzz"]

// Input: 9
// Output: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz"]

// Input: 15
// Output: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]