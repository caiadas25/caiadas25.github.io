const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
//^ Grabs the clock hands by their classes

function setDate(){
    const now = new Date(); //gets the current full date using the JS Date object.

    const seconds = now.getSeconds(); //gets the current second
    const secondsDegrees = ((seconds/60) * 360) + 90; //gets the number of degrees the seconds hand should rotate at each tick
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //applies the transform using the degrees calculated for each tick

    const minutes = now.getMinutes(); //gets the current minute
    const minutesDegrees = ((minutes/60) * 360) + 90; //gets the number of degrees the minutes hand should rotate at each tick
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; //applies the transform using the degrees calculated for each tick

    const hours = now.getHours(); //gets the current hour
    const hoursDegrees = ((hours/12) * 360) + 90; //gets the number of degrees the hour hand should rotate at each tick
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; //applies the transform using the degrees calculated for each tick
}

setInterval (setDate, 1000); // gets the current date every 1000ms