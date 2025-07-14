document.getElementById("bt").addEventListener("click",function()
{
    total()
})

function total()
{
    let a = Number(document.getElementById("one").value);
    let b = Number(document.getElementById("two").value);
    let c = Number(document.getElementById("three").value);
    let d = Number(document.getElementById("four").value);
    let sum = a+b+c+d;
    alert("Addition : "+sum);

    if(sum >= 50000)
    {
        alert("you should pay tax");
    }
    else
    {
        alert("you should not pay tax");
    }

}
