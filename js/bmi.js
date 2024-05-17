<script>
function calculateBMI() {
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  
  var bmi = weight / Math.pow(height / 100, 2);
  bmi = bmi.toFixed(2); // round BMI to 2 decimal places
  
  document.getElementById("bmiResult").innerHTML = bmi;
}
</script>
When the "Calculate" button is clicked, the calculateBMI() function is called, which calculates the BMI using the entered height and weight values. The result is then displayed in the <span> element with the id "bmiResult".






