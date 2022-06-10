
// - create var elements
var dogButtonEl = document.getElementById('dogbutton')
var duckButtonEl = document.getElementById('duckbutton')

// - add button functionality
dogButtonEl.addEventListener('click', function() {
    console.log('dog button has been clicked');
})

duckButtonEl.addEventListener('click', function() {
    console.log('duck button has been clicked');
})

// - fetch random dog image from API after button click
// - fetch random duck image from API after button click
// - save something to localstorage (TBD)