let num = 1;
let generalContainer = document.querySelector("body");
setInterval(() => {
    num = getNumber(num);
    var img = "url('./img/00" + num + ".jpg')";
    generalContainer.style.backgroundImage = img;
}, 5000);

function getNumber(num) {
    if (num < 4) {
        return num + 1;
    } else {
        return 1;
    }
}


