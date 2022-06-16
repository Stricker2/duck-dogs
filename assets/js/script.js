
// - create var elements
var dogButtonEl = document.getElementById('dogbutton')
var dogImage = document.getElementById('dog-image')
var dogImageURL = 'https://dog.ceo/api/breeds/image/random'
var zooButtonEl = document.getElementById('zoobutton')
var zooImageURL = "https://zoo-animal-api.herokuapp.com/animals/rand"
var zooImage = document.getElementById('zoo-image')
var saveDogBtn = document.getElementById('save-dog-button')
var saveAnimalBtn = document.getElementById('save-animal-button')

// - add button functionality
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

var saveDog = function(dogData) {
console.log(dogData);
var handleSave = function() {
var savedDogs = JSON.parse(localStorage.getItem('dogs')|| '[]')
savedDogs.push(dogData)
localStorage.setItem('dogs', JSON.stringify(savedDogs))
}
saveDogBtn.addEventListener('click', handleSave)
}

zooButtonEl.addEventListener('click', function() {
  console.log('duck button has been clicked');
  fetch(zooImageURL).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
      zooImage.src = data.image_link
      saveAnimal(data.image_link)
    })
  })
})

var saveAnimal = function(animalData) {
  console.log(animalData);
  var handleSave = function() {
  var savedAnimals = JSON.parse(localStorage.getItem('animals')|| '[]')
  savedAnimals.push(animalData)
  localStorage.setItem('animals', JSON.stringify(savedAnimals))
  }
  saveAnimalBtn.addEventListener('click', handleSave)
  }
// - fetch random dog image from API after button click
// - fetch random duck image from API after button click
// - save something to localstorage (TBD)