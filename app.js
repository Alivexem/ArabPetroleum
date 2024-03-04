


let array = ["third.jpg", "fourth.jpg", "first.jpg"];
let index = 0;

setInterval(() => {
    let image = document.getElementById("image");
    image.style.opacity = 0; // Start with opacity 0
    image.setAttribute("src", array[index]);

    // Fade in effect using opacity transition
    setTimeout(() => {
        image.style.opacity = 1;
    }, 100); // Adjust the duration of the fade-in effect as needed

    index = (index + 1) % array.length;
}, 5500);

let button = document.querySelector(".learn")
let text = document.querySelector(".text")

button.addEventListener("click",() => {
    text.style.display = "block"
    button.style.backgroundColor = "gray"
})


let container = document.querySelector(".container")
let apply = document.querySelector(".apply")
let assure = document.querySelector(".assure")
container.style.display = "none"
assure.style.display = "none"


apply.addEventListener("click",() => {
    container.style.display = "block"
    assure.style.display = "inline-block"
    apply.style.backgroundColor = "gray"
})







const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menuwrap");
let click = true
menuBtn.addEventListener("click", () => {
    if(click){
      menu.classList.remove("notClicked");
      menu.classList.add("clicked");
      menu.style.display = "flex"
      menu.style.border = "1px solid white"
    }else{
        menu.classList.remove("clicked");
        menu.classList.add("notClicked");       
        menu.style.border = "none"
        setTimeout(() => {
            menu.style.display = "none"
        },1450)
    }
    click = !click
});