
// - create var elements
var dogButtonEl = document.getElementById('dogbutton')
var dogImage = document.getElementById('dog-image')
var dogImageURL = 'https://dog.ceo/api/breeds/image/random'
var zooButtonEl = document.getElementById('zoobutton')
var zooImageURL = "https://zoo-animal-api.herokuapp.com/animals/rand"
var zooImage = document.getElementById('zoo-image')


// - add button functionality
dogButtonEl.addEventListener('click', function() {
  fetch(dogImageURL).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data);
        dogImage.src = data.message
      });
  });  
})

zooButtonEl.addEventListener('click', function() {
  console.log('duck button has been clicked');
  fetch(zooImageURL).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
      zooImage.src = data.image_link
    })
  })
})

// - fetch random dog image from API after button click
// - fetch random duck image from API after button click
// - save something to localstorage (TBD)