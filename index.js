console.log("hello, vanilla.");


const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');
const carouselImg = document.querySelector('.carousel-imgs');
const dotNavigator = document.querySelector('.dot-navigator');
const dot = dotNavigator.querySelectorAll('.bottom-button');

console.log(dot)



function printImg(event) {
    const clickedBtn = event.target.className;
    if (clickedBtn === 'left-button') {
        const currentImgNumber = carouselImg.src.match(/image-./)[0][6]
        carouselImg.src = `images/image-${currentImgNumber === '1' ? '5' : currentImgNumber - 1}.png`
    } else if (clickedBtn === 'right-button') {
        const currentImgNumber = carouselImg.src.match(/image-./)[0][6]
        carouselImg.src = `images/image-${currentImgNumber === '5' ? '1' : parseInt(currentImgNumber) + 1}.png`
    } else {
        const clickedDot = event.target.id
        carouselImg.src = `images/image-${clickedDot}.png`
    }
}


function inIt() {
    leftBtn.addEventListener('click', printImg);
    rightBtn.addEventListener('click', printImg);
    for (let i = 0 ; i < 5; i++) {
        dot[i].addEventListener('click', printImg);
    }
}

inIt()
