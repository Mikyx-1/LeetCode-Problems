// 2469. Convert the Temperature
// Tested successfully

let celsius1 = 36.50, celsius2 = 122.11;

let convertTemperature = (celsius) => {
    return [celsius+273.15, celsius*1.8+32.00]
}

console.log(convertTemperature(celsius1));
console.log(convertTemperature(celsius2));