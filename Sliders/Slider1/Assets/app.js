
// let slidersImages = [
//     'Assets/Image/image1.jpg',
//     'Assets/Image/image2.jpg',
//     'Assets/Image/image4.jpg',
//     'Assets/Image/image3.jpg',
//     'Assets/Image/image5.jpg',
// ]
// var dots = document.querySelector('.dot-des')
// let imageCounter = 0;
// let image = document.querySelector('.sliders img');
// image.src = slidersImages[imageCounter];
// let after = document.querySelector('.after')
// let before = document.querySelector('.before')
// for (let i = 0; i < slidersImages.length; i++) {
//     var dot = document.createElement('div')
//     dot.className = 'pn';
//     dots.appendChild(dot)
// }
// var createdDots = document.getElementsByClassName("pn");
// for (let i = 0; i < slidersImages.length; i++) {
//     createdDots[i].onclick = function () {
//         image.src = slidersImages[i]
//     }
// }
// function AutoPlay() {
//     imageCounter++;
//     if (imageCounter >= slidersImages.length) {
//         imageCounter = 0;
//     }
//     image.src = slidersImages[imageCounter];
// }
// after.onclick = function () {
//     AutoPlay();
// }
// before.onclick = function () {
//     imageCounter--;
//     if (imageCounter === -1) {
//         imageCounter = slidersImages.length - 1;
//     }
//     image.src = slidersImages[imageCounter];
// }
// setInterval(() => {
//     AutoPlay();
// }, 3000);



// let dots = document.querySelectorAll(".dots");
// let img = document.querySelector("img");
// dots.forEach(b => {
//     b.onclick = function () {
//         for (let a of dots) {
//             a.classList.remove("after")
//         }
//         b.classList.add("after")
//         img.src = `./Assets/Image/${b.id}.jpg`
//     }
// });


