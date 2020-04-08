
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

const columnTypeSelect = () => {

    var idx = document.getElementById('dateType').value.indexOf('(', 0) + 1;
    const input = document.getElementById('dateType').setSelectionRange(idx, idx);
    input.focus();
}

const newColumnMaker = () => {

    let tableMaker = document.getElementById('tableMaker').children.item(0);
    let newClone = tableMaker.children.item(1).cloneNode(true);
    tableMaker.appendChild(newClone);
  
    
}