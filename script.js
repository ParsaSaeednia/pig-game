


var scores, roundScore, activePlayer,gamePlaying;

init();





// Roll button

document.querySelector('.btn--roll').addEventListener('click', function () {
    if(gamePlaying) {
        // 1. Random Number

        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result

        var diceDOM = document.querySelector ('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        // 3. Update the round score if the rolled number wasn't a 1

        if (dice !==1) {

            // Add score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
            
        }
        else {

            nextPlayer();
        }
            }
   
});


// Hold Button

document.querySelector('.btn--hold').addEventListener('click', function (){

    if(gamePlaying){
        // Add current score to player global score

        scores[activePlayer] += roundScore;

        // Update the UI

        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer ];

        // Check if the player won the game!

        if (scores[activePlayer]>=100) {

            document.getElementById ('name--' + activePlayer).textContent = 'WINNER!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            gamePlaying = false;

        } else {

            // Next turn
            nextPlayer();

        }
    }
    
    
});

function nextPlayer () {

     //Next turn

     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

     //Set round score to zero

     roundScore = 0;

     //Show round score in the UI

     document.querySelector('#current--0').textContent = '0';
     document.querySelector('#current--1').textContent = '0';

     //toggle the active player to see whose turn it is

     document.querySelector('.player--0').classList.toggle('player--active');
     document.querySelector('.player--1').classList.toggle('player--active');

     // Hide the dice picture when the turn changes

     document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn--new').addEventListener('click',init)


function init (){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display ='none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').innerHTML = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');

}