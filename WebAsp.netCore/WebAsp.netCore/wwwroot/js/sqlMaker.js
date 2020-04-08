
let newClone = document.getElementById('tableMaker').children.item(0).children.item(1).cloneNode(true);

const tableScript = () => {

    let tableMaker = document.getElementById('tableMaker').children.item(0);
    let tableName = document.getElementById('tableName').value;

    var rowList = [[],[],[],[],[],[],[],[],[],[]];
    for (var i = 1; i < tableMaker.children.length; i++) {
        let row = tableMaker.children.item(i);
        for (var j = 0; j < row.children.length; j++) {
            if (row.children.item(j).children.item(0).getAttribute("type") == "checkbox"){
                rowList[j].push(row.children.item(j).children.item(0).checked);
            }
            else if (row.children.item(j).children.item(0).getAttribute("type") == "text") {
                rowList[j].push(row.children.item(j).children.item(0).value);
            }
        }
    }

    var result = "CREATE TABLE " + tableName + "(" + rowList[0] + " " + rowList[1] + ");";
    alert(result);
}

const bCheckboxClick = (element) => {
    if (element.checked == false)
        return;
    element.checked =
        element.parentNode.parentNode.children.item(1).firstElementChild.value.indexOf("VARCHAR(") == -1
            ? false : true;
}


const columnTypeSelect = (element) => {
    bCheckboxClick(element.parentNode.parentNode.children.item(5).firstElementChild);
    var idx = element.value.indexOf('(', 0) + 1;
    const input = element.setSelectionRange(idx, idx);
    input.focus();
    
}

const columnDelete = (element) => { element.parentNode.parentNode.remove(); }

const newColumnMaker = () => { document.getElementById('tableMaker').children.item(0).appendChild(newClone.cloneNode(true)); }

const pkCheckboxClick = (element) => {
    if (element.checked == false)
        return;
    element.parentNode.nextElementSibling.firstChild.checked = true;
}

const nnCheckboxClick = (element) => {
    var pkElement = element.parentNode.previousElementSibling.firstChild;
    if (element.checked == false && pkElement.checked == true) {
        pkElement.checked = false;
        return;
    }
}


const aiAndgCheckboxClick = (element) => {
 
    if (element.checked == false) {
        return;
    } 
    var parent = element.parentNode;
    (parent.headers == 'ai' ?
        parent.nextElementSibling : parent.previousElementSibling).firstChild.checked = false;
}