var num_players;
var play1_money;
var play2_money;
var play1_bet;
var play2_bet;
var dice1;
var dice2;
var dice3;
var total;
var p1_guess;
var p2_guess;
var closest="test";
function set_play1_money(){play1_money=document.getElementById("temp2").value;
play2_money=play1_money;}
function set_num_players(){num_players=document.getElementById("temp1").value;}
function set_play1_bet(){play1_bet=document.getElementById("bet1").value}
function set_play2_bet(){play2_bet=document.getElementById("bet2").value}   
function results(){document.getElementById("finale").innerHTML=closest};
function start_game(){  
    if (num_players > 1 ){
        set_play1_bet();
        set_play2_bet();
        document.getElementById("p1_scoreboard").innerText = "Current amount: " + play1_bet + " out of " + play1_money;
        document.getElementById("p2_scoreboard").innerText = "Current amount: " + play2_bet + " out of " + play2_money;
        document.getElementById("p1_guess").innerText = "Enter player 1's estimate";
        document.getElementById("p2_guess").innerText = "Enter player 2's estimate";
        function set_p1guess(){p1_guess=document.getElementById("guess1").value;}
        function set_p1guess(){p2_guess=document.getElementById("guess2").value;}
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1; 
        dice3 = Math.floor(Math.random() * 6) + 1;
        total = dice1 + dice2 + dice3;
        if (Math.abs(total-p1_guess) < Math.abs(total-p2_guess))
            {
            closest = "Player 1 is correct and " + p1_guess + " is the number closest to dice total";
            play1_money = play1_money + play2_bet + play1_bet;
            results();}
        else if (Math.abs(total-p2_guess) < Math.abs(total-p1_guess))
            {
            closest = "Player 2 is correct and " + p2_guess + " is the number closest to dice total";
            play2_money = play2_money + play2_bet + play1_bet;
            results();}
    }
    else if (num_players == 1){
        document.getElementById("p1_scoreboard").innerText = "Current amount: " + play1_bet + " out of " + play1_money;
        play2_bet = Math.floor(Math.random() * 100) + 1;
        document.getElementById("p2_scoreboard").innerText = "Current amount: " + play2_bet + " out of " + play2_money;
        document.getElementById("p1_guess").innerText = "Enter player 1's estimate";
        function set_p1guess(){p1_guess=document.getElementById("guess1").value;}
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1; 
        dice3 = Math.floor(Math.random() * 6) + 1;
        p2_guess = Math.floor(Math.random() * 18) + 1;
        total = dice1 + dice2 + dice3;
        if (Math.abs(total-p1_guess) < Math.abs(total-p2_guess))
            {
            closest = "Player 1 is correct and " + p1_guess + " is the number closest to dice total";
            play1_money = play1_money + play2_bet + play1_bet;
            results();}
        else if (Math.abs(total-p2_guess) < Math.abs(total-p1_guess))
            {
            closest = "Player 2 is correct and " + p2_guess + " is the number closest to dice total";
            play2_money = play2_money + play2_bet + play1_bet;
            results();}
    }
}
