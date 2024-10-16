function writeCards(names, event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return newArray;
};

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
};