
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
            'Accept': 'txt/html'
        }
    }).then(response => response.text())
      .then(text => {console.log(text);
        // const message = document.getElementById("button");
        // if(message){
        //     message.innerHTML = text;
        // }
    });
}

//try with json

// ******************* task 2 *********************

function fetchAuthors() {
    fetch('/authors')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(authors => displayAuthors(authors))
        .catch(error => console.error('Fetch error:', error));
}

function displayAuthors(authors) {
    const authorsList = document.getElementById('authors-list');
    authorsList.innerHTML = ''; // Clear previous list if any

    authors.forEach(author => {
        const listItem = document.createElement('li');
        listItem.textContent = author.name;
        authorsList.appendChild(listItem);
    });
}