//1.Despot some money !!done
//2.Determine the nr of lines to bet on
//3. Collect the bet amount
//4.Spin the slot machine
//5.check if the user won
//6.give the user their winnings
//7.play again

// lucreaza mai multi oameni asa
const prompt = require("prompt-sync")();

const deposit = () => {

while(true){
        const depositAmount = prompt("Enter a deposit amount: ") 
        const numberDepositAmount = parseFloat(depositAmount);

            if(isNaN(numberDepositAmount)|| numberDepositAmount <=0){
                console.log("Invalid deposit amount, try again");
            }else{
        return numberDepositAmount;
    }
}
};

const getNumbersOfLines = () =>{
    while(true){
        const lines  = prompt("Enter the number of lines: ") 
        const NumbersOfLines = parseFloat(lines);

            if(isNaN(NumbersOfLines)|| NumbersOfLines <= 0 || NumbersOfLines > 3){
                console.log("Invalid ");
            }else{
        return NumbersOfLines;
    }
}
};

const getBet = (balance, lines) => {
    while(true){
        const bet  = prompt("Enter the total bet per line: ") 
        const NumbersBet = parseFloat(bet);

            if(isNaN(NumbersBet)|| NumbersBet <= 0 || NumbersBet > balance/lines){
                console.log("Invalid bet, try again ");
            }else{
        return NumbersBet;
    }
}

}

let balance = deposit();
const NumbersOfLines = getNumbersOfLines();
const bet = getBet(balance, NumbersOfLines);