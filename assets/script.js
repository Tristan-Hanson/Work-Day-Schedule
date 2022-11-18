var timer= null;

$(document).ready(function(){
    timer = setInterval(function(){
        $('#currentDay').text(moment().format("MMM DD, YYYY h:mm:ss a"));
    },1000);
});

console.log(moment())
