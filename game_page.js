  var player1name = localStorage.getItem("player1")
  var player2name = localStorage.getItem("player2");

	var player1score = 0;
	var player2score = 0;

document.getElementById("player1_name").innerHTML=player1name + " : ";
document.getElementById("player2_name").innerHTML=player2name + " : ";

document.getElementById("player1_scores").innerHTML=player1score ;
document.getElementById("player2_scores").innerHTML=player2score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;

function send () {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			  player1score = player1score +1;
		    document.getElementById("player1_scores").innerHTML = player1score;
		}
		else 
		{
			 player2score = player2score +1;
		    document.getElementById("player2_scores").innerHTML = player2score;
		}
	}
	
	if(question_turn == "player1name")
	{    
		question_turn = " player2name"
		document.getElementById("player_question").innerHTML = "question Turn - " + player2name ;
	}
	else 
	{
		question_turn = "player1name"
		document.getElementById("player_question").innerHTML = "question Turn - " + player1name ;
	}

	if(answer_turn == "player1name")
	{
		answer_turn = " player2name"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;
	}
	else 
	{
		answer_turn = "player1name"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name ;
	}

    document.getElementById("output").innerHTML = "";
}

