function cone(r, h) {

    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));;
    let V = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
    let A = (Math.PI * r * s) + (Math.PI * Math.pow(r, 2));

    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${A.toFixed(4)}`);

    
}

cone(3, 5);
cone(3.3, 7.8);
