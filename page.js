function yourFunction() {
    document.body.style.background = getRandomColor();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}