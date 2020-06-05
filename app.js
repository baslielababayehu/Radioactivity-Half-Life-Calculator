//Define UI items
const calculateButton = document.querySelector('.calculate-button');
const whatAreYouSolvingFor = document.querySelector('.solve-for-options');

//load all event listeners
loadAllEvenlisteners();
function loadAllEvenlisteners() {
  calculateButton.addEventListener('click', performCalculation);
  whatAreYouSolvingFor.addEventListener('click', displayCorrectInputGroups);
}

//
function performCalculation() {}

function displayCorrectInputGroups(e) {
  console.log(e.target.lastChild);
  if (e.target.classList.contains('option-time')) {
    inputGroup(time, halfLife, startAmount, endAmount);
    let cardBody = document.querySelector('.card-main');
    cardBody.appendChild(inputGroupDisplay);
  } else if (e.target.lastChild.classList.contains('option-halfLife')) {
    inputGroup(halfLife, time, startAmount, endAmount);
    let cardBody = document.querySelector('.card-main');
    cardBody.appendChild(inputGroupDisplay);
  } else if (e.target.classList.contains('option-startAmount')) {
    inputGroup(startAmount, halfLife, time, endAmount);
    let cardBody = document.querySelector('.card-main');
    cardBody.appendChild(inputGroupDisplay);
  } else if (e.target.classList.contains('option-endAmount')) {
    inputGroup(endAmount, halfLife, startAmount, time);
    let cardBody = document.querySelector('.card-body');
    cardBody.appendChild(inputGroupDisplay);
  }
}

function inputGroup(
  solveForName,
  requiredParameter1,
  requiredParameter2,
  requiredParameter3
) {
  const inputGroupDisplay = document.createElement('div');
  inputGroupDisplay.className = `${solveForName}-solveForoptionList`;

  let inputGroupHTML =
    '<div class="input-group">' +
    '<div class="input-group-prepend">' +
    `<span class="input-group-text">${requiredParameter1}</span>` +
    '</div>' +
    '<input type="text" class="form-control rounded-right" placeholder=""required/>' +
    '  <div class="invalid-feedback">' +
    ' Please choose a username.' +
    '</div>' +
    '</div>';
  inputGroupDisplay.appendChild(inputGroupHTML);
  inputGroupHTML =
    '<div class="input-group">' +
    '<div class="input-group-prepend">' +
    `<span class="input-group-text">${requiredParameter2}</span>` +
    '</div>' +
    '<input type="text" class="form-control rounded-right" placeholder=""required/>' +
    '  <div class="invalid-feedback">' +
    ' Please choose a username.' +
    '</div>' +
    '</div>';
  inputGroupDisplay.appendChild(inputGroupHTML);
  inputGroupHTML =
    '<div class="input-group">' +
    '<div class="input-group-prepend">' +
    `<span class="input-group-text">${requiredParameter3}</span>` +
    '</div>' +
    '<input type="text" class="form-control rounded-right" placeholder=""required/>' +
    '  <div class="invalid-feedback">' +
    ' Please choose a username.' +
    '</div>' +
    '</div>';
  inputGroupDisplay.appendChild(inputGroupHTML);
  return inputGroupDisplay;
}
