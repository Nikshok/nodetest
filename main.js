/**
 * Created by smalashta on 3/9/2017.
 */
(function() {
    'use strict';

    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "http://localhost:3001/users";


    xhr.open(method, url, true);

    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.send();

})();