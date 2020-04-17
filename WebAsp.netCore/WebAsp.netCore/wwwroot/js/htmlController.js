
const openPage = (element) => {
    element.nextElementSibling.style.display =
        (element.nextElementSibling.style.display == 'block' ? 'none' : 'block');
    element = element.style.display =
        (element.style.display == 'block' ? 'none' : 'block');
}

const closePage = (element) => {
    openPage(element.parentNode.parentNode.previousElementSibling);
}

const cookieParser = (element) => {
    var cookie = document.cookie;
}

function getCookie() {

    var decodedCookie = document.cookie;
    var ca = decodedCookie.split('=');
    var tableName = ca[0];
    var el = ca[1].split('/');
    var tableType = el[0];
    var count = tableType == "MySQL" ? 8 : 5;

    var idx = 0;
    var rowList = [[], [], [], [], [], [], [], [], [], []];

    var str = "";
    for (var i = 1; i < el.length; i++) {
        rowList[idx++ % count].push(el[i]);
    }
    return "";
}