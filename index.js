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





// script for next and previous image.........................................................................
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




// zoom in and zoom out feature....................................................................
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


// slideshow feature................................................................................

let slideshowTimeout;
function slideshow() {
  img_serial_no = document.querySelector(".light-box-img").getAttribute("id");
  img_serial_no = parseInt(img_serial_no);
  const next_img_serial_no = img_serial_no + 1;

  const next_img = document.querySelectorAll(".img img")[next_img_serial_no];
  // console.log(next_img);

  const next_img_source = next_img.getAttribute("src");
  // console.log(next_img_source);

  document.querySelector(".light-box-img").setAttribute("src", next_img_source);
  document.querySelector(".light-box-img").setAttribute("id", next_img_serial_no);

  if (next_img_serial_no < 25 )
  {
    slideshowTimeout = setTimeout(slideshow, 2000);
  }
}

document.querySelector("#slide_show").addEventListener("click", () => {

  const slideshow_path = "m380-300 280-180-280-180v360ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z";
  const pause_path = "M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z";

  const path_obtained =  document.querySelector("#slide_show svg path").getAttribute("d");
  console.log(path_obtained);

  if(path_obtained === slideshow_path) {
    document.querySelector("#slide_show svg path").setAttribute("d", pause_path);
    slideshow();
    // document.querySelector("#slideshow_play").setAttribute("id", "slideshow_pause");
  } else {
    document.querySelector("#slide_show svg path").setAttribute("d", slideshow_path);
    clearTimeout(slideshowTimeout);
    // document.querySelector("#slideshow_pause").setAttribute("id", "slideshow_play");
  }


});



// rorate feature ...........................................................................................
document.querySelector("#rotate").addEventListener("click", () => {
  alert("this feature is under-development !!!");
})



// image-info feature..........................................................................................
document.querySelector("#img-info").addEventListener("click", () => {
  alert("this feature is under-development !!!");
})