function convertToFar() {
    const celsiusInput = document.getElementById('celsius');
    const resultElement = document.getElementById('result');

    if (celsiusInput.value === '') {
        alert('Please enter a temperature in Celsius.');
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9 / 5) + 32;

    resultElement.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
}
