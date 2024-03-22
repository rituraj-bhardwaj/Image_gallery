// alert("hello!");

// javascript for light-box modal
const choosed_image = document.querySelectorAll("img");
var image_source;
choosed_image.forEach(img => {
  img.addEventListener("click", () => {
    image_source = img.getAttribute("src");
    console.log(image_source);
    document.getElementById("light-box").style.display = "block";
    document.getElementById("light-box-img").setAttribute("src", image_source);
  });
});

document.querySelector("#back").addEventListener("click", () => {
    document.getElementById("light-box").style.display = "none";
});


