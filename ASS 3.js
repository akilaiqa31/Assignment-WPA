const calculateBMI = () => {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  if (weight && height) {
    const bmi = weight / (height / 100) ** 2;
    const bmiResult = document.getElementById('bmi-result');
    bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    if (bmi < 18.5) {
      bmiResult.textContent += ' (Underweight)';
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiResult.textContent += ' (Normal weight)';
    } else if (bmi >= 25 && bmi < 30) {
      bmiResult.textContent += ' (Overweight)';
    } else {
      bmiResult.textContent += ' (Obese)';
    }
    const bmiCategoryCount = document.getElementById('bmi-category-count');
    bmiCategoryCount.textContent = `There are 4 BMI categories.`;
  } else {
    alert('Please enter both weight and height values!');
  }
};
document.getElementById('calculate-bmi').addEventListener('click', calculateBMI);