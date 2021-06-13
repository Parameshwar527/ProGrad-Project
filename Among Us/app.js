const button = document.getElementById("button")
const red = document.getElementById("red")
const blue = document.getElementById("blue")
const yellow = document.getElementById("yellow")

const redimage = document.getElementById("red-image")
const blueimage = document.getElementById("blue-image")
const yellowimage = document.getElementById("yellow-image")

button.oneclick = () {
    if(red.checked){
        redImage.classList.remove("hidden");
        redImage.classList.add("eject")
    }
}

if(blue.checked){
        blueImage.classList.remove("hidden");
        blueImage.classList.add("eject")
    }
}

if(yellow.checked){
        yellowImage.classList.remove("hidden");
        yellowImage.classList.add("eject")
    }
}















