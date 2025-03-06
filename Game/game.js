const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
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