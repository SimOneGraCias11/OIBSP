let result = '';

function clearResult() {
  result = '';
  updateScreen();
}

function appendToResult(value) {
  result += value;
  updateScreen();
}

function calculateResult() {
  try {
    result = eval(result);
    updateScreen();
  } catch (error) {
    result = 'Error';
    updateScreen();
  }
}

function updateScreen() {
  document.getElementById('result').innerText = result;
}
