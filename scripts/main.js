let heading = document.querySelector('h1');
let image = document.getElementById('image-changer');

heading.textContent = 'Toggle images below'

heading.onclick = function () {
    let source = image.getAttribute('src');
    if (source === './images/one.png') {
        image.setAttribute('src', './images/two.png');
    } else {
        image.setAttribute('src', './images/one.png');
    }
}