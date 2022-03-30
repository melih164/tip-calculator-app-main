
var bill = 0;
var fivePro = 0;
var numOfP = 0;


$("input.bill").change(function (event) {

    bill = parseInt(event.target.value);

    console.log(bill);

})

$("input[type='radio']").click(function () {
    var ratio = parseFloat($(this).attr("value"));

    fivePro = bill * ratio;
    
    console.log(fivePro)

})

$("input.custom").change(function(event) {
    var ratio = parseFloat(event.target.value)/100;

    fivePro = bill * ratio;
    
    console.log(fivePro)
})

$("input.numberOfPeople").change(function (event) {

    numOfP = parseInt(event.target.value);

    console.log(numOfP);

    var totalPP = (bill + fivePro) / numOfP;

    var tipPP = fivePro / numOfP;

    $("p.totalProPerson").text( "$"+parseInt(totalPP));
    
    $("p.tipProPerson").text("$"+parseInt(tipPP));
   

})

$("button").click(function () {

    $("p.totalProPerson").text( "$0.00");
    
    $("p.tipProPerson").text( "$0.00");

    document.getElementById('123').value = '';
    document.getElementById('12').value = '';
    document.getElementsById('6').value = '';
})