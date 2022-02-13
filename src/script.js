const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
let jumpcount= 0 




function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")

        setTimeout(function () {
            dino.classList.remove("jump")
        }, 300)
    }
}  

let isAlive = setInterval(function(){
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    //  fonction pour détecter les collisions
    if(cactusleft <50 && cactusleft > 0 && dinotop >= 140){

        //console.log("collision")
         alert("Game over!")
         console.log(jumpcount)
    }
},10)


document.addEventListener("keydown", function (event) {
    jump()
})