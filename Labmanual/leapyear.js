

function leep(year) {
  if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    alert("leap year");
  } else {
    alert("not leap year");
  }
}

let year = parseInt(prompt("Enter year"));
leep(year);
