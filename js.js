function abc() {

    mark=Number(document.getElementById("a").value);
    

    if(mark>=90 && mark<=100){
        alert("A+")
    }else if (mark>=80 && mark<90) {
        alert("b+")
    }else if (mark>=70 && mark<80) {
        alert("c+")
    }else if (mark>=60 && mark<70) {
        alert("c+")
    }else if (mark<60 && mark>0) {
        alert("fail")
    
    }else {
        alert("invalid number")
    }
    
}