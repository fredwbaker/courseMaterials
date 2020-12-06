const date = new Date();

const renderCalendar = () => {

    
// date.setMonth(1);

// console.log(date.getDate());//this helps determine how many days we need to show for previous days

// date.setMonth(5);//this lets us change the date to check the last day setting

const monthDays = document.querySelector(`.days`);

const lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();//getDate() pulls current date, so we can use lastDay in our for loop in line 39 for lastDay

const firstDayIndex = date.getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  console.log(lastDayIndex);
// const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

// console.log(lastDayIndex); //to find last day of month (index)

const nextDays = 11 - lastDayIndex - 1;
// const nextDays = 7 - lastDayIndex - 1;//his doesn't show all days

const months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
];

document.querySelector(`.date h1`).innerHTML
=months[date.getMonth()];

document.querySelector(`.date p`).innerHTML
= new Date().toDateString();

let days = ``;

for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

// for(let x = firstDayIndex; x > 0; x--){
//     days += `<div class="prev date">${prevLastDay - x +1}</div>`;
// }

for(let i = 1; i <= lastDay; i++) {
    if(i=== new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`;
    } else{
        days += `<div>${i}</div>`;
        // monthDays.innerHTML = days; // moved to nextDays  
    }
}

for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }


// for(let j =1; j <= nextDays; j++){
//     days += `<div class="nextDate">${j}</div>`;
//     monthDays.innerHTML = days;
// }



}

document.querySelector(`.prev`).addEventListener(`click`,()=>{
    date.setMonth(date.getMonth() -1)
    renderCalendar();
})

document.querySelector(`.next`).addEventListener(`click`,()=>{
    date.setMonth(date.getMonth() +1)
    renderCalendar();
})

renderCalendar();