document.addEventListener("keydown", (man1) => {
    let man = document.querySelector(".man");

    let leftright = Number(man.style.left.replace("px", ""));

    let updown = Number(man.style.top.replace("px", ""));

    // let gameWon = document.querySelector(".gameover")

    let speed = 10; if (man1.keyCode == 37) {
        if (leftright > 0) {
            man.style.left = `${leftright - speed}px`
        }
        console.log(man.style.top);
    }
    else if (man1.keyCode == 38) {
        if (updown > 0) {
            man.style.top = `${updown - speed}px`
        }
        console.log(man.style.top);
    }
    else if (man1.keyCode == 39) {
        if (leftright < 1630) {
            man.style.left = `${leftright + speed}px`
        }
        console.log(man.style.top);
    }
    else if (man1.keyCode == 40) {
        if (updown < 660) {
            man.style.top = `${updown + speed}px`
        }
        console.log(man.style.top);
    }
    if (leftright > 740 && leftright < 850 && updown > 300 && updown < 350) {
        alert("Game Over");
        // gameWon.classList.toggle('.active')
    }

});


