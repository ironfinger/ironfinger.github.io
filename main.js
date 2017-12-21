$(document).ready(function() {
    $('.text').text(getTime());
});


function getTime() {
    var date = new Date();
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var hours = date.getHours();
    if (hours < 10) {
        hours =  "0" + hours;
    }

    var time = hours + ":" + minutes;
    return time;
}
