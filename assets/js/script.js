
// - create var elements
var dogButtonEl = document.getElementById('dogbutton')
var dogImage = document.getElementById('dog-image')
var dogImageURL = 'https://dog.ceo/api/breeds/image/random'
var zooButtonEl = document.getElementById('zoobutton')
var zooImageURL = "https://zoo-animal-api.herokuapp.com/animals/rand"
var zooImage = document.getElementById('zoo-image')
var saveDogBtn = document.getElementById('save-dog-button')
var saveAnimalBtn = document.getElementById('save-animal-button')
var savesection = document.getElementById("save-section");

// - add dog button functionality
dogButtonEl.addEventListener('click', function() {
  fetch(dogImageURL).then(function(response) {
      // console.log(response);
      response.json().then(function(data) {
        // console.log(data);
        dogImage.src = data.message
        saveDog(data.message)
      });
  });  
})

// add ability to save dog to local storage
var saveDog = function(dogData) {
var handleSave = function() {
  var savedDogs = JSON.parse(localStorage.getItem('dogs')|| '[]')
  savedDogs.push(dogData)
  localStorage.setItem('dogs', JSON.stringify(savedDogs))
}
saveDogBtn.addEventListener('click', handleSave)
}

// add zoo animal button functionality
zooButtonEl.addEventListener('click', function() {
  fetch(zooImageURL).then(function(response) {
    response.json().then(function(data) {
      zooImage.src = data.image_link
      saveAnimal(data.image_link)
    })
  })
})

// // add ability to save zoo animal to local storage
// var saveAnimal = function(animalData) {
//   var handleSave = function() {
//   var savedAnimals = JSON.parse(localStorage.getItem('animals')|| '[]')
//   savedAnimals.push(animalData)
//   localStorage.setItem('animals', JSON.stringify(savedAnimals))
//   }
//   saveAnimalBtn.addEventListener('click', handleSave)
//   saveAnimalBtn.addEventListener('click', display)
//   }

//   //  display local storage
// function display() {
//   var localData = localStorage.getItem('animals')
//   console.log(localData)
// }