var startTime, endTime, typedText = "", currentWordPos = 1, totalTextCount, typeTestText;

$(document).ready(function(){
    $.getJSON("./texts.json", function(data){
        let textIndex = Math.floor(Math.random() * data.length);
        typeTestText = data[textIndex].text;
        typeTestTextSource = data[textIndex].source;
        typeTestTextArr = typeTestText.split(" ");

        for (let i = 0; i < typeTestTextArr.length; i++) {
            $("#typing-text").append(`<span id="word-${i+1}">${typeTestTextArr[i]}</span> `);
        }
        $("#text-source").text("- " + typeTestTextSource);
        totalTextCount = $("#typing-text").text().trim().split(" ").length;
    }).fail(function(){
        console.log("An error has occurred.");
    });
});

function startTimer() {
    startTime = new Date();
};

function endTimer() {
    endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000;
}

function getSeconds(){
    endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000;

    var seconds = Math.round(timeDiff);
    return seconds;
}

function startCoundown(){
    let countdownTimer = 4;
    var timer = setInterval(function(){
    $("#countdown").html(function(i,html){
        if(countdownTimer-1>0) {
            countdownTimer -= 1;
            return countdownTimer + " second(s)";
        }else{
            clearTimeout(timer);
            startTimer();
            $("#wpm").prop("disabled", false);
            $("#wpm").focus();
            return "GO!";
        }
    });
    },1000);
}

$("#start-btn").on("click", function(){
    if($(this).text() == "Start"){
        $(this).text("Restart");
        startCoundown();
    }else{
        location.reload();
    }
});

$("#wpm").on("keyup", function(){
    let elapsedTime = getSeconds();
    if(elapsedTime == 0)elapsedTime++;
    let speed = Math.floor((typedText.length / 5) / (elapsedTime / 60));
    $("#user-wpm").text(speed);

    let textInputBox = $("#wpm"), textInput = textInputBox.val(), lastChar = textInput.slice(-1);

    if(textInput.includes(" ") || currentWordPos == totalTextCount){

        if(currentWordPos == totalTextCount){
            if(textInput.trim() == $(`#word-${currentWordPos}`).text()){
                textInputBox.val("");
                $("#wpm").prop("disabled", true);
                $(`#word-${currentWordPos}`).css('color', '#40F99B');
                $("#countdown").text(`You typed at ${speed} words per minute`);
            }
        }

        if(textInput.substr(0, textInput.indexOf(" ")) == $(`#word-${currentWordPos}`).text()){
            typedText += textInput;
            $(`#word-${currentWordPos}`).css('color', '#40F99B');
            let currentText = textInputBox.val();
            currentText = currentText.replace(textInput.substr(0, textInput.indexOf(" ")+1), "");
            textInputBox.val(currentText);
            currentWordPos++;
        }

    }
});