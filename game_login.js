function addUser(){
    var user1 = document.getElementById("player1_name").value;
    var user2 = document.getElementById("player2_name").value;

    localStorage.setItem("player1",user1);
    localStorage.setItem("player2",user2);
     
    window.location="game_page.html";
    
}
