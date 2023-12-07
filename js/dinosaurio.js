function dinosaurio (nombre, peso, longitud){
    
    let nombre = nombre;
    let peso = peso/1000;
    let longitud = longitud/3.2;

    return [nombre, peso.toFixed(2), longitud.toFixed(2)]
}

// console.log(dinosaurio("Cuello largo", 2118, 25));