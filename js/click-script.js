// This function inserts the text upon being called, and then disables the click button
const openSesame = () => {
    var text = "Thank you for considering my application!";
    window.document.getElementById("clickMessage").innerHTML = text;
    window.document.getElementById("clickButton").disabled = true;
}

window.onload = function() {
    const callClick = window.document.getElementById("clickButton");
    callClick.addEventListener("click", openSesame);
}

module.exports = openSesame;
