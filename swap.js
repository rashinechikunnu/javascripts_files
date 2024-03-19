function swap(){
    var a,b,
    a = Number(document.getElementById('tx1').value)
    b = Number( document.getElementById('tx2').value)

    a = a+b;
    b = a- b;
    a = a-b;

    document.getElementById('tx3').value=a
    document.getElementById('tx4').value=b
}