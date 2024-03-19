// zoom in...
document.querySelector("#increase").addEventListener("click", () => {
    var width = document.querySelector("#img").clientWidth; 
    console.log(width + "px");
    width += 20;
    document.querySelector("#img").style.width = width + "px";
});


//  zoom out....
document.querySelector("#decrease").addEventListener("click", () => {
    var width = document.querySelector("#img").clientWidth;
    console.log(width +"px");
    width -= 20;
    document.querySelector("#img").style.width = width + "px";
});