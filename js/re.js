function myFunction() {
  var d = new Date();
  var n = d.toLocaleDateString();
  // alert("hello");
  // var n = d.getTime();
  // var dateAsString = d.toLocaleDateString();
  // return dateAsString;
  document.getElementById("date").innerHTML = n;
}


document.addEventListener("DOMContentLoaded", function(){
  myFunction();
})



// document.getElementById("date").innerHTML = getTime();  // This is the global scope.

function validation() {
    var name = document.getElementById("token_id").value;
    var email = document.getElementById("email").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '') {
    alert("Please input all fields.");
    return false;
    } else if (!(email).match(emailReg)) {
    alert("Invalid Email.");
    return false;
    } else {
    return true;
    }
  }
  
// document.addEventListener("DOMContentLoaded", function(){
//     let n = document.getElementById("date").innerHTML = m + "/" + d + "/"+ y;
//     n.value = new Date();
//     y = n.getFullYear();
//     m = n.getMonth() + 1;
//     d = n.getDate();

//     // let now = document.getElementById("date"); 
//     // now.dateFormat("longTime");
    
//     // var d = new Date();
//     // document.getElementById("datePicker").innerHTML = d.toDateString();
   
// console.log(date_field, "date help")

// document.addEventListener("DOMContentLoaded", function(){

//     var d = new Date();
//     document.getElementById("date").innerHTML = d;

// console.log(date_field, "date help")

// });  // native browser event and callback



// document.addEventListener("DOMContentLoaded", function(){
//     let date_field = document.getElementById("date");
//     date_field.value = new Date();

//     // let now = document.getElementById("date"); 
//     // now.dateFormat("longTime");
    
//     // var d = new Date();
//     // document.getElementById("datePicker").innerHTML = d.toDateString();
   
// console.log(date_field, "date help")


// });  // native browser event and callback




