// This function inserts the text upon being called, and then disables the click button
function openSesame() {
    var text = "Thank you for considering my application!";
    document.getElementById("clickMessage").textContent += text;
    document.getElementById("clickButton").disabled = true;
    return text;
}