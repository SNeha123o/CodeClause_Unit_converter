function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputValue;
  
    if (inputUnit === outputUnit) {
      outputValue = inputValue;
    } else if (inputUnit === "cm") {
      if (outputUnit === "m") {
        outputValue = inputValue / 100;
      } else if (outputUnit === "km") {
        outputValue = inputValue / 100000;
      }
    } else if (inputUnit === "m") {
      if (outputUnit === "cm") {
        outputValue = inputValue * 100;
      } else if (outputUnit === "km") {
        outputValue = inputValue / 1000;
      }
    } else if (inputUnit === "km") {
      if (outputUnit === "cm") {
        outputValue = inputValue * 100000;
      } else if (outputUnit === "m") {
        outputValue = inputValue * 1000;
      }
    }
  
    document.getElementById("outputValue").value = outputValue;
  }