// chapter # 1
       
    //  1
// alert("welcome")
    // 2
// alert("Error!Please enter a valid password")
    // 3
// alert("Welcome to JS land.. \n Happy coding")
    //   5
// console.log("Hello..I can run JS through web browser's console ")


// Chapter # 2
    //  1
// var userName
    //  2 
// var myName ="Muhammad usman naeem"
    // 3
// var message = "Hello world"
// alert(message)
    //  4
// var studentsName = "Bilal noman"
// var studentage = "15 years old"
// var course = "Certified Mobile Application Development"
// alert(studentsName)
// alert(studentage)
// alert(course)
        // 5
// alert("PIZZA \n PIZZ \n PIZ \n PI \n P")
        // 6
// var email = "unitedpakistan22@gmail.com"
// alert("MY email address is" + " " +email)
        // 7
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book" + " " + book)
        // 8
// document.write("Yah! I can write HTML content through Javascript")
         //9  
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" )


// Chapter # 3
    // 1
// var age = 20
// alert("I am"+" " + age + " "+ "years old" )
    // 2    
// var a = prompt("Enter Your name")
// alert("You have visited this site 14 times")
    // 3
// var birthYear = 2001
// document.write("MY birth year is"+ " "+ birthYear)
    // 4
// var visitorsName = "John doe"
// var productTitle = "T-shirts"
// var quantity = 5
// document.write(visitorsName+ " " + "ordered" + " " + quantity + " " + productTitle + " " + "on XYZ clothing store")

// chapter # 4
    // 1
// var a = "one" , b = "two" , c = "three"
    // 2
// Illegal variables
// var my name = "name"
// var  5number = "numbers"
// var @name = "XYZ"
// var ,name = "xyz"

// Legal variables

// var name = "Xyz"
// var myName = "xyz"
// var $name = "xyz"
// var my_name = "xyz"
    // 3 
// document.write("<h1>")
// document.write("Rules for naming JS variables"+"<br/>" )
// document.write("</h1>")
// document.write(" Variable names can only contain ______, ______, ______ and ______." + "For example $my_1stVariable" + "<br />")
// document.write(" Variables must begin with a ______, ______ or _____. For example $name, _name or name d" + "<br />")
// document.write(" Variable names are case _________ " + "<br/>")
// document.write(" Variable names should not be JS _________ ")



// ch 5
      // 1
// var num1 = 3
// var num2 = 5
// var c = num1 + num2
// console.log("sum of"+" "+num1+" "+"and"+" "+num2+" "+"is"+" "+c)

    //   3
// var a = "one"
// console.log("value after variable declaration is" + " " + a)
// var b = 5 
// console.log("initial  value is" + " " + b)
// var c = ++b
// console.log("value after increment is " + " " +c)
// var d = c + 7
// console.log("value after addition is" + " " + d)
// var e = --d
// console.log("value after decrement is" + " " + e)
// var f = e / 3
// console.log("The remainder is" + " " + f)
    
         //  4
// var price = prompt("how many tickets")
// var tprice = 600
// var a = price*tprice
// document.write("total cost to buy" + " " + price + " " + "tickets to a movie is" + " " + a + "PKR")
         
           //  5
// var num = prompt("enter number")
// for(var i = 1 ; i <= 10 ; i++){
//     document.write(num + "X" + i + "=" + num*i + "<br/>")
// }
            // 6
// var temp = prompt("enter temperature in celsius")
// var a = (temp*9/5) + 32
// document.write(temp + "C" + " " + a + "F")
         
            //  9
// var usd = 10
// var suadr = 25
// var pkru = 160
// var pkrs = 30
// console.log(usd +" "+"dollar is equal to"+" "+usd*pkru+"PKR")
// console.log(saudr +" "+"Riyal is equal to"+" "+suadr*pkrs+"PKR")
          
         //  11
// var a = prompt("Enter current year")
// var b =prompt("Enter birth year")
// var age = a-b



// chapter # 6-9
      
         //  1
// var a = 10
// document.write("the value of a is" + " " + a + "<br />")
// document.write("the value of ++a is" + " " + ++a + "<br />" + "Now the value of a is" + " " + a + "<br/>")
// document.write("the value of a++ is" + " " + a++ + "<br />" + "Now the value of a is" + " " + a + "<br/>")
// document.write("the value of --a is" + " " + --a + "<br />" + "Now the value of a is" + " " + a + " <br/>")
// document.write("the value of -a-- is" + " " + a-- + "<br />" + "Now the value of a is" + " " + a + " <br/>")

        //  2
// var a = 2, b = 1
// var c = --a - --b + ++b + b--
// document.write(c)
// document.write(--a + "<br/>")
// document.write(--a - --b + "<br/>")
// document.write(--a - --b + ++b + "<br/>")
// document.write(--a - --b + ++b + b-- + "<br/>")
        
          //  3
// var name = prompt("Enter Your name")
//    alert("Wellcome"+" "+ name)
          
        //  4  
// var num = prompt("Enter Number", "0") 
// var i = 0;
// for (i = 1; i <= 10; i++) {
//   document.write(  num + " x " + i + " = " + num * i + "<br/>");
// }

        //  5
// var sub1 = prompt("Enter your 1 subject")
// var sub2 = prompt("Enter your 2 subject")
// var sub3 = prompt("Enter your 3 subject")
// var num = 100
// var subNum1 = prompt("Enter obtained marks of subject 1")
// var subNum2 = prompt("Enter obtained marks of subject 2")
// var subNum3 = prompt("Enter obtained marks of subject 3")
// var percen = (subNum1/num)*100
// document.write("<table>")
// document.write("<th>")
// document.write("subject")
// document.write("Total Marks")
// document.write("ObtainedMarks")
// document.write("Percentage")
// document.write("</th>")
// document.write("<tr>")
// document.write("<td>")
// document.write(sub1)
// document.write(num)
// document.write(subNum1)
// document.write(percen)
// document.write("</td>")
// document.write("</tr>")
// document.write("<table>")
// document.write("</table>")

// chapter # 9-11
        
        // 1
// var name = prompt("Enter your city")
// if(name === "Karachi"){
//     alert("WEllcome to the city of lights")
// }else{
//     alert("Wellcome to the"+ " " + name)
// }

        // 2
// var gender = prompt("Enter your gender")
// if(gender === "Male"){
//     alert("Good Morning Sir")
// }else{
//    alert ("Good Morning Ma'am")
// }

        // 3
// var color = prompt("Enter traffic signal color")
// if(color === "red"){
//     alert("Must stop")
// }if(color === "yellow"){
//     alert("Ready to move")
// }if(color === "green"){
//     alert("Move now")
// }
  
        // 4          
// var a = prompt("Your car fuel in liters")
// if(a <= 0.25){
//     alert("Please refill the fuel")
// }else if(a > 0.25){
//     alert( "enjoy your ride")
// }

    //  5
// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }yes
//  var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }no
// var c = 12; if (c++ === 13){ alert("condition 1 is true"); }(no) if (c === 13){ alert("condition 2 is true"); }(yes) if (++c < 14){ alert("condition 3 is true"); }(yes) if(c === 14){ alert("condition 4 is true"); }(no) 
 // var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }(yes)
//  if (true){ alert("True"); } if (false){ alert("False"); } 
// if("car" < "cat"){ alert("car is smaller than cat"); } (yes)

        // 6
// var totalMarks1 = prompt("Enter total makrks of urdu")
// var totalMarks2 = prompt("Enter total makrks of Maths")
// var totalMarks3 = prompt("Enter total makrks of English")
// var obtMarks1  = prompt("obtained marks of urdu")
// var obtMarks2  = prompt("obtained marks of Maths")
// var obtMarks3  = prompt("obtained marks of English")


        //  7
// var a = prompt("guess the number")
// // var b = 5
// if(a === "5"){
//     alert("Bingo! Correct answer ")
// } else if(a === "6"){
//      alert("close enough")
//  }else if(a === "4"){
//      alert("close enough")
//  }
//  else{
//      alert("wrong")
// }

        // 8
// var num = prompt("enter a number divisible by 3")
// var a = num/3
// if(num / 3 ){
//     alert("correct")
// }


        // 10
// var temp = prompt("temperatura in celsius")
// if(temp > "40"){
//     alert("It is too hot outside")
// }
// else if(temp > "30"){
//         alert("The Weather today is Normal")
// }
// else if(temp > "20"){
//     alert("“Today’s Weather is cool")
// }
// else{
//     alert("OMG! Today’s weather is so Cool")
// }

// chapter # 12-13

// var num1 = prompt("Input the First integer", "0");
// var num2 = prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    document.write("The values "+ num1+ " and "+num2+ " are equal.");
//   }

// Chapter # 17-20


    // 1
// var arr = [[],[],[],[],[]]

     // 2
// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(arr)     
// arr.sort()