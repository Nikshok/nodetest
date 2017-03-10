/**
 * Created by smalashta on 3/9/2017.
 */


    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/users',
        data: {},
        dataType: 'json'
    })
        .done(function (response) {
            console.log(response);
            for (var c = 0; c < response.length; c++) {
                var cells = [];
                var row = table.insertRow(table.rows.length);

                for (var i = 0; i < 5; i++) {
                    cells[i] = row.insertCell(i);
                }
                cells[0].innerHTML = c;
                cells[1].innerHTML = response[c].name;
                cells[2].innerHTML = response[c].soname;
                cells[3].innerHTML = response[c].email;
                cells[4].innerHTML = response[c].birthday;
            }
        });