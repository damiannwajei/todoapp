// //variables
// //target all needed element nodes
// const form = document.querySelector('form')
// const input = document.querySelector('input')
// const set = document.querySelector('#todos')
// const completeButton = document.getElementById('complete')
// const delButton = document.getElementById('delete')


// //Adding event listener
// form.addEventListener('submit', function (e){
//   e.preventDefault()
  
//   // if(input.value){
//   //   console.log(input.value);
//   // }
      
//   // if(input.value === ''){
//   //   return
//   // } else{
//   //   console.log(input.value);
//   // }

//   // OR

//   if(input.value !== ''){
//     // create element for a new input value
//     const div = document.createElement('div');

//     //set the innerHtMl to the new value
//     // div.innerHTML = `<p>${input.value}</p>`;
//     // div.innerHTML += `<button>completed</button>`;

//     const p = document.createElement('p');
//     const dive = document.createElement('div');
//     const completeButton = document.createElement('button');
//     const delButton = document.createElement('button');

//     p.textContent = input.value;
//     completeButton.textContent = 'complete';
//     delButton.textContent = 'delete';

//     completeButton.id = 'com';
//     delButton.id = 'del';
//     div.id = 'sec-2';

//     div.appendChild(p);
//     dive.appendChild(completeButton);
//     dive.appendChild(delButton);
    
//     div.appendChild(dive);
//     set.appendChild(div);
//     input.value = ''
  
//   }
// });

// //complete todo functionality
// todos.addEventListener('click', function(e){
//   if (e.target.id === 'com'){
//     let btn = e.target;
//     btn.parentElement.parentElement.style.opacity = '0.2';
//   }
// })

// todos.addEventListener('click', function(e){
//   if (e.target.id === 'del'){
//     let delButton = e.target;
//     delButton.parentElement.parentElement.remove();
//   }
// })


// //get date


//Es5
function University(schoolName, schoolLocation, schoolNickname) {
  this.schoolName = schoolName;
  this.schoolLocation = schoolLocation;
  this.schoolNickname = schoolNickname;
  this.intro = function(){
    console.log(`my name is damian, and i'm a student of ${this.schoolName} also known as ${this.schoolNickname} located in ${this.schoolLocation}
  }
}


  const uniport = new university('university of port harcourt', 'choba', 'uniport')
  console.log(uniport.intro())

// //ES6
// class University{
//   constructor(schoolName, schoolLocation, schoolNickname) {
//     this.schoolName = schoolName;
//     this.schoolLocation = schoolLocation;
//     this.schoolNickname = schoolNickname;
//   }

//   intro() {
//     console.log(`my name is damian, and i'm a student of ${this.schoolName} also known as ${this.schoolNickname} located in ${this.schoolLocation})
//   }
// }