
let newClone = document.getElementById('tableMaker').children.item(0).children.item(1).cloneNode(true);

const newColumnMaker = () => {
    document.getElementById('tableMaker').children.item(0).appendChild(newClone.cloneNode(true));
}

const getTableTypeString = (element) => {
    return element.parentNode.parentNode.children.item(1).firstElementChild.value;
}

const tableSqlMaker = () => {

    let tableMaker = document.getElementById('tableMaker').children.item(0);
    let tableName = document.getElementById('tableName').value;

    //ForSave
    //var rowList = [[], [], [], [], [], [], [], [], [], []];
    var result = "&ensp;CREATE TABLE " + tableName + "(<br>";
 
    for (var i = 1; i < tableMaker.children.length; i++) {
        let row = tableMaker.children.item(i);
        result += "&ensp;&emsp;";
        for (var j = 0; j < row.children.length; j++) {
            if (row.children.item(j).children.item(0).getAttribute("type") == "checkbox"
                && row.children.item(j).children.item(0).checked == true) {
                switch (row.children.item(j).headers) {
                    case "nn": result = result + "NOT NULL "; break;
                    case "uq": result = result + "UNIQUE "; break;
                    case "b": result = result + "BINARY "; break;
                    case "zf": result = result + "(Input Size Number) ZEROFILL "; break;
                    case "ai": result = result + "AUTO_INCREMENT "; break;
                    case "g": result = result + "GENERATED ALWAYS AS (Input your data on here (ex lastName + firstName)) "; break;
                }
               // rowList[j].push(row.children.item(j).children.item(0).checked);
            }
            else if (row.children.item(j).children.item(0).getAttribute("type") == "text") {
                result = result + row.children.item(j).children.item(0).value + " ";
                //rowList[j].push(row.children.item(j).children.item(0).value);
            }
        }
        result += ",<br>";
    }
    alert(document.getElementById("resultSql").value);
    result = result.slice(0, result.length - 5) + "<br>&ensp;);";
    document.getElementById("resultSql").innerHTML = result;
}


const checkBoxClear = (element) => {
    element = element.parentNode.parentNode;
    for (var i = 2; i < element.children.length - 1; i++) {
        element.children.item(i).firstElementChild.checked = false;
    }
}

const columnTypeSelect = (element) => {
    checkBoxClear(element);
    if (element.value != 'VARCHAR()' && element.value != 'DECIMAL()')
        return;
    var idx = element.value.indexOf('(', 0) + 1;
    const input = element.setSelectionRange(idx, idx);
    input.focus();
    
}

const columnDelete = (element) => { element.parentNode.parentNode.remove(); }

const pkCheckboxClick = (element) => {
    if (element.checked == false)
        return;
    element.parentNode.nextElementSibling.firstChild.checked = true;
}

const nnCheckboxClick = (element) => {
    var pkElement = element.parentNode.previousElementSibling.firstChild;
    if (element.checked == false && pkElement.checked == true) {
        pkElement.checked = false;
    }
}


const bCheckboxClick = (element) => {
    if (element.checked == false)
        return;
    element.checked =
        getTableTypeString(element).indexOf("VARCHAR(") == -1
            ? false : true;
}


const unzfCheckboxClick = (element) => {
    
    if (element.checked == false)
        return;

    let dataType = getTableTypeString(element);
    if (dataType.indexOf("INT") == -1 && dataType.indexOf("DECIMAL") == -1) 
        element.checked = false;
    
}


const aiAndgCheckboxClick = (element) => {

    if (element.checked == false) {
        return;
    }
    var parent = element.parentNode;
    if (getTableTypeString(element).indexOf("INT") == -1 && parent.headers == 'ai' && element.checked == true) {
        element.checked = false;
        return;
    }
    else
    {
        (parent.headers == 'ai' ?
            parent.nextElementSibling : parent.previousElementSibling).firstChild.checked = false;
    }
}