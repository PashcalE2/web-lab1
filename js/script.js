const num_re = /^-?\d+(?:[\.,]\d+)?$/m
const XMin = -5;
const XMax = 3;
const YMin = -3;
const YMax = 3;

function isWrongNumber(str_num) {
  return num_re.exec(str_num) == null
}

function isWrongX(element) {
  if (isWrongNumber(element.value)) {
    return true;
  } else {
    var num = parseFloat(element.value.replace(",", "."));
    return num <= XMin || num >= XMax;
  }
  return false;
}

function isWrongY(element) {
  if (isWrongNumber(element.value)) {
    return true;
  } else {
    var num = parseFloat(element.value.replace(",", "."));
    return num <= YMin || num >= YMax;
  }
  return false;
}

function onXInput() {
  var X = document.getElementById("X");

  if (X.value.length && isWrongX(X)) {
    X.className = "wrong-field";
  } else if (X.value.length) {
    X.className = "correct-field";
  } else {
    X.className = "empty-field";
  }
}

function onYInput() {
  var Y = document.getElementById("Y");

  if (Y.value.length && isWrongY(Y)) {
    Y.className = "wrong-field";
  } else if (Y.value.length) {
    Y.className = "correct-field";
  } else {
    Y.className = "empty-field";
  }
}

function onSubmitForm() {
  event.preventDefault();
  var X = document.getElementById("X");
  var Y = document.getElementById("Y");

  var RArray = Array.from(document.getElementsByName("r-input"));
  var R = RArray[0];
  for (var el of RArray) {
    if (el.checked) {
      R = el;
      break;
    }
  }

  var isError =
    isWrongX(X) ||
    isWrongY(Y);

  if (isError) {
	  return isError;
  }

  $("#send").attr("disabled", true);

  console.log($("#dataform").serialize() + "&timezone=" + new Date().getTimezoneOffset());
  $.ajax({
    url: "php/serverCalc.php",
    method: "POST",
    data: $("#dataform").serialize() + "&timezone=" + new Date().getTimezoneOffset(),
    dataType: "html",

    success: function(data){
      console.log(data);
      $("#send").attr("disabled", false);
      $("#result-table>tbody").html(data);
    },

    error: function(error){
      console.log(error);
      $("#send").attr("disabled", false);
    },
  });
}

function load() {
  $.ajax({
    url: "php/getTable.php",
    method: "GET",
    dataType: "html",

    success: function(data){
      console.log(data);
      $("#result-table>tbody").html(data);
    },

    error: function(error){
      console.log(error);
    },
  });
}

function onClickLoad() {
  event.preventDefault();

  load();
}

function clearTable() {
  $("#clear").attr("disabled", true);

  $.ajax({
    url: "php/clearTable.php",
    method: "GET",
    dataType: "html",

    success: function(data){
      console.log(data);
      $("#clear").attr("disabled", false);
      $("#result-table>tbody").html(data);
    },

    error: function(error){
      console.log(error);
      $("#clear").attr("disabled", false);
    },
  });
}

function onClickClear() {
  event.preventDefault();

  clearTable();
}

load();
