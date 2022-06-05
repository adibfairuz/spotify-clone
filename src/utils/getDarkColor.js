// from https://stackoverflow.com/questions/20114469/javascript-generate-random-dark-color#answer-20114692

function getDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}

export default getDarkColor