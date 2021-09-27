//moment declaration for day of the week, month and day of the month

var topDate = moment().format("dddd, MMMM Do, h:mm a");
$("#currentDay").text(topDate);

//Moment for current time

var currentTime = moment("Saturday, September, 25").format('dddd, MMMM, D, hh:mm:ss');
$("#currentDay").text(topDate);




// Calculates the start of day + 9 to return 9 am
var beforeTime = moment().startOf('day').add(9, "hours");



// timeblocks 

//9AM
var time9am = beforeTime.add(0, "h");
time9am = time9am.format('hh:mm A');
$(".block1").text(time9am);

//10AM
var time10am = beforeTime.add(1, "h")
time10am = time10am.format('hh:mm A')
$(".block2").text(time10am);


//11AM
var time11am = beforeTime.add(1, "h");
time11am = time11am.format('hh:mm A');
$(".block3").text(time11am);


//12PM
var time12pm = beforeTime.add(1, "h");
time12pm = time12pm.format('hh:mm A');
$(".block4").text(time12pm);


//1pm
var time1pm = beforeTime.add(1, "h");
time1pm = time1pm.format('hh:mm A');
$(".block5").text(time1pm);

//2pm
var time2pm = beforeTime.add(1, "h");
time2pm = time2pm.format('hh:mm A');
$(".block6").text(time2pm);


//3PM
var time3pm = beforeTime.add(1, "h");
time3pm = time3pm.format('hh:mm A');
$(".block7").text(time3pm);

//4PM
var time4pm =beforeTime.add(1, "h");
time4pm = time4pm.format('hh:mm A');
$(".block8").text(time4pm);

//5PM
var time5pm = beforeTime.add(1, "h");
time5pm = time5pm.format('hh:mm A');
$(".block9").text(time5pm);

$(document).ready(function() {




function timeUpdater() {
    // get the current time from our API (moment)
        /// this gives us the current time 
    var momentTime = moment().hours();
    // loop onto the time blocks 
        // jquery each method
        $('.block').each(function() {
            // compare current time to time block time 
            var blockTime = parseInt($(this).attr('id')) 
            if (blockTime < momentTime) {
                $(this).addClass('past');
            } else if (blockTime === momentTime) {
                $(this).remove('past');
                $(this).addClass('present')
            }else {
                $(this).remove('past');
                $(this).remove('present')
                $(this).addClass('future')
            }
        })
}
// call the timeUpdater function
timeUpdater();
// set up intervals so that the current time is being checked
// every 15 seconds we update 
var timeUpdate = setInterval(timeUpdater, 15000);


// load the already saved local storage info using class and the id associated with the form input
$('#9 .form-control').val(localStorage.getItem('9'))
$('#10 .form-control').val(localStorage.getItem('10'))
$('#11 .form-control').val(localStorage.getItem('11'))
$('#12 .form-control').val(localStorage.getItem('12'))
$('#13 .form-control').val(localStorage.getItem('13'))
$('#14 .form-control').val(localStorage.getItem('14'))
$('#15 .form-control').val(localStorage.getItem('15'))
$('#16 .form-control').val(localStorage.getItem('16'))
$('#17 .form-control').val(localStorage.getItem('17'))



// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});


// wrap everything inside a document. ready

})



