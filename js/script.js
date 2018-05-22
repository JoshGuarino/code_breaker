var answer;
var answerStatus = false;
var guessCounter = 10;
var result;
var guess = '';
document.getElementById('but').disabled = true;

//start the game
function startGame()
{
    setAnswer();
    document.getElementById('start').disabled = true;
    document.getElementById('but').disabled = false;
    console.log(answer);
    console.log(answerStatus);
    swal('You have begun the game.');
}

//set the answer 
function setAnswer()
{
    answer = Math.floor(Math.random()*10000); 
    answer = answer.toString();
    while(answer.length < 4)
    {
        answer = '0' + answer;
    }
    answerStatus = true;
}


//runs everytime player clicks guess and has winning and losing conditions
function main()
{  
    guess = document.getElementById('guess').value; 
    console.log(guess);
    if (guess.length===4)
    {
        compare(guess);
        let guessNum = guessCounter.toString();
        document.getElementById("result" + guessNum).innerHTML = guess + ' ' + result;
        let message = 'You have entered ' + guess + '.';
        console.log(message);
        document.getElementById('message').innerHTML = 'You have entered ' + guess + '.';
        if(guess===answer)
        {
            reset();
            swal('Congrats you have guessed the correct code!');
        }
        guessCounter--;
        if(guessCounter===0)
        {
            reset();
            swal('Sorry you have run out of guesses....please try again...');
        }
    }
    else if(guess.length < 4)
    {
        document.getElementById('message').innerHTML = 'You have entered a number that is less than 4 digits.';
    }
    else if(guess.length > 4)
    {
        document.getElementById('message').innerHTML = 'You have entered a number that is more than 4 digits.';
    }
}



//compare the guess to answer
function compare(guess)
{
    //slice the answer 
    let slot1 = answer.slice(0,1);  let slot2 = answer.slice(1,2);  let slot3 = answer.slice(2,3);  let slot4 = answer.slice(3,4);

    //slice the guess
    let guess1 = guess.slice(0,1);  let guess2 = guess.slice(1,2);  let guess3 = guess.slice(2,3);  let guess4 = guess.slice(3,4);

    //compare first number
    if(guess1 === slot1)
    {
        result = 'y';
    }
    else if(guess1===slot2 || guess1===slot3 || guess1===slot4)
    {
        result = '~';
    }
    else
    {
        result = 'x';
    }

    //compare second number
    if(guess2 === slot2)
    {
        result = result + 'y';
    }
    else if(guess2===slot1 || guess2===slot3 || guess2===slot4)
    {
        result = result + '~';
    }
    else
    {
        result = result + 'x';
    }

    //compare third number
    if(guess3 === slot3)
    {
        result = result + 'y';
    }
    else if(guess3===slot1 || guess3===slot2 || guess3===slot4)
    {
        result = result + '~';
    }
    else
    {
        result = result + 'x';
    }
    
    //compare forth number
    if(guess4 === slot4)
    {
        result = result + 'y';
    }
    else if(guess4===slot1 || guess4===slot2 || guess4===slot3)
    {
        result = result + '~';
    }
    else
    {
        result = result + 'x';
    }
    console.log(guess);
    console.log(result);  
}


//reset game 
function reset()
{
    document.getElementById('start').disabled = false;
    guessCounter=10;
    document.getElementById('guess').innerHTML = '';
    document.getElementById('result1').innerHTML = '';
    document.getElementById('result2').innerHTML = '';
    document.getElementById('result3').innerHTML = '';
    document.getElementById('result4').innerHTML = '';
    document.getElementById('result5').innerHTML = '';
    document.getElementById('result6').innerHTML = '';
    document.getElementById('result7').innerHTML = '';
    document.getElementById('result8').innerHTML = '';
    document.getElementById('result9').innerHTML = '';
    document.getElementById('result10').innerHTML = '';
    document.getElementById('message').innerHTML = 'Please press start to begin.';
    document.getElementById('but').disabled = true;
}




