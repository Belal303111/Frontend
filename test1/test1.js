function square(x)
{
    return x*x;
}
function summation(x,y)
{
    return x+y;
} 
function multiplication(x,y)
{
    return x*y;
}
function subtraction(x,y)
{
    return x-y;
}
function division(x,y)
{
    if(y==0) return 0;
    else return x/y;
}
function modlus(x,y)
{
    return x%y;
}
 var test=true;
while(test)
{
    var n=parseInt(prompt("please enter the number of operation s.t 1 to square , 2 to summation , 3 to multiplication , 4 to subtraction , 5 to division , 6 to modlus 7 to exit:"));
    switch(n)
{
    case 1:
        var x=parseInt(prompt("please enter the number:"));
        window.write("the square is:"+square(x));
        break;
    case 2:
        var x=parseInt(prompt("pelase enter the first number:"));
        var y=parseInt(prompt("please enter the second number:"));
        window.write("the summation is:"+summation(x,y));
        break;
    case 3:
            var x=parseInt(prompt("pelase enter the first number:"));
            var y=parseInt(prompt("please enter the second number:"));
            window.write("the multiplication is:"+multiplication(x,y));
        break;
    case 4:
        var x=parseInt(prompt("pelase enter the first number:"));
        var y=parseInt(prompt("please enter the second number:"));
        window.write("the subtraction is:"+subtraction(x,y));
        break;
    case 5:
        var x=parseInt(prompt("pelase enter the first number:"));
        var y=parseInt(prompt("please enter the second number:"));
        window.write("the division is:"+division(x,y));
        break;
    case 6:
        var x=parseInt(prompt("pelase enter your number:"));
        var y=parseInt(prompt("please enter the second number:"));
        window.write(x+"%"+y+"is:"+modlus(x,y));
        break;
    default:
        test=false;
        window.write("Your calcolator is closed");
}
}