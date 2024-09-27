function writeCards(name, event) {
    const newArray = [];
    for(let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    };
    return newArray;
};

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count);
        count--;
    };
};

countDown();