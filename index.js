// alert("hello!");

// javascript for light-box modal
var image_source;

const choosed_image = document.querySelectorAll("img");
choosed_image.forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("light-box").style.display = "block";

    image_source = img.getAttribute("src");

    const serial_no = img.getAttribute("id");
    // console.log(serial_no);

    document.querySelector(".light-box-img").setAttribute("src", image_source);
    document.querySelector(".light-box-img").setAttribute("id", serial_no);
  });
});

document.querySelector("#back").addEventListener("click", () => {
    document.getElementById("light-box").style.display = "none";
});


// script for next and previous image...
var img_serial_no;

document.getElementById("next").addEventListener("click", () => {
  img_serial_no = document.querySelector(".light-box-img").getAttribute("id");
  img_serial_no = parseInt(img_serial_no);
  const next_img_serial_no = img_serial_no + 1;

  const next_img = document.querySelectorAll(".img img")[next_img_serial_no];
  // console.log(next_img);

  const next_img_source = next_img.getAttribute("src");
  // console.log(next_img_source);

  document.querySelector(".light-box-img").setAttribute("src", next_img_source);
  document.querySelector(".light-box-img").setAttribute("id", next_img_serial_no);
});

document.getElementById("previous").addEventListener("click", () => {
  img_serial_no = document.querySelector(".light-box-img").getAttribute("id");
  img_serial_no = parseInt(img_serial_no);
  const previous_img_serial_no = img_serial_no - 1;

  if(previous_img_serial_no >= 0)
  {
    const previous_img = document.querySelectorAll(".img img")[previous_img_serial_no];
    // console.log(previous_img);

    const previous_img_source = previous_img.getAttribute("src");
    // console.log(previous_img_source);

    document.querySelector(".light-box-img").setAttribute("src", previous_img_source);
    document.querySelector(".light-box-img").setAttribute("id", previous_img_serial_no);
  }  
});




// zoom in and zoom out feature....
document.querySelector("#zoom-in").addEventListener("click", () => {
  var width = document.querySelector(".light-box-img").clientWidth; 
  console.log(width + "px");
  width += 20;
  document.querySelector(".light-box-img").style.width = width + "px";
});

document.querySelector("#zoom-out").addEventListener("click", () => {
  var width = document.querySelector(".light-box-img").clientWidth;
  console.log(width +"px");
  width -= 20;
  document.querySelector(".light-box-img").style.width = width + "px";
});