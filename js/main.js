let calculadora = Number(prompt("Elija la operacion que desea realizar: 1)Sumar. 2)Restar. 3)Multiplicar. 4)Dividir. 5)Salir."))

function elegirOperacion(calculadora) {
    while (calculadora !== 5) {
        switch (calculadora) {
            case 1:
                sumar ();
                break;
        
            case 2:
                restar ();
                break;
                
            case 3:
                multiplicar ();
                break;
                
            case 4:
                dividir ();
                break;

            default:
                alert("El numero seleccionado no existe")
                break;
        } 

        calculadora = Number(prompt("Elija la operacion que desea realizar: 1)Sumar. 2)Restar. 3)Multiplicar. 4)Dividir. 5)Salir."))
    }
} 

elegirOperacion (calculadora);

function sumar() {
    let numeroUno = Number(prompt("Ingrese un número."));
    let numeroDos = Number(prompt("Ingrese un número."));
    let resultado = (numeroUno + numeroDos);

    alert("Tu resultado es" + " " + resultado)
}

function restar() {
    let numeroUno = Number(prompt("Ingrese un número."));
    let numeroDos = Number(prompt("Ingrese un número."));
    let resultado = (numeroUno - numeroDos);

    alert("Tu resultado es" + " " + resultado)
}

function multiplicar() {
    let numeroUno = Number(prompt("Ingrese un número."));
    let numeroDos = Number(prompt("Ingrese un número."));
    let resultado = (numeroUno * numeroDos);

    alert("Tu resultado es" + " " + resultado)
}

function dividir() {
    let numeroUno = Number(prompt("Ingrese un número."));
    let numeroDos = Number(prompt("Ingrese un número."));
    let resultado = (numeroUno / numeroDos);

    alert("Tu resultado es" + " " + resultado)
}
