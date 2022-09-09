
const num_re = /^-?\d+(?:\.\d+)?$/m
const XMin = -5;
const XMax = 3;
const YMin = -3;
const YMax = 3;

function isWrongNumber(str_num) {
  return num_re.exec(str_num) == null
}

function isWrongXVar(str_num) {
  if (isWrongNumber(str_num)) {
    return true;
  } else {
    var num = parseFloat(str_num);
    return num < XMin || num > XMax;
  }
  return false;
}

function isWrongYVar(str_num) {
  if (isWrongNumber(str_num)) {
    return true;
  } else {
    var num = parseFloat(str_num);
    return num < YMin || num > YMax;
  }
  return false;
}

function onXVarInput() {
  var XVar = document.getElementById('XVar');

  if (XVar.value.length && isWrongXVar(XVar.value)) {
    XVar.style.borderColor = 'red';
  } else {
    XVar.style.borderColor = 'black';
  }
}

function onYVarInput() {
  var YVar = document.getElementById('YVar');

  if (YVar.value.length && isWrongYVar(YVar.value)) {
    YVar.style.borderColor = 'red';
  } else {
    YVar.style.borderColor = 'black';
  }
}

/*
function onSubmitForm() {
    var xInput = document.getElementById("x-input");
    if (xInput.value.substr(0, 5) === '#VT#:') {
        setStrangePage(xInput.value.substr(5));
        event.preventDefault();
        return false;
    }
    var yArray = Array.from(document.getElementById("y-table").children);
    var rArray = Array.from(document.getElementById("r-table").children);
    yArray.shift();
    rArray.shift();
    var err = isWrongArrayValues(yArray, yValues) ||
        isWrongArrayValues(rArray, rValues) ||
        xInput.value === '' ||
        isWrongXValue(xInput);
    if (err) {
        event.preventDefault();
        message("Wrong parameters!");
    }
    return !err;
}
*/
