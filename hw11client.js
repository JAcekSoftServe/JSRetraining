
// function getMessage() {
//     fetch("http://localhost:8000", {mode: 'no-cors'}).then((result) => result.text())
//                            .then((text) => console.log(text))
//                            .then((text) => {
//                             const message = document.getElementById("button");
//                             message.innerHTML = text;
//                         });
// }

// solution 2

function getMessage() {
    fetch("http://localhost:8000", {
        mode: 'no-cors',
        headers: {
            'Accept': 'tht/html'
        }
    }).then(response => response.text())
      .then(text => {
        const message = document.getElementById("button");
        if(message){
            message.innerHTML = text;
        }
    });
}