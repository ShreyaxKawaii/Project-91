function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    final_question = parseInt(num1)*parseInt(num2);
    question_number = "<h4>"+number1+" "+"X"+" "+number2+"</h4>";
    input_box = "<br> Answer: <input type='text' placeholder='Answer' id='inputbox'>";
    check_button= "<br><br> <button class='btn btn-info' onlick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}

