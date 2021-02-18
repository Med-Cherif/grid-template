const toggleMenu = () => {
    const menuBtn = document.querySelector('.toggleMenu .fa')
    const nav = document.querySelector('.site-nav ul')

    if (menuBtn.classList.contains('fa-bars')) {
        menuBtn.classList.remove('fa-bars')
        menuBtn.classList.add('fa-times')
    } else {
        menuBtn.classList.remove('fa-times')
        menuBtn.classList.add('fa-bars')
    }

    nav.classList.toggle('active')
}

const showAndHidePlaceholder = () => {

    const inputAndTextarea = []
    inputAndTextarea.push(...document.querySelectorAll('input'), document.querySelector('textarea'))

    return inputAndTextarea
}

for (let i = 0; i < showAndHidePlaceholder().length; i++) {

    showAndHidePlaceholder()[i].onfocus = () => {
        showAndHidePlaceholder()[i].setAttribute('data-placeholder', showAndHidePlaceholder()[i].getAttribute('placeholder'))
        showAndHidePlaceholder()[i].setAttribute('placeholder', '')
    }

    showAndHidePlaceholder()[i].onblur = () => {
        showAndHidePlaceholder()[i].setAttribute('placeholder', showAndHidePlaceholder()[i].getAttribute('data-placeholder'))
        showAndHidePlaceholder()[i].setAttribute('data-placeholder', '')
    }
}
