// // const myName = "Muhammad";
// const input = document.querySelector(".name")
// const btn = document.querySelector(".btn");
// const box = document.querySelector(".span")

// // const myFun = function(num) {
// //     const myArray = input.split("").reverse("");
// //     return myFun(myArray);
// // }
// btn.addEventListener("click", function(e) {
//     const reversed = input.value.split("").reverse("").join("");
//     console.log(reversed);
//     // myArray.innerHTML = "span";
//     box.textContent = reversed;
// })
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = 0
// for (const num of myNum) {
//     sum = sum + myNum;
// }
// console.log(sum);




// 1 Uy Ishi

// const form = document.querySelector(".form"),
//     resultOnFoot = document.querySelector(".result-foot"),
//     resultOnBicycle = document.querySelector(".result-bicycle"),
//     resultOnCar = document.querySelector(".result-car"),
//     resultOnPlane = document.querySelector(".result-plane"),
//     inpNumber = document.querySelector(".number"),
//     button = document.querySelector(".btn");

// let foot = 3.6;
// let bicycle = 20.1;
// let car = 70;
// let plane = 800;
// button.addEventListener("click", function(e) {
//     e.preventDefault();

//     if (inpNumber.value === "") {
//         alert('Enter distance')
//     } else if (inpNumber.value) {
//         const footOnDistnace = Math.round(Number(inpNumber.value / foot));
//         resultOnFoot.textContent = `${footOnDistnace} hours`;

//         const bicycleOnDistnace = Math.round(Number(inpNumber.value / bicycle));
//         resultOnBicycle.textContent = `${bicycleOnDistnace} hours`;

//         const carOnDistnace = Math.round(Number(inpNumber.value / car));
//         resultOnCar.textContent = `${carOnDistnace} hours`;

//         const planeOnDistnace = Math.round(Number(inpNumber.value / plane));
//         resultOnPlane.textContent = `${planeOnDistnace} hours`;
//     } else {
//         console.log("Hato!!!");
//     }
// })

// 2 Uy Ishi
const form = document.querySelector(".form"),
    input = document.querySelector(".inp"),
    resultOnC = document.querySelector(".result-temp"),
    button = document.querySelector(".btn");


button.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value === "") {
        alert("Enter Celcium")
    } else if (input.value) {
        const Faringeyt = Math.round(Number(input.value - 273));
        resultOnC.textContent = `${Faringeyt} in F`
    } else {
        console.log("Hato!!!");
    }
})