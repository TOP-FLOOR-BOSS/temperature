const calculateTemp = () => {
    const numberTemp = document.getElementById("number").value;
    // console.log( numberTemp);

    const tempSelected = document.getElementById("types");
    const valueTemp = types.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp)

    const celToFah = (cels) => {
      let fahrenheit = Math.round((cels * 9) / 5 + 32);
      return fahrenheit;
    }

    const fehToCel = (fehr) => {
      let celsius = Math.round((fehr - 32) * 5/ 9);
      return celsius;
    }

    let result;
    resultContainer.style.color = "white";
    
    if (valueTemp == "cel") {
      result = celToFah(numberTemp);
      document.getElementById(
        "resultContainer"
      ).innerHTML = `= ${result} °Fahrenheit`;
    } else {
      result = fehToCel(numberTemp);
      document.getElementById(
        "resultContainer"
      ).innerHTML = `= ${result} °Celsius`;
    }
  };