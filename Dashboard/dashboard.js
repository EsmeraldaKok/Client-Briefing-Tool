//tabs 
const tabButtons = document.querySelectorAll('.tab_button');

tabButtons.forEach(button => {
  button.addEventListener('click', event => {
    const tabContent = document.querySelector(`#${event.target.id}_content`);
    const otherTabs = document.querySelectorAll(`.tab_content:not(#${event.target.id}_content)`);

    tabContent.style.display = 'flex';
    otherTabs.forEach(tab => tab.style.display = 'none');
  });
});


//calendar

let initialDate = new Date();
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();


let currentMonthInt = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(currentDate);


let calendarYearMonth = document.body.querySelector(".calendar_month_year");
let calendarDays = document.body.querySelector(".calendar_days");


calendarYearMonth.innerHTML = `<strong>${currentMonthInt}</strong> ${currentYear}`


document.body.onload = fillCalendarCurrentMonth(currentYear, currentMonth);
 
function fillCalendarCurrentMonth (year, month) {
    let firstDayOfMonth = new Date(year, month, 1);
    let firstDayOfMonthWeekday = firstDayOfMonth.getDay(); //define the week day of the first day given month (0-6)
    let lastDayOfMonth = new Date(year, month + 1, 0); //define last day of given month (this will be a day number 0 of next month)


for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        let dateElement = document.createElement("p");
        let dateContent = document.createTextNode(i);
        dateElement.appendChild(dateContent);
        calendarDays.appendChild(dateElement);
};

 
let calendarFirstDay = document.body.querySelector(".calendar_days p:first-child")
        if (firstDayOfMonthWeekday == 0) {
            calendarFirstDay.style.gridColumn = "7";
        } 
        else {
            calendarFirstDay.style.gridColumn = firstDayOfMonthWeekday;
                    
        };
}


const nextMonthButton = document.getElementById('calendar-next-month');
const previousMonthButton = document.getElementById("calendar-previous-month");

nextMonthButton.addEventListener('click', function (event) {

    previousMonthButton.removeAttribute("disabled"); 

    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++
    };

    
    let alteredMonth = currentDate.setMonth(currentMonth);
    calendarDays.innerHTML = "";
    fillCalendarCurrentMonth(currentYear, currentMonth);
    
    let currentMonthInt = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(alteredMonth);
    calendarYearMonth.innerHTML = `<strong>${currentMonthInt}</strong> ${currentYear}`
});

previousMonthButton.addEventListener('click', function (event) {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--
    };

    let alteredMonth = currentDate.setMonth(currentMonth);
    calendarDays.innerHTML = "";
    fillCalendarCurrentMonth(currentYear, currentMonth);
    let currentMonthInt = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(alteredMonth);
    calendarYearMonth.innerHTML = `<strong>${currentMonthInt}</strong> ${currentYear}`
    
    if (initialDate.getMonth() == currentMonth && initialDate.getFullYear() == currentYear) {
    previousMonthButton.setAttribute("disabled", ""); 
    };
 })