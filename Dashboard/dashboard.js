//tabs  functionality
const tabButtons = document.querySelectorAll('.tab_button');

tabButtons.forEach(button => {
  button.addEventListener('click', event => {
    const tabContent = document.querySelector(`#${event.target.id}_content`);
    const otherTabs = document.querySelectorAll(`.tab_content:not(#${event.target.id}_content)`);

    tabContent.style.display = 'block';
    otherTabs.forEach(tab => tab.style.display = 'none');
  });
});




let currentMonth;
let currentYear;

function generateCalendar(month, year) {
  currentMonth = month;
  currentYear = year;

  //an array of the days in the month
  const days = [];
  for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
    days.push(i);
  }

  //the calendar 
  const calendarHTML = `
    <div class="calendar">
      <div class="calendar-header">${getMonthName(month)} ${year}</div>
      <div class="calendar-days">
        ${days.map(day => `<div class="calendar-day">${day}</div>`).join('')}
      </div>
    </div>
  `;
  document.querySelector('#calendar-container').innerHTML = calendarHTML;
}

function getMonthName(month) {
  // returns the name of the month (e.g. "January") based on the month number (e.g. 0 for January)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[month];
}

function previousMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  generateCalendar(currentMonth, currentYear);
}

function nextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  generateCalendar(currentMonth, currentYear);
}

// generate the current month's calendar
generateCalendar(new Date().getMonth(), new Date().getFullYear());

// add event listeners to the navigation buttons
document.querySelector('#previous-month-button').addEventListener('click', previousMonth);
document.querySelector('#next-month-button').addEventListener('click', nextMonth);

