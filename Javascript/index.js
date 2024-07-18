//ini javascript

 function updateResult(){
    let weightValue = document.getElementById('input-berat-badan').value;
    console.log(weightValue);
    weightValue != null || weightValue != ''
       ? document.getElementById('bmi-result').innerHTML = weightValue
       : alert('Inputan anda kosong');
    }

    function calculateBMI() {
        // Get the weight and height from the input fields.
        var weight = document.getElementById("input-berat-badan").value;
        var height = document.getElementById("input-Tinggi-Badan").value;
      
        // Convert height from centimeters to meters.
        height = height / 100;
      
        // Calculate the BMI.
        var bmi = weight / (height * height);
      
        // Round the BMI to two decimal places.
        bmi = bmi.toFixed(2);
      
        // Display the BMI in the result field.
        document.getElementById("bmi-result").innerHTML = bmi;
      
        // Determine the BMI category and display it.
        var category = "";
        if (bmi < 18.5) {
          category = "Kekurangan Berat Badan";
        } else if (bmi >= 18.5 && bmi < 25) {
          category = "Normal (ideal)";
        } else if (bmi >= 25 && bmi < 30) {
          category = "Kelebihan Berat Badan";
        } else {
          category = "Kegemukan (Obesesitas)";
        }
        document.getElementById("category-result").innerHTML = "Anda " + category;
    }
