player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1+":";
document.getElementById("player2name").innerHTML=player2+":";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerq").innerHTML="question turn: "+player1;
document.getElementById("playera").innerHTML="answer turn: "+player2;

function send() {
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
 
   charAt1 = word.charAt(1);

   lenght_divide_2 = Math.floor(word.length/2);
     charAt2 = word.charAt(lenght_divide_2);

     lenght_minus_1 = word.length - 1;
      charAt3 = word.charAt(lenght_minus_1);

      remove1=word.replace(charAt1, "_");
      remove2=remove1.replace(charAt2, "_");
      remove3=remove2.replace(charAt3, "_");

      question_word = "<h4 id='word_display'> Q. "+remove3+"</h4>";
      input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row=question_word+input_box+check_button;
      document.getElementById("output").innerHTML=row;

}

qturn="player1";
aturn="player2";

function check() {
    game=document.getElementById("input_check_box").value;
    answer=game.toLowerCase();

    if(answer==word){
    if(aturn=="player1"){
        player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;  
    }
    else {
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;  
    }
    }
    if (qturn=="player1") {
        qturn="player2";
        document.getElementById("playerq").innerHTML="Question turn - "+player2;
    }
    else{
        qturn="player1";
        document.getElementById("playerq").innerHTML="Question turn - "+player1;
    }

    if (aturn=="player1") {
        aturn="player2";
        document.getElementById("playera").innerHTML="Answer turn - "+player2;
    }
    else{
        aturn="player1";
        document.getElementById("playera").innerHTML="Answer turn - "+player1;
    }
}