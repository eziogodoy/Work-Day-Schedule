var textArea = $('textarea');
var timeBlock = $('.time-block');
var dailyPlanner = new Array(9);
var dayofWeek = moment().weekday();
var StoredArray = JSON.parse(localStorage.getItem('plansToday'));
var today = moment().format('H');

var todayDisplay = moment().format('dddd, MMMM Do');

var calendarHour;

localStorage.setItem('weekDay', dayofWeek);
//check for the day to be the same day or clears it 
clearCheck(dayofWeek);





//console.log(today);
$('#currentDay').text(todayDisplay);

function getStored() {
    if (Array.isArray(StoredArray)) {
        dailyPlanner = JSON.parse(localStorage.getItem('plansToday'));
    } else {
        return;
    }
}
getStored();
//console.log(dailyPlanner);

function getContent() {
    for (var plan = 0; plan < dailyPlanner.length; plan++) {
        $(`[data-index =${plan}]`).text(dailyPlanner[plan]);
        //console.log($(`[data-index =${plan}]`));
        
    }
}



function getInfo() {
    for (var i = 9; i <=17; i++) {
        var index = i - 9;
        var row = $('<div>').attr('class', 'row time-block');
        var timeEl = $('<div>').attr('class', 'col-2 hour');

        var textEl = $('<textarea').attr('class', 'col-8 textarea description').attr('data-index', index)
        var savenBtn = $('<div>').attr('class', 'col-2 saveBtn').append('<i class="fas fa-save fa-2x"></i>');
        var hourEl; 

        if (i < 12) {
            hourEl = `${i}am`;
            timeEl.attr('data-time', i);
            console.log(timeEl);
        }   else if (i === 12) {
            hourEl = `${i} pm`
            timeEl.attr('data-time', i) 
        }   else {
            hourEl = `${i - 12}pm`
            timeEl.attr('data-time', i)
        }









        timeEl.append(hourEl)
        row.append(timeEl).append(textEl).append(savenBtn);
        $('.container').append(row);
        checkHour();

        // localStorage.getItem(`${dailyPlanner[i].hour}`)

    }
    getContent();
}
getInfo();