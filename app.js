// Problem 1: Let’s play a mind game
// take a input as a number then multiply with 3, then add 10, then divide with 2, then substract 5

function mindGame(number){
    let numb1 = number * 3;
    let numb2 = numb1 + 10;
    let numb3 = numb2 / 2;
    let result = numb3 - 5;
    return result; //returning final result
}
// let inputNumber = mindGame("5");



// Problem 2: Finding even or odd
// If you give a string, check whether it is even or odd

function evenOdd(string){
    if(string.length % 2 === 0)
        {
            let even = "even";
            return even;
        }
    else
        {
        let odd = "odd";
        return odd;
        }
}
// let inputString = evenOdd("Phero");



// Problem 3: Is Less or Greater than seven
// if the subtraction is less than 7, then it will return the number. And if equal to or greater than 7 then double the number and return.

function isLGSeven(numbers){
    let less = numbers - 7;
    if(less < 7){
        return less;
    }
    else{
        let double = numbers * 2;
        return double;
    }
}
// let inputNumber = isLGSeven("15");




// Problem 4: Finding Bad data
// Returns the length of an array containing negative numbers as badData

function findingBadData(array){
    let badData = [];
    for(let i = 0; i < array.length; i ++)
    {
        if(array[i] < 0){
            badData.push(array[i]);
        }
    }
    let badDataLength = badData.length;
    return badDataLength;
}
// let number = [-4, -9, -5, -33, -55];
// let inputArray = findingBadData(number);



// Problem 5: Convert your gems into diamond
// gems from every friend will convert into diamonds

function gemsToDiamond(friend1, friend2, friend3){
    let friend1gems = friend1 * 21;
    let friend2gems = friend2 * 32;
    let friend3gems = friend3 * 43;

    let totalfriendsGems = friend1gems + friend2gems + friend3gems;

    if(totalfriendsGems >= 2000){
      let gems = totalfriendsGems - 2000;
      return gems;
    }else{
        return totalfriendsGems;
    }
}
// let totalfriendsGems = gemsToDiamond(100, 5, 1)