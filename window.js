var name = "kudous"

function add(num1, num2) {
    var result = num1 + num2;
    console.log('result', result)
    console.log("name", name);

    function doble(num) {
        return num * 2;
    };
    const total = doble(50);
    console.log(total)
    return result;
}


const sum = add(13, 21);
console.log(sum, name);
// console.log('result outside', result)

// console.log('result', result)