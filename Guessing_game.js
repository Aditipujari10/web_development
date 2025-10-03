const user = prompt("Enter The Maximum Number : ");

const random = Math.floor(Math.random() * user)+1;

let guess = prompt("guess the number ");

while(true){
    if(guess == "quite"){
        console.log("user quite");
        break;
    }
    if(guess == random){
        console.log("you are rigth! random number was ",random)
        break;
    }
    else if(guess < random){
        guess = prompt("hint : your guess was too small.please try again")
    }
    else{
        guess = prompt("hint : your guess was too big.please try again")
    }

}
