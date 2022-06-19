
// - create var elements
var dogButtonEl = document.getElementById('dogbutton')
var dogImage = document.getElementById('dog-image')
var dogImageURL = 'https://dog.ceo/api/breeds/image/random'
var zooButtonEl = document.getElementById('zoobutton')
var zooImageURL = "https://zoo-animal-api.herokuapp.com/animals/rand"
var zooImage = document.getElementById('zoo-image')
var saveDogBtn = document.getElementById('save-dog-button')
var saveAnimalBtn = document.getElementById('save-animal-button')
var savesection = document.getElementById("save-section")

// - add dog button functionality
dogButtonEl.addEventListener('click', function() {
  fetch(dogImageURL).then(function(response) {
      response.json().then(function(data) {
        dogImage.src = data.message
        saveDog(dogImage.src)
      });
  });  
})

// add ability to save dog to local storage
var saveDog = function(dogData) {
  var handleSave = function() {
    var savedDogs = JSON.parse(localStorage.getItem('dogs')|| '[]')
    savedDogs.push(dogData)
    localStorage.setItem('dogs', JSON.stringify(savedDogs))
    var dogImgEl = document.createElement('img')
    dogImgEl.classList.add('save-image')
    dogImgEl.src = dogData
    savesection.appendChild(dogImgEl)
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

// add ability to save zoo animal to local storage
var saveAnimal = function(animalData) {
  var handleSave = function() {
    var savedAnimals = JSON.parse(localStorage.getItem('animals')|| '[]')
    savedAnimals.push(animalData)
    localStorage.setItem('animals', JSON.stringify(savedAnimals))
    var animalImgEl = document.createElement('img')
    animalImgEl.classList.add('save-image')
    animalImgEl.src = animalData
    savesection.appendChild(animalImgEl)
  }
  saveAnimalBtn.addEventListener('click', handleSave)
}

var loadAnimal = function(animalImages) {
  var handleLoad = function() {
    var loadedAnimals = JSON.stringify(localStorage.setItem('animals')|| '[]')
    loadedAnimals.push(animalImages)
    localStorage.getItem('animals', JSON.parse(animalImages[i]))
  }
  saveAnimalBtn.addEventListener('click', handleLoad)
}