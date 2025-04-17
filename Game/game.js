const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
// const a = (event) => {
//     if (event.code === "PAGE UP") {
//         a.classList.add("f") 
//     }
// };


document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        jump();
        console.log("1");
    }
});

function jump() {
    dino.classList.add("jump");
    setTimeout(() => {
        dino.classList.remove("jump")
    }, 500);
}