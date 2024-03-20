document.querySelector("#img").addEventListener("click", () => {
    document.querySelector("#modal-box").style.display = "block";
    console.log("hi!");
});
document.querySelector("#back").addEventListener("click", () => {
    document.querySelector("#modal-box").style.display = "none";
    console.log("hello!");
});






// zoom in...
document.querySelector("#increase").addEventListener("click", () => {
    var width = document.querySelector("#img2").clientWidth; 
    console.log(width + "px");
    width += 20;
    document.querySelector("#img2").style.width = width + "px";
});


//  zoom out....
document.querySelector("#decrease").addEventListener("click", () => {
    var width = document.querySelector("#img2").clientWidth;
    console.log(width +"px");
    width -= 20;
    document.querySelector("#img2").style.width = width + "px";
});