
const tableScript = () => {

  var tableMaker = document.getElementById('tableMaker').children.item(0);

    var rowList = [[],[],[],[],[],[],[],[],[],[]];
    for (var i = 1; i < tableMaker.children.length; i++) {
        var row = tableMaker.children.item(i);
        for (var j = 0; j < row.children.length; j++) {
            if (row.children.item(j).children.item(0).getAttribute("type") == "checkbox"){
                rowList[j].push(row.children.item(j).children.item(0).checked);
            }
            else if (row.children.item(j).children.item(0).getAttribute("type") == "text") {
                rowList[j].push(row.children.item(j).children.item(0).value);
            }
        }
    }
    alert(rowList[0][0] + " " + rowList[6][0]);
    
}