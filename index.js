const newArray = [];

function writeCards(names,event) {
    for (let i = 0; i<names.length;i++) {
        newArray[i]="Thank you, " + names[i]+ ", for the wonderful " + event + " gift!";
    
    }
    return newArray;
}
function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}