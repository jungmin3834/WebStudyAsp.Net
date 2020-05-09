const getSqlType = () => { return document.getElementById('sqlType').value; }

var currentTable = 'MySQL';


const tableNewColumnMaker = (element) => {
    var clone = null;
    switch (getSqlType()) {
        case "MySQL": clone = getMySqlTableRow(); break;
        case "MsSQL": clone = getMySqlTableRow(); break;
        case "Oracle": clone = getMySqlTableRow(); break;
        case "SQLServer": clone = getMySqlTableRow(); break;
    }
    element.parentNode.parentNode.parentNode.appendChild(clone.cloneNode(true));
}

const tableColumnDelete = (element) => { element.parentNode.parentNode.remove(); }

const getDataTypeOfRow = (element) => {
    return element.parentNode.parentNode.children.item(1).firstElementChild.value;
}

const rowCheckBoxClear = (element) => {
    element = element.parentNode.parentNode;
    for (var i = 2; i < element.children.length - 1; i++) {
        element.children.item(i).firstElementChild.checked = false;
    }
}

const dataTypeChangeCheck = (element) => {
    rowCheckBoxClear(element);
    if (element.value != 'VARCHAR()' && element.value != 'DECIMAL()')
        return;
    var idx = element.value.indexOf('(', 0) + 1;
    const input = element.setSelectionRange(idx, idx);
    input.focus();

}

const primaryKeyCheckBoxClick = (element) => {
    if (element.checked != false)
         element.parentNode.nextElementSibling.firstChild.checked = true;
}

const notNullCheckBoxClick = (element) => {
    var pkElement = element.parentNode.previousElementSibling.firstChild;
    if (element.checked == false && pkElement.checked == true) {
        pkElement.checked = false;
    }
}

const binaryCheckBoxClick = (element) => {
    if (element.checked != false)
        element.checked = getDataTypeOfRow(element).indexOf("VARCHAR(") == -1 ? false : true;
}

const unsignIntAndZeroFillCheckBoxClick = (element) => {

    if (element.checked == false)
        return;

    let dataType = getDataTypeOfRow(element);
    if (dataType.indexOf("INT") == -1 && dataType.indexOf("DECIMAL") == -1)
        element.checked = false;

}

const autoIncreaseCheckBoxClick = (element) => {

    if (element.checked == false)
        return;
    
    var parent = element.parentNode;
    if (getDataTypeOfRow(element).indexOf("INT") == -1 && parent.headers == 'ai' && element.checked == true) {
        element.checked = false;
        return;
    }
    else {
        (parent.headers == 'ai' ?
            parent.nextElementSibling : parent.previousElementSibling).firstChild.checked = false;
    }
}

const getMySqlTableRow = () => {
    var createTable;
    createTable = document.createElement('tr')
    createTable.innerHTML =
        '<td headers="cname"> <input type="text" value="" size="10" /></td> ' +
        '<td headers="dateType"> ' +
        '<input type="text" size="10" list="typelist" value="" /> ' +
        '<datalist id="typelist"> ' +
        '<option value="VARCHAR()">VARCHAR(SIZE)</option> ' +
        '<option value="INT">INT</option> ' +
        '<option value="DECIMAL()">DECIMAL(SIZE)</option> ' +
        '<option value="DATETIME">DATETIME</option> ' +
        '<option value="BLOB">BLOB</option> ' +
        '</datalist> </td> ' +
        '<td headers="pk"><input type="checkbox" onclick="primaryKeyCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="nn"><input type="checkbox" onclick="notNullCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="uq"><input type="checkbox" size="10" style="float:left;"></td> ' +
        '<td headers="b"><input type="checkbox" onclick="binaryCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="un"><input type="checkbox" onclick="unsignIntAndZeroFillCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="zf"><input type="checkbox" onclick="zfCheckboxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="ai"><input type="checkbox" onclick="autoIncreaseCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="g"><input type="checkbox" onclick="autoIncreaseCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="deleteButton"><input type="button" onclick="tableColumnDelete(this)" value="Delete" size="100" style="float:left;"></td> ';
    return createTable;
}