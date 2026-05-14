let message = document.getElementById("message");

let count = document.getElementById("count");

let remaining = document.getElementById("remaining");

let warning = document.getElementById("warning");

let progressBar = document.getElementById("progressBar");

let wordCount = document.getElementById("wordCount");

let maxLength = 200;



message.addEventListener("input", function () {



    /* CHARACTER LIMIT */

    if(message.value.length > maxLength){

        message.value =
        message.value.substring(0,maxLength);
    }



    let textLength = message.value.length;



    /* CHARACTER COUNT */

    count.textContent =
    textLength + " / 200 Characters";



    /* REMAINING COUNT */

    remaining.textContent =
    (maxLength - textLength) + " Remaining";



    /* REMAINING COLOR */

    if(textLength > 150){

        remaining.style.color = "#ff6b6b";
    }

    else{

        remaining.style.color = "white";
    }



    /* PROGRESS BAR */

    let progress =
    (textLength / maxLength) * 100;

    progressBar.style.width =
    progress + "%";



    /* WARNING MESSAGE */

    if(textLength == maxLength){

        warning.textContent =
        "⚠ Character Limit Reached";

        warning.style.color =
        "#ff6b6b";
    }

    else{

        warning.textContent = "";
    }



    /* WORD COUNT */

    let words =
    message.value.trim().split(/\s+/);



    if(message.value.trim() === ""){

        wordCount.textContent =
        "0 Words";
    }

    else{

        wordCount.textContent =
        words.length + " Words";
    }

});



/* CLEAR BUTTON */

function clearText(){

    message.value = "";

    count.textContent =
    "0 / 200 Characters";

    remaining.textContent =
    "200 Remaining";

    remaining.style.color = "white";

    progressBar.style.width = "0%";

    warning.textContent = "";

    wordCount.textContent =
    "0 Words";
}



/* COPY BUTTON */

function copyText(){

    navigator.clipboard.writeText(message.value);

    warning.textContent =
    "Message Copied ✅";

    warning.style.color =
    "lightgreen";



    setTimeout(() => {

        if(message.value.length == maxLength){

            warning.textContent =
            "⚠ Character Limit Reached";

            warning.style.color =
            "#ff6b6b";
        }

        else{

            warning.textContent = "";
        }

    }, 2000);

}