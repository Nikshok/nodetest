var rowCounter = 1;

function addRow() {

    var table = document.getElementById('myTable');
    var row = table.insertRow(rowCounter);

    var cell = row.insertCell(0);
    cell.innerHTML = rowCounter.toString();

    for (var counter = 1; counter < 5; counter++) {
        var input = document.getElementById('input_' + (counter)).value;
        var cell = row.insertCell(counter);
        cell.innerHTML = input;

      }

    rowCounter++;

}
