var timer= null;

$(document).ready(function(){
    timer = setInterval(function(){
        $('#currentDay').text(moment().format("MMM DD, YYYY h:mm:ss a"));
    },1000);
});

const currTime=moment().format('HH')
console.log(currTime)

const timeClock = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
const milTime= [9, 10, 11, 12, 13, 14, 15, 16, 17]
const container = $('.container')

for(var i=0; i<timeClock.length; i++){
    let timeBlock = $('<div>').addClass('row time-block')
    let timeLabel= $('<h4>').addClass('col-2 hour').text(timeClock[i])
    let textArea= $('<textarea>')
    let saveBtn= $('<button>').addClass('col-1 saveBtn').text('Save')


    if (currTime < milTime[i]) {
        textArea.addClass('col-4 future');
    } else if (currTime == milTime[i]) {
        textArea.addClass('col-4 present');
    } else {
        textArea.addClass('col-4 past');
    };

    container.append(timeBlock)
    timeBlock.append(timeLabel, textArea, saveBtn)
}

