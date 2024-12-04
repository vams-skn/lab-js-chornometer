const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = min[0];
  minUniElement.textContent = min[1];
}

function printSeconds() {
  const sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = sec[0];
  secUniElement.textContent = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = chronometer.split();
  const newLi = document.createElement('li');
  newLi.innerHTML = split;
  splitsElement.appendChild(newLi);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  if (btnLeftElement.className.includes('stop')) {
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  if (btnLeftElement.className.includes('stop')) {
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className.includes('start')){
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  }
  else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className.includes('reset')){
    chronometer.reset();
    printTime();
    clearSplits();
  }
  else {
    printSplit();
  }
});
