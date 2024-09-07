function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    document.getElementById('bmi-result').textContent = `Your BMI is: ${bmi}`;
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
}
