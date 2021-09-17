// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// let el9 = $('input[data-time="9"]')

let currentDayEl = $('#currentDay');
console.log(currentDayEl);

currentDayEl.text(
    moment().format("dddd, MMMM Do, YYYY")
)

    // Make a current day el and add a moment to it displaying the day.

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

    //create timebolocks in HTML (using bootstrap?)

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

    // style timeblocks here, using conditionals based on current time (re: moment)

    let timeBlockEl = $('[class="form-control"]');
    console.log(timeBlockEl);

    for (let i = 0; i < timeBlockEl.length; i++){
       if(timeBlockEl[i].dataset.time*1 < moment().format("H")*1){
        timeBlockEl[i].style.backgroundColor = "gray";
       };

       if (timeBlockEl[i].dataset.time*1 === moment().format("H")*1){
        timeBlockEl[i].style.backgroundColor = "green";
       }
       
   //^Why did I have to *1 to make this work??!!!?
    }

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock

    //create an eventlistener - on click of save button, save text to local storage, set that text to placeholder text

// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist