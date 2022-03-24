function send() {
    number1 = document.getElementById("numberInput1").value;
    number2 = document.getElementById("numberInput2").value;
    question_answer = parseInt(number1) * parseInt(number2);
    answer_container = "<div class='answerContainer'>";
    answer_container_end = "</div>";
    quiz_question = "<span id='questionLabel'>" + number1 + " X " + number2 + " = </span>";
    answer_input = " <input id='answerInput' placeholder='Answer' type='text'>";
    quiz_button = " <button id='answerButton' onclick='answerCheck()'>Check</button>";
    quiz_question_output = answer_container + quiz_question + answer_input + quiz_button + answer_container_end;
    document.getElementById("quizOutput").innerHTML = quiz_question_output;
    document.getElementById("numberInput1").value = "";
    document.getElementById("numberInput2").value = "";
}