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




