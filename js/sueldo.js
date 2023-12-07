
function sueldo(sueldo, categoria){

    if (categoria =1){
        let sueldo1 = (sueldo+(sueldo*.15));
        return [categoria,  sueldo1.toFixed(2)]
    }else if (categoria =2){
        let sueldo2 = (sueldo+(sueldo*.10));
    return [categoria,  sueldo2.toFixed(2)]

    }else if (categoria =3){
        let sueldo3 = (sueldo+(sueldo*.8));
    return [categoria, sueldo3.toFixed(2)]
    }else if (categoria =4){
        let sueldo4 = (sueldo+(sueldo*.7));
    return [categoria, sueldo4.toFixed(2)]
    }else{


    return "La categoria solicitada no es valida"
    }
}

// console.log(sueldo(1000, 1));
