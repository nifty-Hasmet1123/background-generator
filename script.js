// add event listener on both inputs
// if the event listener is process, show the background color property and attributes
// add additional settings if the event listener once click on different background it will change the whole background as well

const input1 = document.getElementById("input-color1");
const input2 = document.getElementById("input-color2");

const displayColorText = (color1, color2) => {
    const h3 = document.querySelector("h3");
    h3.innerHTML = `Color 1: ${color1} </br>Color 2: ${color2}`;
}

const eventListeners = () => {
    displayColorText(input1.value, input2.value);

    input1.addEventListener("input", () => {
        const changeValue = input1.value;
        displayColorText(changeValue, input2.value);
        document.body.style.background = `linear-gradient(to right, ${changeValue}, ${input2.value})`;
    })

    input2.addEventListener("input", () => {
        const changeValue = input2.value;
        displayColorText(input1.value, changeValue);
        document.body.style.background = `linear-gradient(to right, ${input1.value}, ${changeValue})`;
    }) 

}

eventListeners();