/**
 * Write Common Things
 * get common function for input field value
 * get common function for text value
 * */

function getInputAmountById(inputId) {
  const inputFieldValue = document.getElementById(inputId);
  const inputFieldValueString = inputFieldValue.value;
  const fieldValue = parseFloat(inputFieldValueString);

  // reset value
    inputFieldValue.value = "";
    return fieldValue;
}

function getTextValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);

    return textElementValue;
}

function setValueAmount(elementID, newValue) {
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}