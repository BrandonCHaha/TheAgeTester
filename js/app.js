let checkButton = document.getElementById("checkButton");
let ageInput = document.getElementById("ageInput");
let output = document.getElementById("outputBox");

checkButton.addEventListener("click", () =>
    {
        let ageNum = Number(ageInput.value);
        if (ageNum >= 18){
            output.innerHTML = "You're an adult! Congrats!\n"
        } if (ageNum >= 21){
            output.innerHTML = "You can gamble, smoke, drink, and even rent a car! Wow very nice!\n"
        } if (ageNum >= 62){
            output.innerHTML = "You're officially elligible for social security!\n"
        } if (ageNum > 100){
            output.innerHTML = "You are older than dirt. Be careful.\n"
        } else if (ageNum < 18){
            output.innerHTML = "You ARE a minor. Get on out of here. Go on get. Shoo"
        }

    })
