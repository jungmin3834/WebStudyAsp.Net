
const openPage = (element) => {
    element.nextElementSibling.style.display =
        (element.nextElementSibling.style.display == 'block' ? 'none' : 'block');
    element = element.style.display =
        (element.style.display == 'block' ? 'none' : 'block');
}

const closePage = (element) => {
    openPage(element.parentNode.parentNode.previousElementSibling);
}


const getAllOfTableSettingList = () => {
    var container = document.getElementById("container");

    for (var i = 0; i < container.children.length; i++) {
        let tableName = container.children.item(i).id;
        var rowList = getTableModelByList(document.getElementById(tableName + 'Table').firstElementChild);
    }
}

const saveErdSetting = () => {
    getAllOfTableSettingList();
}