// Using array-of-objects js as guide

document.addEventListener("DOMContentLoaded", function(){
    let date_field = document.getElementById("date");
    date_field.value = new Date();

    // let now = document.getElementById("date"); 
    // now.dateFormat("longTime");
    
    // var d = new Date();
    // document.getElementById("datePicker").innerHTML = d.toDateString();
   
console.log(date_field, "date help")


});  // native browser event and callback




// // 1. Create an array to hold quiz questions and answers
// const questions = [
//   {question: 'How many planets are in the Solar System?', answer:'8'},
//   {question: 'How many continents are there?', answer:'7'},
//    {question: 'How many legs does an insect have?', answer:'6'},
//    {question: 'What year was JavaScript created?', answer:'1995'}
// ];

// // 2. Store the number of questions answered correctly
// const correct = [];
// const incorrect = [];
// let correctAnswers = 0;

// /* 
//   3. Use a loop to cycle through each question
//       - Present each question to the user
//       - Compare the user's response to answer in the array
//       - If the response matches the answer, the number of correctly
//         answered questions increments by 1
// */
// for ( let i = 0; i < questions.length; i++ ) {
//   let question = questions[i].question;
//   let answer = questions[i].answer;
//   let response = prompt(question);
  
//   if ( response === answer ) {
//     correctAnswers++;
//     correct.push(question);
//   } else {
//     incorrect.push(question);
//   }
// }

// function createListItems(arr) {
//   let items = '';
//   for (let i = 0; i < arr.length; i++) {
//     items += `<li>${arr[i]}</li>`;
//   }
//   return items;
// }

// // 4. Display the number of correct answers to the user
// let html = `
//   <h1>You got ${correctAnswers} question(s) correct</h1>
//   <h2>You got these questions right:</h2>
//   <ol>${ createListItems(correct) }</ol>

//   <h2>You got these questions wrong:</h2>
//   <ol>${ createListItems(incorrect) }</ol>
// `;

// document.querySelector('main').innerHTML = html;