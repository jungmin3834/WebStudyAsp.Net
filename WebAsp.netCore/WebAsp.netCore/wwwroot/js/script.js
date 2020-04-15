let menuContent = [
    {title: "Create New Table", name: "Test1"},
    "<hr>"
];

function itemClick(name) {
    console.log(name);
    newTableMaker();
}

const changeParentElementName = (e) => { e.parentNode.name = e.value;}

const deleteTable = (e) => {  e.parentNode.parentNode.remove(); }

const newTableMaker = () => {
    var createTable;
    createTable = document.createElement('createTable')
    createTable.innerHTML =
        '<div id="test" style="display:block; width:650px;"> ' +
        '<div class="item" style = "border: 10px solid rgba(136, 136, 136, .5); " >Table Name:<input type="text" size="10" /></div > ' +
        '<div class="item" style="border: 10px solid rgba(136, 136, 136, .5); "> Description :<input type="text" size="40" /></div>' +
        '<table class="stepInput" id="MySQLtableMaker" tabindex="213" border="1" cellpadding="3"> ' +
        '<thead> ' + '<tr> ' + '<th>Column Name ' + '<th>Datatype ' + '<th>PK ' + '<th>NN ' + '<th>UQ ' + '<th>B&nbsp;&nbsp;' + '<th>UN ' + '<th>ZF ' + '<th>AI&nbsp; ' + '<th>G&nbsp;&nbsp;' +
        '<th><input class="stepInput" id="Id_Of_Textbox" style="float:left;" size="100" type="button" value="&nbsp;&nbsp;Add&nbsp;&nbsp;" onclick="tableNewColumnMaker(this)" /> ' +
        '</tr> ' + '<tr> ' +
        '<td headers="cname"> <input type="text" size="10" /></td> ' +
        '<td headers="dateType"> ' +
        '<input type="text" list="typelist" /> ' +
        '<datalist id="typelist"> ' +
        '<option value="VARCHAR()">VARCHAR(SIZE)</option> ' +
        '<option value="INT">INT</option> ' +
        '<option value="DECIMAL()">DECIMAL(SIZE)</option> ' +
        '<option value="DATETIME">DATETIME</option> ' +
        '<option value="BLOB">BLOB</option> ' +
        '</datalist> ' +
        '</td> ' +
        '<td headers="pk"><input type="checkbox" onclick="primaryKeyCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="nn"><input type="checkbox" onclick="notNullCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="uq"><input type="checkbox" size="10" style="float:left;"></td> ' +
        '<td headers="b"><input type="checkbox" onclick="binaryCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="un"><input type="checkbox" onclick="unsignIntAndZeroFillCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="zf"><input type="checkbox" onclick="zfCheckboxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="ai"><input type="checkbox" onclick="autoIncreaseCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="g"><input type="checkbox" onclick="autoIncreaseCheckBoxClick(this)" size="10" style="float:left;"></td> ' +
        '<td headers="deleteButton"><input type="button" onclick="tableColumnDelete(this)" value="Delete" size="100" style="float:left;"></td> ' +
        '</tr> ' + '</thead> ' + '</table> ' + '</div>';

    document.getElementById('container').appendChild(createTable.firstElementChild);
}