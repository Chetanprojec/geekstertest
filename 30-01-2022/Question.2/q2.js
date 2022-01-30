var n = Number(prompt("Enter the number:"));
var flag = 1;
var num = [];
if (isNaN(n)) {
    console.log("Please enter correct numbers");
} else {
    for (var i = flag; i <= n; i++) {
        var result = 0;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                result = 1;
                break;
            }
        }
        if (i > 1 && result == 0) {
            num.push(i);
        }
    }
    console.log("The prime numbers between 1 to" +" " + n +" " +"are" + " " + num);
}