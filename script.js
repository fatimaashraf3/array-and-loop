for(i=0;i<=10; i++){
    document.write(i + "<br>" )
}

var tablenum = prompt("Enter any number")
var endnum = prompt("Enter lenght of multiplication table")
for(i=1;i<=endnum; i++){
    document.write(tablenum + "*" + i + "=" + (tablenum*i) + "<br>")
}

var fruits = ["apple" ,"orange" ,"mango" ,"banana" ,"strawberry" ]
for(i=0; i<fruits.length; i++){
    document.write ("Element at index"+ " " + i + " "  + "is" + " "  + fruits[i] + "<br>")
}

document.write("<br>" + "<b>Counting: </b>")
for(i=0; i<=15; i++){
    document.write(i + ","+ " ")
}

document.write("<br>" + "<b>Reverse counting :</b>" + " ")
for(i=15; i>=0; i--){
    document.write(i +  "," + " ")
}

document.write("<br>" + "<b>Even :</b>" + " ")
for(i=0; i<=20; i++){
    if(i%2 === 0){
     document.write(i +  "," + " ")
    }
}

document.write("<br>" + "<b>Odd :</b>" + " ")
for(i=0; i<=20; i++){
    if(i%2 != 0){
     document.write(i +  "," + " ")
    }
}

var dishes = ["cake" , "patties" ,"apple pie" ,"cookie" ,"chips" ]
var bakery = prompt("What you want to order")
found = false
for(i=0; i<dishes.length; i++){
    if(bakery == dishes[i]){
        found = true
        alert(bakery + " " + "is available")
        break;
    }
}
if(found == false){
    alert(bakery + " " + "is not available")
}

document.write(   "<br>" + "<br>"+ "<b>Multiples of 5 : </b>" + "<br>" )
for(i=1; i<=20; i++){
    document.write(5*i + "<br>")
}

document.write("<h1>PATTERNS</h1>")

document.write("<center>")
for(i=1; i<=12; i++){
    for(j=1 ; j<=i ; j++){
    document.write("*")
}
document.write("<br>")
}
document.write("</center>")

document.write("<center>")
for(i=12; i>=1; i--){
    for(j=1 ; j<=i ; j++){
    document.write("*")
}
document.write("<br>")
}
document.write("</center>")

for(i=15; i>=1; i--){
    for(j=1 ; j<=i ; j++){
    document.write("*")
}
document.write("<br>")
}
for(i=1; i<=15; i++){
    for(j=1 ; j<=i ; j++){
    document.write("*")
}
document.write("<br>")
}

var secretnum = 9
var usernum = prompt("Enter a number between 1 to 10")
if(secretnum == usernum){
    alert("Congo! You have guessed right")
}
else{
    alert("Try again")
}

var num = prompt("enter any number")
document.write( "original value  :"+ num + "<br>")
var roundednum = Math.round(num )
document.write("rounded value  :"+roundednum + "<br>")
var floornum = Math.floor(num)
document.write("floor value   :"+floornum + "<br>")
var ceilednum = Math.ceil(num)
document.write("ceil value  :"+ceilednum + "<br>")

document.write("<br>")


var userweight = prompt("enter your weight")
document.write("original value :"+userweight + "<br>")
var rounduser = Math.round( userweight)
document.write("Rounded value of user's weight :" + rounduser )


document.write("<br>")


var num = prompt("enter any negative number")
document.write( "original value  :"+ num + "<br>")
var roundednum = Math.round(num )
document.write("rounded value  :"+roundednum + "<br>")
var floornum = Math.floor(num)
document.write("floor value   :"+floornum + "<br>")
var ceilednum = Math.ceil(num)
document.write("ceil value  :"+ceilednum + "<br>")