//to be completed asap

// ********************************** 1 *******************************

let newWindow = window.open("", "", "width=300, height=300") //empty window

setTimeout(function () {
    newWindow.resizeBy(500, 500)
}, 2000);

setTimeout(function () {
    newWindow.moveTo(200, 200)
}, 4000);

setTimeout(function () {
    newWindow.close()
}, 6000);

// ****************************** 2 *****************************

