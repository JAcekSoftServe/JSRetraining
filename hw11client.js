//pseudo code:

// onclick().getRequest("hw11server.js").innerHTML("message")

function getMessage() {
    fetch("http://localhost:8000").then((result) => result.text())
                           .then((result) => console.log(result))
                           .then((result) => {
                            document.getElementById("button").innerHTML = result
                        });
}