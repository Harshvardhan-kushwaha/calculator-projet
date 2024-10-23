function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculateResult() {
    let display = document.getElementById('display').value;
    try {
      document.getElementById('display').value = eval(display);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  