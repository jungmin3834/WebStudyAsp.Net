let menuContent = [
    {title: "Create New Table", name: "Test1"},
    "<hr>"
];

function itemClick(name) {
    console.log(name);
    newTableMaker();
}

const changeParentElementName = (e) => {
    var parent = e.parentNode.parentNode;
    parent.id = e.value;
    parent.lastElementChild.id = e.value + 'Table';
}

const deleteTable = (e) => { e.parentNode.parentNode.parentNode.parentNode.remove(); }

const newTableMaker = () => {
    var createTable;
    createTable = document.createElement('createTable')
    createTable.innerHTML =
        '<div id="" class="tableBody" style="display:block;"> ' +
        '<div class="item" style = "width:100%; border: 2px solid rgba(136, 136, 136, .5); ">&nbsp;Table Name :&nbsp; <input type="text" size="10" oninput="changeParentElementName(this)" /> ' +
        '<div class="dropdown" style=" float:right;"> '+
        '<button>Menu</button> ' +
        '<div class="dropdown-content"> ' +
        '<a href="#" onclick="getCreateTableSQLCode(this)">Create Table SQL</a> ' +
        '<a href="#" onclick="getSelectTableSQLCode(this)">Create Select SQL</a> ' +
        '<a href="#" onclick="deleteTable(this)">Delete SQL Table</a> ' +
        '</div> </div> </div> ' +
        '<div class="item" style="width:100%; border-left: 2px solid rgba(136, 136, 136, .5); border-right: 2px solid rgba(136, 136, 136, .5); "> ' +
        '&nbsp;Description :&nbsp;&nbsp; <input type="text" size="40" /> </div> ' +
        '<table class="stepInput" id="" width="100%" height="100%" border="1" cellpadding="3"> ' +
        '<thead> ' + '<tr> ' + '<th>Column Name ' + '<th>Datatype ' + '<th>PK ' + '<th>NN ' + '<th>UQ ' + '<th>B&nbsp;&nbsp;' + '<th>UN ' + '<th>ZF ' + '<th>AI&nbsp; ' + '<th>G&nbsp;&nbsp;' +
        '<th><input class="stepInput" id="Id_Of_Textbox" style="float:left;" size="100" type="button" value="&nbsp;&nbsp;Add&nbsp;&nbsp;" onclick="tableNewColumnMaker(this)" /> ' +
        '</tr> ' + '<tr> ' +
        '<td headers="cname"> <input type="text" size="10" /></td> ' +
        '<td headers="dateType"> ' +
        '<input type="text" size="10" list="typelist" /> ' +
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