function calculateSum() {
    let sum = 0;

    // Itera de 1 a 500
    for (let i = 1; i <= 500; i++) {
        // Comprueba si el número es impar
        if (i % 2 !== 0) {
            sum += i; // Si es impar, agrégalo a la suma
        }
    }

    // Muestra el resultado en la página
    document.getElementById("result").innerText = `La suma de los n\xfameros impares entre 1 y 500 es: ${sum}`;
}