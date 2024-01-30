// const nameAndSurname = document.querySelector("#passengername");
const kmTraveled = document.querySelector("#distancetraveled");
const ageRange = document.querySelector("#passengerage");
const buttonElement = document.querySelector("#contentbutton");


buttonElement.addEventListener("click", function () {
    let finalPassengerName = document.getElementById("passengername").value;

    const priceKilometer = 0.21;
    const priceTravel = kmTraveled.value * priceKilometer
    const priceMinor = priceTravel * 20 / 100
    const priceSenior = priceTravel * 40 / 100

    if (ageRange.value > 0 && ageRange.value < 100) {

        if (ageRange.value < 18) {

            document.getElementById("passengercostactive").innerHTML = (priceTravel - priceMinor).toFixed(2)
            document.getElementById("passengernamefinal").innerHTML = finalPassengerName
            document.getElementById("discountticketactive").innerHTML = "Hai uno sconto del 20%"

        } else if (ageRange.value >= 65) {

            document.getElementById("passengercostactive").innerHTML = (priceTravel - priceSenior).toFixed(2)
            document.getElementById("passengernamefinal").innerHTML = finalPassengerName
            document.getElementById("discountticketactive").innerHTML = "Hai uno sconto del 40%"

        } else {

            document.getElementById("passengercostactive").innerHTML = priceTravel
            document.getElementById("passengernamefinal").innerHTML = finalPassengerName

        }

    } else {

        alert("Dati non corretti")

    }

})
