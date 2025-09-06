function add (a, b){
    // console.log(a, b);
    console.log(arguments);
    const params = [...arguments];
    console.log(params);
}

add(88, 77, 99, 100, 200);