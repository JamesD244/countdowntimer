let date = new Date();
let end_date = new Date();
end_date.setDate(end_date.getDate() + 9)
let difference = Math.abs(end_date.getTime() - date.getTime()) / 1000;
let numbers = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

// Run every second to update timer
var intervalId = window.setInterval(function(){
    date = new Date();
    let difference = Math.abs(end_date.getTime() - date.getTime()) / 1000;

    numbers.days = Math.floor(difference / 86400);
    difference -= numbers.days * 86400;
    numbers.hours = Math.floor(difference / 3600) % 24;
    difference -= numbers.hours * 3600;
    numbers.minutes = Math.floor(difference / 60) % 60;
    difference -= numbers.minutes * 60;
    numbers.seconds = Math.floor(difference);
    difference -= numbers.seconds * 60;

    for (let num in numbers) {
        if (numbers[num].toString().length == 1) {
            console.log(`${num}: ${numbers[num]}`);
            numbers[num] = twoDigitNumber(numbers[num]);
        }
    }

    $('.days').html(numbers.days);
    $('.hours').html(numbers.hours);
    $('.minutes').html(numbers.minutes);
    $('.seconds').html(numbers.seconds);
  }, 1000);

// Function to add make a 2 digit number
  function twoDigitNumber(number) {
      String(number);
      number = '0' + number;
      parseInt(number);
      return number;
  }