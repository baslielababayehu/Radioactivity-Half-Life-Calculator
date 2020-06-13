//Define UI items
const calculateButton = document.querySelector('.calculate-button');
const whatAreYouSolvingFor = document.querySelector('.solve-for-options');
let cardBody = document.querySelector('.card-container');

cardBody.appendChild(
  inputGroup('halfLife', 'Time', 'Start Amount', 'End Amount')
);
cardBody.appendChild(
  inputGroup('startAmount', 'Half Life', 'Time', 'End Amount')
);
cardBody.appendChild(
  inputGroup('endAmount', 'Half Life', 'Start Amount', 'Time')
);

let timeOption = document.querySelector('.original-card');
let halflifeOption = document.querySelector('.halfLife-solveForoptionList');
console.log(halflifeOption.className);
let startAmountOption = document.querySelector(
  '.startAmount-solveForoptionList'
);
let endAmountOption = document.querySelector('.endAmount-solveForoptionList');
//load all event listeners
loadAllEvenlisteners();
function loadAllEvenlisteners() {
  calculateButton.addEventListener('click', performCalculation);
  whatAreYouSolvingFor.addEventListener('click', displayCorrectInputGroups);
}

//hide input groups
halflifeOption.className = 'halfLife-solveForoptionList d-none';
startAmountOption.className = 'startAmount-solveForoptionList d-none';
endAmountOption.className = 'endAmount-solveForoptionList d-none';

function performCalculation() {}

function displayCorrectInputGroups(e) {
  // let halfLife,
  //   time,
  //   startAmount,
  //   endAmount = '';
  if (e.target.classList.contains('option-time')) {
    // console.log(timeOption);
    timeOption.className = 'original-card';
    halflifeOption.className = 'halfLife-solveForoptionList d-none';
    startAmountOption.className = 'startAmount-solveForoptionList d-none';
    endAmountOption.className = 'endAmount-solveForoptionList d-none';
  } else if (e.target.classList.contains('option-halfLife')) {
    halflifeOption.className = 'halfLife-solveForoptionList';
    timeOption.className = 'original-card d-none';
    startAmountOption.className = 'startAmount-solveForoptionList d-none';
    endAmountOption.className = 'endAmount-solveForoptionList d-none';
  } else if (e.target.classList.contains('option-startAmount')) {
    startAmountOption.className = 'startAmount-solveForoptionList';
    halflifeOption.className = 'time-solveForoptionList d-none';
    timeOption.className = 'original-card d-none';
    endAmountOption.className = 'endAmount-solveForoptionList d-none';
  } else if (e.target.classList.contains('option-endAmount')) {
    endAmountOption.className = 'endAmount-solveForoptionList';
    halflifeOption.className = 'halfLife-solveForoptionList d-none';
    startAmountOption.className = 'startAmount-solveForoptionList d-none';
    timeOption.className = 'original-card d-none';
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

  let inputGroupHTML = document.createElement('div');
  inputGroupHTML.innerHTML =
    '<div class="input-group">' +
    '<div class="input-group-prepend">' +
    `<span class="input-group-text">${requiredParameter1}</span>` +
    '</div>' +
    '<input type="text" class="form-control rounded-right" placeholder=""required/>' +
    '  <div class="invalid-feedback">' +
    ' Please choose a username.' +
    '</div>' +
    '</div>';
  // let inputGroupHTMLclone = inputGroupHTML.cloneNode(true);
  // console.log(inputGroupHTML);
  inputGroupDisplay.appendChild(inputGroupHTML);

  inputGroupHTML = document.createElement('div');
  inputGroupHTML.innerHTML =
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
  inputGroupHTML = document.createElement('div');
  inputGroupHTML.innerHTML =
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
