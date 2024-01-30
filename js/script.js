const nameAndSurname = document.querySelector("#passengername")
const kmTraveled = document.querySelector("#distancetraveled");
const ageRange = document.querySelector("#passengerage")
const buttonElement = document.querySelector("#contentbutton")

const priceKilometer = 0.21;
const priceTravel = kmTraveled * priceKilometer
const prezzoMinori = priceTravel / 100 * 20
const prezzoSenior = priceTravel / 100 * 40

buttonElement.addEventListener("click", function () {
    document.getElementById("passengercostactive").innerHTML = priceTravel
})