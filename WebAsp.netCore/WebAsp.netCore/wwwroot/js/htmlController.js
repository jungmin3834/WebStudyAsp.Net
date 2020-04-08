
const openPage = (element) => {
    element.nextElementSibling.style.display =
        (element.nextElementSibling.style.display == 'block' ? 'none' : 'block');
    element = element.style.display =
        (element.style.display == 'block' ? 'none' : 'block');
}

const closePage = (element) => {
    openPage(element.parentNode.parentNode.previousElementSibling);
}