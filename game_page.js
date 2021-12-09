var player1_name = localStorage.getItem("player1");
var player2_name = localStorage.getItem("player2");

var player1_score = 0;
var player2_score = 0;

var q_turn="player1";
var a_turn="player2";

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score ;
document.getElementById("player2_score").innerHTML=player2_score ;

document.getElementById("player_question").innerHTML= "q turn :"+ player1_name;

document.getElementById("player_answer").innerHTML= "a turn :"+ player2_name;

function send(){
    get_word=document.getElementById("word").value;
    
    word=get_word.toLowerCase();

    console.log("word is "+word);

     var charAt1= word.charAt(1);
     console.log("charAt1:",charAt1);

    len=Math.floor(word.length/2);

     var charAt2= word.charAt(len);
     console.log("charAt2:",charAt2);
    
    var charAt3= word.charAt(len-1);
    console.log("charAt3:",charAt3);

    replace1=word.replace(charAt1,"_");
    replace2=replace1.replace(charAt2,"_");
    replace3=replace2.replace(charAt3,"_");
    console.log(replace3);

    q_word="<center> <h4 id='word_display'> Q."+replace3+"</h4>";
    a_word="<br> <input type='text' id='ans_input'> ";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'> check </button></center>";

     console.log(q_word + a_word + check_button);

    document.getElementById("output").innerHTML= q_word + a_word + check_button ;
    document.getElementById("word").value="";
    
}
function check(){
    get_answer=document.getElementById("ans_input").value;
    answer=get_answer.toLowerCase();
    console.log(answer);
    if (answer == word){
        if (a_turn=="player1"){
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (q_turn == "player1"){
        q_turn="player2";
        document.getElementById("player_question").innerHTML="q_turn"+player2_name;
    }
    else{
        q_turn="player1";
        document.getElementById("player_question").innerHTML="q_turn"+player1_name;
    }
    if (a_turn == "player2"){
        a_turn="player1";
        document.getElementById("player_answer").innerHTML="a_turn"+player1_name;
    }
    else {
        a_turn="player2"
        document.getElementById("player_answer").innerHTML="a_turn"+player2_name;
    }
    document.getElementById("output").innerHTML="";
}