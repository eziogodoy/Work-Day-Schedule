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





