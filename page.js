const aFileNames = ['images/1.jpeg', 'images/2.jpeg', 'images/3.jpeg', 'images/4.jpeg', 'images/5.jpeg', 'images/6.jpeg']
let currentImageIndex = 0;

function updateImage(bNext) {
    currentImageIndex = (currentImageIndex + (bNext ? 1 : -1) + aFileNames.length) % aFileNames.length;
    document.getElementById('imageHolder').setAttribute('src', aFileNames[currentImageIndex]);
}