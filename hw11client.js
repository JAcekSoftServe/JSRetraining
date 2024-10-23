//pseudo code:

// onclick().getRequest("hw11server.js").innerHTML("message")

function getMessage() {
    fetch("localhost:8000").then((result) => result.text())
                           .then((result) => {
                            document.getElementById("button").innerHTML = result
                        });
}