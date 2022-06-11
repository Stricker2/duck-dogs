
// - create var elements
var dogButtonEl = document.getElementById('dogbutton')
var dogImage = document.getElementById('dog-image')
var dogImageURL = 'https://dog.ceo/api/breeds/image/random'
var duckButtonEl = document.getElementById('duckbutton')

// - add button functionality
dogButtonEl.addEventListener('click', function() {
    fetch(dogImageURL).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data.message);
          dogImage.src = data.message
        });
      });
    
})

duckButtonEl.addEventListener('click', function() {
    console.log('duck button has been clicked');
})

// - fetch random dog image from API after button click
// - fetch random duck image from API after button click
// - save something to localstorage (TBD)