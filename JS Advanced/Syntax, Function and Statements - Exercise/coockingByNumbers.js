function coockingByNumbers(startPoint, op1, op2, op3, op4, op5) {

    let result = Number(startPoint);

    function operations(op) {
        switch (op) {
            case 'chop': result = result / 2; break;
            case 'dice': result = Math.sqrt(result); break;
            case 'spice': result = result + 1; break;
            case 'bake': result = result * 3; break;
            case 'fillet': result *= 0.80; break;
        }
        return result;
    }
    console.log(operations(op1));
    console.log(operations(op2));
    console.log(operations(op3));
    console.log(operations(op4));
    console.log(operations(op5));

    
}

coockingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
coockingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
