let button = document.querySelector('button')
let heading = document.querySelector('h1')

function set_user_name() {
    let name = null;
    while (!name) {
        name = prompt('what is your username ?')

        if (!name) {
            alert("Username can't be empty !!")
        } else break;
    }
    localStorage.setItem('name', name)
    heading.textContent = `${name} is signed in ...`
}

button.onclick = function () {
    if (!localStorage.getItem('name')) {
        set_user_name()
    } else {
        let name = localStorage.getItem('name');
        heading.textContent = `${name} welcome back !!`

    }
}