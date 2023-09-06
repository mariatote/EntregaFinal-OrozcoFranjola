// Get the modal 2
var modal2 = document.getElementById("myModal2");

// Get the button 2 that opens the modal
var botonmodal2 = document.getElementById("botonmodal2");

// When the user clicks the second button, open the second modal 
botonmodal2.onclick = function() {
modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
if (event.target == modal2) {
    modal2.style.display = "none";
}
}