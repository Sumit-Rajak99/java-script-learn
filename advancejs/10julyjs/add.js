document.getElementById("btn1").addEventListener("click", myadd);

function myadd() {
    let num1 = Number(document.getElementById("no1").value);
    let num2 = Number(document.getElementById("no2").value);
    let num3 = Number(document.getElementById("no3").value);
    let num4 = Number(document.getElementById("no4").value);

    let ans = num1 + num2 + num3 + num4;
    let ans1 = ans % 100;

    alert("Sum: " + ans + "percentage " + ans1);
}
