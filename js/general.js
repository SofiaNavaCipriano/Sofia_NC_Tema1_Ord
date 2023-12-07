function Fgeneral(a, b, c) {
    
    var discriminante = b * b - 4 * a * c;

    var x1, x2;
    if (discriminante > 0) {
        x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [x1, x2];
    } else if (discriminante === 0) {
        
        x1 = -b / (2 * a);
        return [x1.toFixed(2), x2.toFixed(2)];
    } else {
        
        return "No hay soluciones reales.";
    }
}

// var a = 1;
// var b = -3;
// var c = 2;
// var soluciones = Fgeneral(a, b, c);

// // console.log(soluciones);

