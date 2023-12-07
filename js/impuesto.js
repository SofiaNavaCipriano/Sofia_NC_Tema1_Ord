function impuesto(costo){

    if (costo <= 20){
        return costo
    }else if (costo <= 40){
        let nuevop1 = (costo+(costo*.3));
        return nuevop1
    }else if (costo <=500){
        let nuevop2 = (costo+(costo*.4));
        return nuevop2
    }else if (costo>=500){
        let nuevop3 = (costo+(costo*.5));
        return nuevop3
    }else{
        return "El valor no es valido"
    }
}

